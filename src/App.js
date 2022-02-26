import TodoCheckList from './components/todochecklist/TodoCheckList'
import TodoAdd from './components/todoadd/TodoAdd'
import ToggleLike from './components/togglelike/ToggleLike'
import LikeButton from './components/likebutton/LikeButton'
import './App.css'

export default function App(){
  return (
    <div className="App">
      <ToggleLike/>         
      <br />
      <LikeButton />
      <br />
      <TodoCheckList />
      <br/>
      <TodoAdd />
      <br/>       
  
    </div>
  )
}

// import cx from 'classnames';
// import React, {useState} from 'react';

// export default function TodoList() {
//     const [input, setInput] = useState('')
//     const [todos, setTodos] = useState([])

//     let handleInput = e => {
//         e.preventDefault()

//         setInput(e.target.value)
//     }

//     let handleSubmit = e => {
//         e.preventDefault()

//         setTodos([...todos, {id: Math.floor(Math.round() * 10000), title: input, completed: false}])

//         setInput("")
//     }

//     let handleClick = id => {
//         setTodos(todos.map(todo => {
//             if(todo.id ===id) {
//                 todo.completed = !todo.completed
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
//                 <input 
//                     type="text"
//                     placeholder="Enter a todo"
//                     value={input}
//                     required
//                     onChange={handleInput}    
//                 />
//                 <button type="submit">Add a Todo</button>
//                 </form>
//             </div>
//             <div id="todo-list">            
//                 <ul>                  
//                     { todos.map( todo =>                                       
//                      <li key={todo.id} className={todo.completed ? "is-done" : ""} >    
//                     {todo.title}
//                       <span>
//                         <input
//                         type="checkbox"
//                         checked={todo.completed}
//                         onChange={() => todo.handleClick}
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


