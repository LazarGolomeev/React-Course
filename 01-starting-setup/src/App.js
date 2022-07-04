import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { id: "e1", title: "Insurance", amount: 120, date: new Date(2022, 4, 9) },
    { id: "e2", title: "Groceries", amount: 50, date: new Date(2022, 3, 25) },
    { id: "e3", title: "Beer", amount: 20, date: new Date(2022, 4, 5) },
    { id: "e4", title: "Keyboard", amount: 99, date: new Date(2022, 2, 4) },
  ];

  return (
    <div>
      <Expenses
        expenses = {expenses}
      />
    </div>
  );
}

export default App;
