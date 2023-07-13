import React ,{useState}from 'react'

export const Form = () => {
    const[username,setusername]=useState('')
    // const submitHandler=e=>{
    //     e.preventDefault()
    //     alert(`Form Data is ${username}`)
    // }
    const changeHandler=e=>setusername(e.target.value)
    return (
        <form onSubmit={e=>{e.preventDefault()
        alert(`FormData is ${username}`)}}>
        <div>
            <label>Username</label>
            <input type='text' value={username}
            onChange={changeHandler}/>
        </div>
        <button>Submit</button>
        </form>
    )
}
