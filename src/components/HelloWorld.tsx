import React from "react";

interface PropsTypes {
  msg: string;
}

function HelloWorld({ msg }: PropsTypes) {
  return (
    <div>
      <p>{msg}</p>
      HelloWorld
    </div>
  );
}

export default HelloWorld;