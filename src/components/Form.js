import React from "react";

const Form = () => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <form>
      <input onChange={inputTextHandler} type="text" class="todo-input" />
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
