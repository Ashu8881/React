import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(4);

  const addValue = () => {
    // count = count+1
    setCount(count + 1);
    if(count >=20){
      alert('You have reached the limit!')
    }
  };

  const reducevalue =()=>{
    count === 0 ? stop  : setCount(count - 1)
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value : {count}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={reducevalue}>remove value</button>
    </>
  );
}

export default App;
