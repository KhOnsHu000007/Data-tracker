import React from "react";
import ChartBar from "./ChartBar";
import '../Chart.css'

const Chart = props => {
    const dataPointValues = props.datapoints.map(datapoints => datapoints.value)
    const maximum = Math.max(...dataPointValues)

    return (

        <div className="chart">

            {props.datapoints.map(datapoint => {
                return <ChartBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxval={maximum}
                    label={datapoint.label} />
            })}

        </div>
    )
}

export default Chart