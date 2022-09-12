import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { id: "e1", title: "Insurance", amount: 120, date: new Date(2022, 4, 9) },
    { id: "e2", title: "Groceries", amount: 50, date: new Date(2022, 3, 25) },
    { id: "e3", title: "Beer", amount: 20, date: new Date(2022, 4, 5) },
    { id: "e4", title: "Keyboard", amount: 99, date: new Date(2022, 2, 4) },
  ];

  const addExpenceHandler = expense => {
    
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log("In APP.js");
    console.log(expenseData);
    expenses.push(expenseData);
  }

  return (
    <div>
      <NewExpense
        onSaveExpenseData = {saveExpenseDataHandler} 
      />
      <Expenses
        expenses = {expenses}
      />
    </div>
  );
}

export default App;
