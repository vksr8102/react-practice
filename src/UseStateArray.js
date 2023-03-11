import React, { useState } from 'react'

const UseStateArray = () => {
  const  bioData =[
    {
        id:0, myName:"Vikash" , age:22
    }, {
        id:1, myName:"ChandraMohan" , age:21
    }, {
        id:2, myName:"Nikhil" , age:22
    },
  ]
   const[myName,setmyName]=useState(bioData)
  const clearArray =()=>{
setmyName([]);
  }
  const reappearArray =()=>{
    setmyName(bioData)
  }
  return (
    <>
     {
        myName.map((curEle)=>{
          return <h1 className='h1Style' key={curEle.id}>Name:{curEle.myName} & Age:{curEle.age}</h1>
        })
     } 
     <div className="btndiv">
     <button className='btn' onClick={clearArray}>Clear</button>
     <button className='btn' onClick={reappearArray}>Reappear</button>
     </div>
    
    </>
  )
}

export default UseStateArray
