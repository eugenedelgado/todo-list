import React from 'react'

export default function TodoItem(props) {
	const { index, value, deleteTodoItem, editTodoItem } = props

	return (
		<>
			<div className="list-row">
				<span>
					{index + 1}. {value}
				</span>
				<button onClick={() => editTodoItem(index, value)}>Edit</button>
				<button onClick={() => deleteTodoItem(index)}>Delete</button>
			</div>
		</>
	)
}
