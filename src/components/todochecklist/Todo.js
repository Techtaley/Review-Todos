import React from 'react'

export default function Todo({todo}){
    return(
        <div className="todo_items">
            <input 
                type="checkbox"
                checked={todo.complete} 
                onChange={() => todo.handleClick} 
            />
            <span>{todo.text}</span>
        </div>         
    )
}


