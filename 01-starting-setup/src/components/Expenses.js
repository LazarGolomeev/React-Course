import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = [];
  props.expenses.forEach((expense) => {
    expenses.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></ExpenseItem>
    );
  });
  return (
    <div className="expenses">
      {expenses}
    </div>
  );
}

export default Expenses;
