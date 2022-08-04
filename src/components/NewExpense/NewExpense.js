import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const onSaveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    };
    console.log(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );

}

export default NewExpense;