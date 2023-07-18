import React, { useState } from 'react'

export const HookCounterOne = () => {
    const[count,setCount]=useState(0)
    const incrementFive=()=>{
        for(let i =0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <>
            Count-{count}
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementFive}>IncrementFive</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}
