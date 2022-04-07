import React, { useState } from 'react';

const ToDo = (props) => {

    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredDate, setenteredDate] = useState("");
    const [enteredTime, setenteredTime] = useState("am");

    const submitHandler = (event) => {
        event.preventDefault();
        const todoData = {
            title: enteredTitle.trim(),
            date: enteredDate,
            time: enteredTime
        }

        // console.log(todoData);
        props.onSubmitTodo(todoData);
        setenteredTitle("");
        setenteredDate("");

    }

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
    }


    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value);
    }


    const timeChangeHandler = (event) => {
        setenteredTime(event.target.value);
    }

    const handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      } 
    return (
        <form onSubmit={submitHandler}>
            <input required type="text" value={enteredTitle} onChange={titleChangeHandler} placeholder="Enter your todo... "/><br></br>
            <input type="time" value={enteredDate} onChange={dateChangeHandler} placeholder="Set your time..." />
            <select id="cars" value={enteredTime} name="cars" onChange={timeChangeHandler}>
                <option value="am" selected>AM</option>
                <option value="pm">PM</option>
            </select>
            <button type="submit" className="action-button">Add</button>
        </form>
    )
}
export default ToDo;