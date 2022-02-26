//import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import TodoForm from './TodoForm'
import TodoList from './TodoList'

/*
-TodoDynamic (or App) will hold TodoForm and TodoList and states (must pass them downward to components)
-create the TodoForm and add methods to input values, and submit to add todos
-create the TodoList and add methods to mark them as completed, edit, or delete
-Go back to TodoDynamic (or App) and just add the state that each component needs for the methods 
-Pass down to {props} from TodoDynamic (or App) to each component - no methods 
-We need to pass states for todos and setTodos in order to complete and delete
*/


export default function TodoDynamic(){
    const [input, setInput] = useState("")  //3. pass this down to TodoForm below
    const [todos, setTodos] = useState([])   // Edit   3. pass this down to TodoList below   

    // const [toggleSubmit, setToggleSubmit] = useState(false)  //edit
    // const [editTodo, setEditTodo] = useState(null)  //edit  id of todo we are editing
    // const [editText, setEditText] = useState("")

    //edit
    //const initialState = JSON.parse(localStorage.getItem("todos")) || []  //edit
    //const [todos, setTodos] = useState(initialState)   // Edit   3. pass this down to TodoList below   
    //const [editTodo, setEditTodo] = useState(null)  //edit

    // useEffect(() => {  //edit
    //     localStorage.setItem("todos", JSON.stringify(todos))  //stores todos in local storage and display todos
    // }, [todos])

    return (
        <div> 
            <h1>Todos Add</h1>          
            <TodoForm  
                todos={todos}
                setTodos={setTodos}                               //4. pass props to TodoForm component 
                input={input}
                setInput={setInput}
                // toggleSubmit={toggleSubmit}     //edit
                // setToggleSubmit={setToggleSubmit}  //edit  
                // editTodo={editTodo}
                // setEditTodo={setEditTodo}                               
            /> 
            <TodoList                   //4. pass props to TodoList componentpin
                todos={todos}
                setTodos={setTodos}
                input={input}   //edit   
                setInput={setInput}    //edit               
                // toggleSubmit={toggleSubmit}     //edit
                // setToggleSubmit={setToggleSubmit}  //edit 
                // editTodo={editTodo}
                // setEditTodo={setEditTodo}                                         
                // editText={editText}
                // setEditText={setEditText}                
            />
        </div>
    )
}