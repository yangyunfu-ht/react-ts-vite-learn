import React from "react";

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
      <button onClick={ handleClick }></button>
    </div> 
  );
}

export default HelloWorld;