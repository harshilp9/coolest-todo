import React, { useState } from 'react';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandlerConst = () => {
        setTitle("info 2");
    }

    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
                <h2>{title} + 1</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandlerConst}>{title}</button>
        </div>
    )
}
export default ExpenseItem;