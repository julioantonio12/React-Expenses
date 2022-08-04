import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState(null);
  // const [enteredDate, setEnteredDate] = useState("");
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setExpense((previousState) => {
      return {
        ...previousState,
        title: event.target.value,
      };
    });

    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpense((previousState) => {
      return { ...previousState, amount: event.target.value };
    });
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpense(() => {
      return { ...expense, date: new Date(event.target.value) };
    });
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpense(expense);
    setExpense({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input type="text" value={expense.title} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Cantidad</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
            value={expense.amount}
          />
        </div>

        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2023-12-31"
            value={expense.date}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Agregar gasto</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
