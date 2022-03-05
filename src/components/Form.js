import React from 'react'

const Form = ({inputText, setInputText, todos, setToDos, setStatus}) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setToDos([
      ...todos, //pass in whatever is already in todos list(array)
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000 //For real production, use a package to generate actual id's (this method just for example)
      }
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" classNameName="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form