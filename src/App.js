import expenses from "./components/ExpenseItem/expenses";
import Expenses from "./components/Expenses/Expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
