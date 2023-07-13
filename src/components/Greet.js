// function Greet(){
//     return <h1>Welcome to Raect JS</h1>
// }

export const Greet=({name,course,children})=>{
    // console.log(props)
    
    return(
    <div>
      <h1>Welcome to {name} takes {course}</h1>
       {children}
    </div>
    )
     
}

