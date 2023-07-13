import React, { useState } from 'react'

export const Message = () => {
   const[message,setMessage]= useState('Welcome to Visitor')
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={()=>setMessage('Thank You for Subscribing')}>Subscribe</button>
        </div>
    )
}
