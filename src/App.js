import React from 'react';
import ToDoMain from "./components/ToDoMain";
let props = [];
const values = localStorage.getItem("todoList");
if (values) props = JSON.parse(values);

function App() {

  return (
    <ToDoMain props={props} ></ToDoMain>
  );
}

export default App;
