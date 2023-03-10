import React from "react";
import ExpenseDate from './ExpenseDate'
import Card from '../../Custom Wrapper/Card'
import '../ExpenseItems.css'


const ExpenseItems = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.name}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>

        </Card>
    )
}

export default ExpenseItems