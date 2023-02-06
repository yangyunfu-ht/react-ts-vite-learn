import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";


//父组件获取子组件的状态
const TopSlot = (props:UserInfo) => {
  useEffect(() => {
    console.log("mounted");
  },);
  return (
    <>
      <HelloWorld msg="Hello World"/>
      <h2>我是top部分的插槽</h2>
      <p className="text">data from children component</p>
      <h2>{ props.userInfo.name } </h2>
      <h2>{ props.userInfo.age }</h2>
      <h2>{ props.userInfo.phone }</h2>
    </>
  );
};

interface UserInfo {
  userInfo: {
    name: string;
    age: number;
    phone: string;
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AppChildren TopRender={TopSlot}  count={ count }/>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppChildren = (props: { TopRender: any, count: number}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userInfo, setUserInfo] = useState({
    name: "yyf",
    age: 18,
    phone: "18213800173"
  });
  const updateUserInfo = ():void => {
    console.log(userInfo);
  };
  const { TopRender, count } = props;
  return (
    <div>
      <div className="top">
        {
          <TopRender userInfo={userInfo} />
          // <props.TopRender />
        }
       <h3> { count } data from parent component</h3>
      </div>
      <div className="center">
        <button onClick={ updateUserInfo }>updateUserInfo</button>
        center
      </div>
      <div className="footer">
        footer
      </div>
    </div>
  );
};