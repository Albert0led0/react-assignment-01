import React, { useState } from "react";

import DUMMY_EXPENSES from "./components/Expenses/ExpenseItem/expenses";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Forms/NewExpense";

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
