import { useState ,useEffect} from "react"
import UseTitleCount from "./UseTitleCount"

const Test = () => {
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
   
  return (
    <div>
        <h1>{count}</h1>
      <button className="btn" onClick={()=>{
        setCount(count+1)
      }}>Click Test😊</button>
      <h2>The actual size of Window:</h2>
      <h1>{widthCount}</h1>
    </div>
  )
}

export default Test
