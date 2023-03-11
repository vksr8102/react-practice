import React, { useReducer } from 'react'
  const initialState = 0;
const reducer =(state,action)=>{
    
if(action.type ==="INCREMENT"){
    return state + 1;
}
if(action.type ==="DECREMENT"){
    return state - 1;
}

}

const UseReduser = () => {
   const [state,dispatch]= useReducer(reducer , initialState)
  return (
    <>
    <div>
        <h1>{state}</h1>
        <div >
            <button className="btn" onClick={()=>dispatch({type:"INCREMENT"})}>Inc</button>
            <button  className="btn" onClick={()=>dispatch({type:"DECREMENT"})}>Dec</button>
        </div>
    </div>
      
    </>
  )
}

export default UseReduser
