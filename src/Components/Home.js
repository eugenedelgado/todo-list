import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
	let navigate = useNavigate()

	function handleOnClick() {
		navigate('/todolist')
	}
	return (
		<>
			<div className="home-main">
				<h1>Welcome to my To Do List!</h1>
				<button onClick={handleOnClick}>Get Started</button>
			</div>
		</>
	)
}
