import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 7, 1);
  const expenseTitle = 'Monitor Game factor 27" QHD';
  const expenseAmount = 4899.50;

  return (
    <>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
