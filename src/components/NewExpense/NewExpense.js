import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),

    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;

// props can be called by the parent to child
// here we are passing pointer at a function in new expense onsaveexpense data
//custom component recieve as the value pointer on onSaveExpeenseData but we doint execute saveexpensedatahandker here
// step2 use this function inside of our custom Componentthis step we didint do in input as they have inbuilt functionwe are addind a function in onchange and react internally calling the event listiner in that.Componentin
// In custom component we do manually
// in expense form we get props and now instead of submit handler or locking the expense data using props onsaveexpensedata now we execute their
// this expensedata function we are calling in different function in expense form
//expenseform component can communicate to up parent component in this case we can call a function in new expense function we pass the expensedata as the argument thast the value we will recieve as the parameter in newexpense function
