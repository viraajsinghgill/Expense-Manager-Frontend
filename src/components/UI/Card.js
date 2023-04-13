import React from "react";
import './Card.css';

const Card=(props)=>{
    const classes ='card ' + props.className;  {/*here we are doing for any thing that we recieve outside the card it will recieve a classes}*/}
    return <div className={classes}>{props.children}</div>;
}
export default Card;