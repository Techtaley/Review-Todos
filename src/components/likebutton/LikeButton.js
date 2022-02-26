import React, { useState} from 'react'

export default function LikeButtonComponent(){
    const [counter, setCounter] = useState(100)
    const [like, setLike] = useState(false) 

    let handleClick = () => {
        if(like){
            setCounter(c => c - 1)
            setLike(!like)
        } else {
            setCounter(c => c + 1)
            setLike(!like)            
        }
    }

   return(
       <>
            <h1>Like Button</h1>          
           <button className={like ? "liked like-button" : "like-button"} onClick={handleClick}>  
           Like | {counter}
           </button>
       </>
   ) 
}