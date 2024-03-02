import { useState } from "react";
import "./App.css";

function App() {
 let [ count,setcount] = useState(0)
let addcount = () => {
  setcount(count === 20 ? count = stop : count+1)
}
let reducecount = () =>{

  setcount(count === 0 ? count = stop : count-1)
}
  return (
    <>
    <h1>Counter</h1>
    <button onClick={addcount}>add</button>
    <br />
    <button onClick={reducecount}>reduce</button>
     <div> count is {count}</div>
    </>
  );
}

export default App;
