import React, {useState} from 'react'
import Todo from './Todo'
import todoData from './todoData'

/*
create a todolist component from an imported todolist.  
when you click and item it is checked/unchecked by id
all updates should update in state and re-render
*/

//reducer()
//setTodos - action
//action.type - case "Complete: 
//return state.map(todo => todo.id === action.id ? {...todo, complete: !todo.complete})

export default function TodoCheckList(){
    const [todos, setTodos] = useState(todoData)  //initial state

    let handleClick = id => { 
      setTodos(todoData.map(data => {  //gets a copy of todoData
        if(data.id === id){            //if selected, toggle completed -> true/false
          return data.completed = !data.completed  //check means completed
        } else {
          return data  //otherwise return data as in db
        }
      }))      
    }

      // let updatedTodos = todoData.map(todo => {
      //  if(todo.id === id){  //when an item is clicked is it completed or uncompleted
      //   todo.completed = !todo.completed
      // } 
      //  return todo
      // })

      // setTodos(updatedTodos)  //re-renders updated states when todo item clicked
    
    return (        
        <div className="App"> 
          <h1>Todolist Checklist</h1>  
          { todos.map(todo =>
              <Todo                        //todo instance
              key={todo.id}
              todo={todo}                //load initial todos
              handleClick={handleClick}  //updates state when clicked
              checked={todo.completed}   //updates state todo.completed when clicked
            />          
          )}                
        </div>
    )    
} 

