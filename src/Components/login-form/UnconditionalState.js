import React, { useRef, useState } from 'react'

const UnconditionalState = () => {
    const luckeyName =useRef(null);
   const[show,setShow] =useState()
   const submitForm =(e)=>{
e.preventDefault();
const name = luckeyName.current.value;
name="" ? alert("plzz fill the data"):setShow(true);
   }
  return (
    <div>
      <form action="" onSubmit={submitForm}>
        <div>
        <label htmlFor="luckeyname">Enter your Luckey Name:</label>
        <input type="text" ref={luckeyName}/>
        </div>
      <button className='btn'>Submit</button>
      </form>
      <br />
      <p className='showData'>{show ? `your luckey name is  ${luckeyName.current.value}`:""}</p>
    </div>
  )
}

export default UnconditionalState
