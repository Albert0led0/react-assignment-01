import ExpenseItem from "../ExpenseItem/ExpenseItem";

function Expenses(props) {
  const expenseList = [];

  props.data.forEach((e) => {
    expenseList.push(
      <ExpenseItem title={e.title} amount={e.amount} date={e.date} />
    );
  });

  return <div className="expenses">{expenseList}</div>;
}

export default Expenses;
