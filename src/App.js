import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import TodoList from './Components/Todolist'

export default function App() {
	return (
		<>
			<div className="app-main">
				<Routes>
					<Route path="todo-list/home" element={<Home />} />
					<Route path="todo-list/todolist" element={<TodoList />} />
					<Route path="todo-list/" element={<Home />} />
				</Routes>
			</div>
		</>
	)
}
