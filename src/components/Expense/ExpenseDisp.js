import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "../../Custom Wrapper/Card";
import '../Expense.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "../Chart/ExpenseChart";


const ExpenseDisp = (props) => {

    const [selectedYear, setYear] = useState("2022")
    const FilterHandler = Year => {
        console.log(Year)
        setYear(Year)
    }
    const filterExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    })

    return (
        <>
            <Card className="expenses">
                <ExpenseFilter selected={selectedYear} changeFilter={FilterHandler} />

                <ExpenseChart Data={filterExpense}/>
                {filterExpense.length === 0 ? <p>No expense found</p> : filterExpense.map(expenses =>
                    <ExpenseItems
                        key={expenses.id}
                        name={expenses.title}
                        price={expenses.amount}
                        date={expenses.date} />
                )}
            </Card>
        </>
    )
}

export default ExpenseDisp