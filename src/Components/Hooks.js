import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [count,setCount]=useState(0);
    const[widthCount,setWidthCount]=useState(window.screen.width)
    const actualWidth =()=>{
        setWidthCount(window.innerWidth);
    }
    useEffect(()=>{
document.title=`you click ${count} times`
window.addEventListener("resize",actualWidth)
return ()=>{
    window.removeEventListener("resize",actualWidth)
}
    });
  return (
    <div>
        <button onClick={()=>{setCount(count-1)}}>-</button>
      <p> {count} </p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <h1>Actual Width of the screen is {widthCount}</h1>
    </div>
  )
}

export default Hooks

