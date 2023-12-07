import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_DUMMY = [
  
];


function App() {

const[expenses,setExpenses]=useState(INITIAL_DUMMY);

  

const expenseDataHandler=(expense)=>{

setExpenses((prevExpenses)=>{
  return [expense, ...prevExpenses];
})

}

  return (
    <div>
      <NewExpense onAddExpenseData={expenseDataHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
