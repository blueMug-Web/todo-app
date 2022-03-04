import React, { useState } from "react";
import "./App.css";
import "./components/Form";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState(""); //{inputText is what is passed down to the todo list}
	const [todos, setToDos] = useState([]);

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
			/>
			<TodoList />
		</div>
	);
}

export default App;
