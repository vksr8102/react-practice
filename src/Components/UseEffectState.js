import React, { useEffect, useState } from 'react'
import UseTitleCount from "./UseTitleCount"
const UseEffectState = () => {
   const[count,setCount]= useState(0)
   UseTitleCount(count)
   const[widthCount,setWidthCount]=useState(window.screen.width)
   const actualSize =()=>{
    setWidthCount(window.innerWidth)
   }
   useEffect(()=>{
window.addEventListener("resize",actualSize)
// clean Up Function
    return ()=>{
        window.removeEventListener("resize",actualSize)
    }
   },)
//    console.log("hello mai bahar wala cansole hu so mai use effect se bhi phle chluga or jb useeffect rerandar hoga tab bhi chluga");
  return (
    <div>
      <h1>{count}</h1>
      <button className="btn" onClick={()=>{
        setCount(count+1)
      }}>Click Me😊</button>
      <h2>The actual size of Window:</h2>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default UseEffectState
