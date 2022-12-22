import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import '../NewExpense.css'
const NewExpense = (props) => {

   const onSaveExpenseData=ExpenceData=>{

      const Data={
         ...ExpenceData,
         id:Math.random().toString()
      }
      console.log(Data)
      props.newExpense(Data)
      setAdd(false)
   } 
    
   const [addData, setAdd]=useState(false)

   const addExpense=()=>{
      setAdd(true)
   }

   const cancelExpense=()=>{
      setAdd(false)
   }
   
   return (
      <div className="new-expense ">
         {addData === true ? 
         <ExpenseForm SaveExpensedata={onSaveExpenseData} onCancel={cancelExpense} /> : 
         <button type="submit" onClick={addExpense}>Add New Expense</button>}
         
      </div>
      

   )
}

export default NewExpense