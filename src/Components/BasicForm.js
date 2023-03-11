import React, { useState } from 'react'

const BasicForm = () => {
   const[email , setEmail]= useState("");
   const[password , setPassword]= useState("");
   const[allEntry,setAllEntry]=useState([]);
   const submitForm =(e)=>{
    if (email && password) {
    e.preventDefault();
  const newEntry={ id: new Date().getTime().toString(), email ,password}
  setAllEntry([...allEntry,newEntry]);
  setEmail("");
  setPassword("");
}
else{
    alert("please fill the data");
}
}
  return (
    <>
    <form action="" onSubmit={submitForm}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" autoComplete='off'
             value={email}
             onChange={(e) =>setEmail(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" autoComplete='off'
             value={password}
            onChange={(e) =>setPassword(e.target.value)}
             />
        </div>
        <button type="submit" className='btn'>Login</button>
    </form>
   <div>{
    allEntry.map((curElem)=>{
        const{id ,email,password}= curElem;
        return <div className="showData" key={id}>
        <p>{email}</p>
        <p>{password}</p>
        </div>
    }) 
}
   </div>
    </>
  )
}
export default BasicForm
