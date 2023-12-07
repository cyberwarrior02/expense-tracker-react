import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {

const [setTitle,setTitleHandler]=useState("");    
const [setAmt,setAmtHandler]=useState("");
const [setDate,setDateHandler]=useState("");

const titleChangeHandler=(event)=>{

   setTitleHandler(event.target.value);

}

const amountChangeHandler=(event)=>{

    setAmtHandler(event.target.value);
}

const dateChangeHandler=(event)=>{

    setDateHandler(event.target.value);
}

const submitHandler=(event)=>{

event.preventDefault();

const ExpenseData={

    title: setTitle,
    amount:setAmt,
    date: new Date(setDate)


};

props.onSaveExpenseData(ExpenseData);

setTitleHandler("");
setDateHandler("");
setAmtHandler("");
}

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={setTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={setAmt}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-12-31"
            value={setDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
