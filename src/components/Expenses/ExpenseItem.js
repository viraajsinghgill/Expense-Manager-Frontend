//components are just fuction that returns an HTML code.
import React,{ useState } from "react";
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

   

    return (
      <li>    
        <Card className="expense-item">
        <ExpenseDate date={props.date}/>                      
      <div className="expense-item_description">
        <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">₹{props.amount}</div>
        
     </Card>
     </li>
     
  );
}

export default ExpenseItem;
