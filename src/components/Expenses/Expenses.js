import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Core UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

function Expenses(props) {
  const expenseList = [];
  props.data.forEach((e) => {
    expenseList.push(
      <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
    );
  });

  // eslint-disable-next-line
  const [filterYear, setFilterYear] = useState("2022");

  const saveFilterYearHandler = (enteredFilterYear) => {
    setFilterYear(enteredFilterYear);
    console.log(enteredFilterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSaveFilterYear={saveFilterYearHandler} />
        {expenseList}
      </Card>
    </div>
  );
}

export default Expenses;
