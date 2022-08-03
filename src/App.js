import "./App.css";
import "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
