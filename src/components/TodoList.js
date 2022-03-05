import React from 'react'
//Import Components
import Todo from './Todo';

const TodoList = ({todos, setToDos, filteredToDos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* //Map through all of the entries/inputs to the todo list and display the data in their own Todo component*/}
        {/* //state has data such as text, id, completed(boolean), etc -> access data by using todo.text or todo.completed*/}
        {/* in Todo.js pass {text} in as a prop(destructuring) to the Todo function, and use {text} wherever you want to display the text that we are getting from text={todo.text} below*/ }
        {/*todo is just a variable created here to grab and display the id and text data that is held in the state (each key/text combo is in its own array of data that is being held in state*/}
        {filteredToDos.map((todo) => (
          <Todo 
          setToDos={setToDos} 
          todos={todos}
          key={todo.id} 
          todo={todo}
          text={todo.text} 
          />
        ))}
        </ul>
    </div>
  );
}

export default TodoList

/* Whenever you render a list, remember your KEYS! */