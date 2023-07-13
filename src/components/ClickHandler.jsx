import React from 'react'

export const ClickHandler = () => {
    const clickHandler=(e,count=1)=>console.log('Button Clicked',count,e)
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
            <button onClick={(e)=>clickHandler(e,5)}>Click 5</button>
        </div>
    )
}
