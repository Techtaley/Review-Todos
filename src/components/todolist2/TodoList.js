import React, { useState } from 'react'

export default function Todolist(){
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [completed, setCompleted] = useState(false)
    
    let handleAdd = e => {
        e.preventDefault()

        setTodos( 
            [...todos,
                {id: Math.floor(Math.random() * 1000), text: input, completed: false}
            ]            
        )
        
        //console.log(todos)
        setInput("")
    }

    let handleInput = e =>{
        setInput(e.target.value)
    }

    // let handleComplete = todo => {
    //     setCompleted(!completed)
    // }

    let handleComplete = id => {
        setTodos(todos.map(todo => {
            console.log(todo)
            return todo.id === id ? {...todo, completed: !todo.completed} : todo
        }))

        setCompleted(!completed)        
    }         
    
    return(
        <>
            <div>
                <input 
                    type="text"
                    placeholder="Add a todo"
                    value={input}
                    onChange={handleInput}
                    required
                />  
                    
                <button 
                    type="submit" 
                    onClick={handleAdd}
                >
                Add
                </button>                            
            </div>

            <div>
                <ul className="removebullets">                   
                    {todos.map(todo => 
                        <li 
                            key={todo.id}
                            className={completed ? "strike" : ""}
                        >
                            {todo.text}

                            <input type="checkbox" onClick={() => handleComplete(todo)} />                                                     
                        </li>  
                    )}
                </ul>  
            </div> 
        </>
    )
}

// //import cx from 'classnames';
// import React, {useState} from 'react';

// export default function TodoList() {
//     const [input, setInput] = useState('')
//     const [todos, setTodos] = useState([])

//     let handleSubmit = e => {
//         e.preventDefault()

//         setTodos(
//             [...todos, {id: Math.floor(Math.round() * 10000), title: input, completed: false}
//             ]
//         )

//         setInput("")
//     }

//     let handleInput = e => {
//         e.preventDefault()

//         setInput(e.target.value)
//     }    

//     let handleClick = id => {
//         setTodos(todos.map(todo => {
//             if(todo.id ===id) {
//                 todo.completed = !todo.completed
//                 return {...todo, completed: !todo.completed}  //toggle ...todo returns all other properties
//             } 
//             return todo
//         }))
//     }

//     return (
//         <>
//             <div>
//                 <h2>
//                     Todo List
//                 </h2>

//                 <form onSubmit={handleSubmit}>
//                     <input 
//                         type="text"
//                         placeholder="Enter a todo"
//                         value={input}
//                         required
//                         onChange={handleInput}    
//                     />
//                     <button type="submit">Add</button>
//                 </form>
//             </div>

//             <div id="todo-list">            
//                 <ul className="removebullets">                  
//                     { todos.map( todo =>                                       
//                      <li key={todo.id} className={todo.completed ? "is-done" : ""} >    
//                     {todo.title}
//                       <span>
//                         <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={handleClick}
//                         />
//                       </span>                     
//                      </li>                                                           
//                     )}
//                 </ul>

//             </div>
//             <style>{`
//                 .is-done {
//                     text-decoration: line-through;
//                 }
//             `}</style>
//         </>
//     );
// }