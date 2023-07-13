import React from 'react'

export const UserGreetings = () => {
    const isLoggedIn=false
    return <h1> Welcome {isLoggedIn&&'CGG'}</h1>
}
