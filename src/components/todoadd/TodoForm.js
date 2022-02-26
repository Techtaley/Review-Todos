//import React, { useEffect } from 'react'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

//export default function TodoForm({input, setInput, todos, setTodos, editTodo, setEditTodo}){  //props used in presentational function
//export default function TodoForm({input, setInput, todos, setTodos, editTodo, setEditTodo, toggleSubmit, setToggleSubmit}){  //props used in presentational function
export default function TodoForm({input, setInput, todos, setTodos }){  //props used in presentational function

    // const handleUpdate = (e, id, title) => {
    //     e.preventDefault()  //prevents pages from refreshing with submit

    //     setTodos(...todo, {title: todo.title })
    // }

// //    const updateTodo = (id, UpdatedTitle, completed) => {
    // const handleUpdate = ({id}) => {        
    //     setTodos(todos.map(todo => {
    //         if(todo.id === id){
    //             setInput(editTodo.title)
    //             console.log(todo)
    //             return { ...todo, title: todo.title }
    //         } else {
    //             //setEditTodo("")
    //             setInput("")                
    //         }
    //         return todo
    //     }))
    // }   

//         // const newTodo = todos.map(todo => {
//         //   if(todo.id === id){
//         //     todo.title = updatedTitle
//         //   }
//         //   return todo  
//         // }) 
       // setTodos(newTodo)
//         setEditTodo("")    
//     }
    
    // useEffect(() =>{ //edit
    //     if(editTodo){
    //         setInput(editTodo.title)
    //     } else {
    //         setInput("")
    //     }
    // }, [setInput, editTodo])     

    const handleInput = e => {  //sends input entered on form to be displays
        setInput(e.target.value)  
    }      

    const handleSubmit = e => {  //sends old todos and new todos to be displayed onSubmit
        e.preventDefault()  //prevents pages from refreshing with submit

        setTodos(
            [...todos,  //create new todo list by getting old todos and add new todo as an object
            {id: uuidv4(), title: input, completed: false}
        ])

        setInput("")

        // if(!input){
        //     alert("Update title")
        // } else if(input && !toggleSubmit){
        //     setTodos(
        //         todos.map(todo => {
        //             if(todo.id === editTodo){
        //                 return {...todo, title: input}
        //             }

        //             return todo
        //         })        
        //     )
        //     setToggleSubmit(false)  
        //     setInput("")
        //     setEditTodo(null)            
        // } else {
        //     setTodos(
        //         [...todos,  //gets old todos and new todo as an object
        //         {id: uuidv4(), title: input, completed: false}
        //     ])

        //     setInput("")
        // }



        //edit Todos
        // if(!editTodo){
        //     setTodos(
        //         [...todos,  //gets old todos and new todos as an object
        //         {id: uuidv4(), title: input, completed: false}
        //     ])

        //     setInput("")
        // } else {
        //     updateTodo(input, editTodo.id, editTodo.completed)
        // }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter a todo"
                value={input}
                required
                onChange={handleInput}
            />
            <button type="submit">
                {/* {toggleSubmit ? "Update" : "Add"}                  */}
                Add
            </button>  
        </form>
    )
}