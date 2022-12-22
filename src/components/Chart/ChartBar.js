import React from "react";
import '../ChartBar.css'

const ChartBar = props => {
    let FillHeight = '0%'

    if (props.maxval > 0) {
        FillHeight = Math.round((props.value / props.maxval) * 100) + '%'
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: FillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>

    )
}

export default ChartBar