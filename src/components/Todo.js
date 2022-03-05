import React from "react";

const Todo = ({text, todo, todos, setToDos}) => {
    //Events
    const deleteHandler = () => {
        //Filter through the state and compare id with whatever we clicked on
        setToDos(todos.filter((el) => el.id !== todo.id));

    };
    const completeHandler = () => {
        setToDos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    // {/*leave other pieces of data alone in 'item' array and only affect 'completed', and make it opposite of what it was */}
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    }
  return (
    <div className="todo">
        {/* if completed=true, add 'completed' to the list of css classNames below -> to update the UI to reflect the change in status (in this case, complete or not complete*/}
        <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
        {/* //Icons <i></i> coming from font-awesome */}
        <button onClick={completeHandler} className="complete-btn">
            <i className="fas fa-check"></i>
        </button> 
        <button onClick={deleteHandler} className="trash-btn">
            <i className="fas fa-trash"></i>
        </button>
    </div>
  );
}

export default Todo

//@Glossary
// el -> element

//todos.filter() -> if the element(el) does not match the data's id, it will delete it