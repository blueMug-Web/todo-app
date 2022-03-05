import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/Form";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	//State
	const [inputText, setInputText] = useState(""); //{inputText is what is passed down to the todo list}
	const [todos, setToDos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredToDos, setFilteredToDos] = useState([]);

	//RUN ONCE when the app starts
	useEffect(() => {
		getLocalTodos();
	}, []);

	//UseEffect runs when state changes. An empty dependency array [] makes it so the function only runs once (isn't depending on something else)
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	//Functions
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredToDos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredToDos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredToDos(todos);
				break;
		}
	};
	//Save to local storage
	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos)); //save data to local storage
	};

	//if todos is empty, set local storage to nothing, else display the todo list from local storage
	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setToDos(todoLocal);
		}
	};

	return (
		<div className="App">
			<header>
				<h1>Kyle's Todo List</h1>
			</header>

			{/* //Passing in props to the 'Form' */}
			<Form
				inputText={inputText}
				todos={todos}
				setToDos={setToDos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			{/* //Passing state into the TodoList to display all of the data that is held in state (whenever a new item is added to the todo list) */}
			{/* //After putting todos={todos} here, go to TodoList.js and add {todos} as a prop to the TodoList function */}
			{/*setToDos={setToDos} todos={todos} are passed to TodoList and are used in the Todo component as follows:
			<Todo 
				setToDos={setToDos} 
				todos={todos}
				key={todo.id} 
				text={todo.text} 
			/>*/}
			<TodoList
				setToDos={setToDos}
				todos={todos}
				filteredToDos={filteredToDos}
			/>
		</div>
	);
}

export default App;
