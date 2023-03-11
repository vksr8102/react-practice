import React, { useState } from 'react'

const UseStateObject = () => {
   const[myObj ,setmyObj]= useState({
    myName:"Vikash Kumar",myAge:22,degree:"B-tech",roolNo:206320208
   })
const changeObj =()=>{
setmyObj({...myObj ,myName:'Dev'})
}
  return (
    <div>
      <h1 className="h1Style">Name:{myObj.myName}&Age:{myObj.myAge}& Degree:{myObj.degree}</h1>
      <button className="btn" onClick={changeObj}>Update</button>
    </div>
    
  )
}

export default UseStateObject
