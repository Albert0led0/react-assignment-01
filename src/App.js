import expensesData from "./components/Expenses/ExpenseItem/expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Forms/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expensesData} />
    </div>
  );
}

export default App;
