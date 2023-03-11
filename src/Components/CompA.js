import React, { createContext,} from 'react'
import CompB from './CompB'
 const NickName =createContext();

const CompA = () => {
const  state = {
    name :"Vikash kumar",
    value:"50"
   };
  const handleClickContext = ()=>{
  //  setState({value: state.value + 5})
 return state.value + 5;
  }
  const contextValue ={
data : state ,
handleClick :handleClickContext
  }
  return (
    <>
    <NickName.Provider value={{contextValue}}>
       <CompB/>
    </NickName.Provider>
    </>
  )
}

export default CompA
export {NickName}; 