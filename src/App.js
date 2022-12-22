import React, { useState } from "react";
import NewExpense from "./components/Expense/NewExpense";
import ExpenseDisp from './components/Expense/ExpenseDisp';
import './App.css';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 7, 17)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 7, 14)
  },
];

function App() {
  
  const [expenses, setNewExpence] = useState(DUMMY_DATA)

  const handleNewExpense = Data => {
    console.log(Data)
    setNewExpence(expenses => {
      return [Data, ...expenses]
    })
  }
  console.log(expenses)
  return (

    <div>
      <NewExpense newExpense={handleNewExpense} />
      <ExpenseDisp items={expenses} />
    </div>

  );
}

export default App;
