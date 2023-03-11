import React, { useState } from 'react'
import'./App.css';
import BasicForm from './Components/BasicForm';
import CompA from './Components/CompA';
import FetchApiByHooks from './Components/FetchApiByHooks';
import Hooks from './Components/Hooks';
import UnconditionalState from './Components/login-form/UnconditionalState';
import Test from './Components/test';
import UseEffectState from './Components/UseEffectState';
import UseReduser from './Components/UseReduser';
import UseStateArray from './UseStateArray';
import UseStateObject from './UseStateObject';
const App = () => {
//   const [name, setName] = useState("React js Titorial")
//  const  changeName =()=>{
//     if(name === "React js Titorial"){
//       setName("Vikash kumar")
//     }
//     else{
//       setName("React js Titorial")
//     }
//   }
  return (
    <div>
      {/* <h1>{name}  </h1>
      <button className='btn ' onClick={changeName}>Click Me Please</button> */}
      {/* <UseStateArray/> */}
    <UseStateObject/>
    <BasicForm/>
    <UseEffectState/>
    <Hooks/>
    {/* <FetchApiByHooks/> */}
    <UnconditionalState/>
    <UseReduser/>
    {/* <CompA/> */}
    <Test/>

    </div>
  )
}

export default App



