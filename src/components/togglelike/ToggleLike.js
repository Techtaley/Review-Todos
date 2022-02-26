import React, {useState} from 'react'

export default function ToggleButton(){
    const [like, setLike] = useState(true)
    const [text, setText] = useState("Like") 

    let handleClick = () => {
        if(like) {
            setLike(!like)
            setText(text => text="Unlike")
        } else {
            setLike(!like)
            setText(text => text="Like")
        }

        // if(!like){
        //     setText(t=> t="Unlike")
        //     setLike(l => l=true)
        // } else {
        //     setText(t=> t="Like")
        //     setLike(l=> l=false)
        // } 
    }

    return(
        <>
        <h1>Toggle Like</h1>          
        <button className="like-button" onClick={handleClick}>
            {text}
        </button>
        
        </>
    )          
}