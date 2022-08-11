import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { value: 0, label: "Ene", },
    { value: 0, label: "Feb", },
    { value: 0, label: "Mar", },
    { value: 0, label: "Abr", },
    { value: 0, label: "May", },
    { value: 0, label: "Jun", },
    { value: 0, label: "Jul", },
    { value: 0, label: "Ago", },
    { value: 0, label: "Sep", },
    { value: 0, label: "Oct", },
    { value: 0, label: "Nov", },
    { value: 0, label: "Dic", },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />
}

export default ExpensesChart;