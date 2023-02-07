import React from "react";
import getUserName from "../utils";

interface PropsTypes {
  msg: string;
}

const handleClick = ():void => {
  console.log(1);
};

function HelloWorld({ msg }: PropsTypes) {
  return (
    <div>
      <p>{msg}</p>
      HelloWorld
      { getUserName({ name: "yyf-----"})}
      <button onClick={ handleClick }></button>
    </div> 
  );
}

export default HelloWorld;