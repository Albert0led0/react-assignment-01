import React, { useState } from "react";

import Card from "../Core UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList/ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const saveFilterYearHandler = (enteredFilterYear) => {
    setFilterYear(enteredFilterYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onSaveFilterYear={saveFilterYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
