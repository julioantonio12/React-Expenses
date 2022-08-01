import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <>
      <div className="expense-item">
        <div>Agosto 1 2022</div>
        <div className="expense-item__description">
          <h2>Tacos de barbacoa</h2>
          <div className="expense-item__price">$45.5</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
