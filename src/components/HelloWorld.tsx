import React from "react";

interface PropsTypes {
  msg: string;
}

const handleClick = (event: MouseEvent):void => {
  console.log(event.target);
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