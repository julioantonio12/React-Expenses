import "./App.css";
import "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: 'Monitor Game Factor 27" QHD',
    amount: 4999.5,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Mouse G Pro",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Teclado Logitec G-350",
    amount: 2455.5,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Escritorio en L (madera)",
    amount: 3400,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
