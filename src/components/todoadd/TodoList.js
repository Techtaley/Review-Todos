import React from "react"
//import todosData from "../todolist/todoData"

export default function TodoList({input, setInput, todos, setTodos }){  //we want to get the todos from state to display
//export default function TodoList({input, setInput, todos, setTodos, editTodo, setEditTodo, toggleSubmit, setToggleSubmit}){  //we want to get the todos from state to display
//export default function TodoList({todos, setTodos, editTodo, setEditTodo}){  //we want to get the todos from state to display
//export default function TodoList({ todos, setTodos }){  //we want to get the todos from state to display
    const handleComplete = ({id}) => {  //gets the id from todos
        setTodos(todos.map(todo => {  
            if(todo.id === id){  //find items with the id
                //console.log(todo)
                return {...todo, completed: !todo.completed}  //toggle ...todo returns all other properties
            }
            return todo
        }))
    }

    //Edit Todos
    // const handleEdit = ({id}) => {  //get the id from todos passed down {} as a prop 
    //     const editTodo = todos.find(todo => todo.id ===id)
    //     console.log(editTodo)
    //     setToggleSubmit(true)  
    //     setInput(editTodo.title)
    //     setEditTodo(id)
    // }

    const handleDelete = ({id}) => {  //get the id from todos   
        setTodos(todos.filter(todo => todo.id !== id))  //returns all except "id" 
    }

    return (
        <div className="todo-list">  
            {todos.map(todo => (
                <li className="todo-list-li" key={todo.id}>
                    <input 
                        type="text"
                        value={todo.title}
                        className={todo.completed ? "strike removeborder" : "removeborder"}                         
                        onChange={(e) => e.preventDefault()} 
                    />

                    <div className="button-list">
                    <button onClick={() => handleComplete(todo)}>completed</button>
                    {/* <button onClick={() => handleEdit(todo)}>edit</button> */}
                    <button onClick={() => handleDelete(todo)}>delete</button>
                    </div>
                </li>       
            ))}                
        </div>
    )
}