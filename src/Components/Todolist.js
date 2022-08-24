import { useState, React } from 'react'
import TodoItem from './TodoItem'

export default function Todolist() {
	const [state, setState] = useState({
		todo: '',
		todoList: [],
	})

	const [edit, setEdit] = useState({
		editTodo: '',
		editTodoindex: '',
	})

	const { todo, todoList } = state
	const { editTodo, editTodoindex } = edit

	const [isUpdate, setUpdate] = useState(false)

	const handleOnChangeEdit = (e) => {
		const value = e.target.value

		setEdit({ ...edit, editTodo: value })
	}

	const handleOnChange = (e) => {
		const value = e.target.value

		setState({ ...state, todo: value })
	}

	const handleCreate = () => {
		const list = todoList
		list.push(todo)

		setState({ ...state, todoList: list })
		setState({ ...state, todo: '' })
	}

	const handleDelete = (index) => {
		setUpdate(false)
		const list = todoList
		list.splice(index, 1)

		setState({ ...state, todoList: list })
	}
	const handleEdit = (index, value) => {
		setUpdate(true)
		setEdit({ editTodo: value, editTodoindex: index })
	}
	const handleUpdate = (index) => {
		setUpdate(false)
		const list = todoList
		list[index] = editTodo

		setState({ ...state, todoList: list })
	}
	const handleCancel = () => {
		setUpdate(false)
	}

	return (
		<>
			<div className="todolist-main">
				<h1>Add something to do!</h1>
				<div className="form-container">
					<input
						type="text"
						name="todo"
						onChange={handleOnChange}
						value={todo}
						placeholder="Input something to do"
					/>
					<button type="button" onClick={handleCreate}>
						Add
					</button>
				</div>
				<div className="list-container">
					{todoList.length ? (
						todoList.map((value, index) => {
							return (
								<TodoItem
									value={value}
									index={index}
									key={index}
									deleteTodoItem={handleDelete}
									editTodoItem={handleEdit}
								/>
							)
						})
					) : (
						<span>No records found</span>
					)}
					{isUpdate ? (
						<div className="form-edit-container">
							<span>{editTodoindex + 1}.</span>
							<input
								type="text"
								name="todo"
								onChange={handleOnChangeEdit}
								value={editTodo}
								placeholder="Update this to do"
							/>
							<button type="button" onClick={() => handleUpdate(editTodoindex)}>
								Update
							</button>
							<button type="button" onClick={handleCancel}>
								Cancel
							</button>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</>
	)
}
