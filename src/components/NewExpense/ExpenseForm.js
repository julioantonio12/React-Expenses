import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState(null);
  // const [enteredDate, setEnteredDate] = useState("");
  const [expense, setExpense] = useState({
    enteredTitle: "",
    enteredAmount: null,
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setExpense((previousState) => {
      return {
        ...previousState,
        enteredTitle: event.target.value,
      };
    });

    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setExpense((previousState) => {
      return { ...previousState, enteredAmount: event.target.value };
    });
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setExpense(() => {
      return { ...expense, enteredDate: event.target.value };
    });
    console.log(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Título</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Cantidad</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <label>Fecha</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2023-12-31"
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
