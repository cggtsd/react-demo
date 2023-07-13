import React, { useState } from 'react'

export const Counter = () => {
    const[count,setCount]=useState(0)
    const clickHandler=()=>setCount(count+1)
    
    return (
        <div>
            count - {count}
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
