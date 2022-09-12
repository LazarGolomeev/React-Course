import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
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

  const changeYearFilter = (selectedYear) => {
    const newYear = selectedYear;
    console.log("This is the new year" + newYear);
  };
  return (
    <div>
      <ExpensesFilter onChangeYearFilter={changeYearFilter} />
      <Card className="expenses">{expenses}</Card>
    </div>
  );
}

export default Expenses;
