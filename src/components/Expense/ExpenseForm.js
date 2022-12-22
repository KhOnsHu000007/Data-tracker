import React, { useState } from "react";
import '../ExpenseForm.css'
const ExpenseForm = (props) => {
    
    const [EnterName, setName] = useState('')
    const NameHandler = (event) => {
        setName(event.target.value)
    }
    const [EnterPrice, setPrice] = useState('')
    const PriceHandler = (event) => {
        setPrice(event.target.value)
    }
    const [EnterDate, setDate] = useState('')
    const DateHandler = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const ExpenseData = {
            title: EnterName,
            amount: +EnterPrice,
            date: new Date(EnterDate)
        }
        props.SaveExpensedata(ExpenseData)
        setName('')
        setPrice('')
        setDate('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Name</label>
                    <input type='text' onChange={NameHandler} value={EnterName}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input type='number' min='0.01' onChange={PriceHandler} value={EnterPrice}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2015-01-01' onChange={DateHandler} value={EnterDate}/>
                </div>
            </div>
            <div>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className="new-expense__actions" onClick={handleSubmit}>Add Expense</button>
            </div>
        </form>
    )

}

export default ExpenseForm