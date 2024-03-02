import { useState } from "react";

import "./App.css";

function App() {
  const [color, setcolor] = useState("gray");

  return (
    <div className=" h-screen  w-screen p-7 " style={{ backgroundColor: color }}>
      <h2 className="font-bold text-xl  bg-black w-2/3">The BackgroundColor is {color}</h2>
      <div className=" flex flex-wrap justify-center px-2 inset-x-0  fixed bottom-10">
        <div className=" flex flex-wrap justify-center   bg-cyan-700 rounded-full  shadow-lg gap-2">
          <button
            className=" bg-red-700 rounded-full p-2 m-3"
            onClick={() => setcolor("red")}
          >
            Red
          </button>
          <button
            className=" bg-green-700 rounded-full p-2 m-3"
            onClick={() => setcolor("green")}
          >
            {" "}
            Green
          </button>
          <button
            className=" bg-blue-700 rounded-full p-2 m-3"
            onClick={() => setcolor("blue")}
          >
            {" "}
            Blue
          </button>
          <button
            className=" bg-yellow-700 rounded-full p-2 m-3"
            onClick={() => setcolor("yellow")}
          >
            {" "}
            Yellow
          </button>
          <button
            className=" bg-orange-700 rounded-full p-2 m-3"
            onClick={() => setcolor("orange")}
          >
            Orange
          </button>
          <button
            className=" bg-pink-700 rounded-full p-2 m-3"
            onClick={() => setcolor("pink")}
          >
            Pink
          </button>
          <button
            className=" bg-purple-700 rounded-full p-2 m-3"
            onClick={() => setcolor("purple")}
          >
            Purpel
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
