import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(!isEditing);
  };

  const showFormHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Agregar gasto</button>}
      {isEditing && <ExpenseForm onSaveExpense={onSaveExpenseHandler} onCancel={showFormHandler}/>}
    </div>
  );
};

export default NewExpense;
