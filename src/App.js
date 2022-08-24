import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import TodoList from './Components/Todolist'

export default function App() {
	return (
		<>
			<div className="app-main">
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/todolist" element={<TodoList />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</>
	)
}
