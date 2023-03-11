// import React, { useContext } from "react";
import { NickName } from "./CompA";

const CompC = () => {
  // const myName = useContext(NickName)
  return (
    <div>
      <h1>comp c</h1>
      <NickName.Consumer>
        {({ data, handleClick }) =>
       ( <div>
        <h1>Name:{data.name} Value:{data.value}</h1>
        <button onClick={handleClick}>change value</button>
        </div> 
       )}

      </NickName.Consumer>
    </div>
  );
};

export default CompC;
