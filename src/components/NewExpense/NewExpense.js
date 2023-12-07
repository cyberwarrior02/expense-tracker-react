import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random.toString(),
    };
    console.log(expenseData);
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
