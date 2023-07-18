import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const DataFetching = () => {
    const[posts,setPosts]=useState([])
    const [error,setError]=useState('')
    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicod.com/posts')
      .then(response=>{
        console.log(response)
        setPosts(response.data)
      })
      .catch(error=>{
        console.log(error)
        setError(error.message)
      })
    },[])
    return (
        <div>
            List of Posts
            <ul>
                {
                    posts.length>0?posts.map(post=><li key={post.id}>{post.title}</li>):null
                }
                {
                    error?error:null
                }
            </ul>
        </div>
    )
}
