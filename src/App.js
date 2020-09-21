import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "./css/style.css";
import "./css/todo.css";
import "./css/btns.css";
import "./css/form.css";
import "./css/select.css";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <React.Fragment>
      <header>
        <h1>to-do</h1>
      </header>
      <Form />
      <TodoList />
    </React.Fragment>
  );
}

export default App;
