import { useState } from "react";

import "./App.css";

function App() {
  const colors = ["red", "green", "blue", "yellow", "orange", "pink", "purple"];
  const [color, setColor] = useState("gray");

  return (
    <div
      className=" h-screen  w-screen  "
      style={{ backgroundColor: color }}
    >
      <h2 className="font-bold text-xl text-white bg-black w-2/3">
        The BackgroundColor is {color}
      </h2>
      <div className=" flex flex-wrap justify-center px-2 inset-x-0  fixed bottom-10">
        <div className=" flex flex-wrap justify-center   bg-cyan-700 rounded-full  shadow-lg gap-2">
          {colors.map((col, index) => (
            <button
              key={index}
              className={`bg-${col}-700`}
              onClick={() => setColor(col)}
            >
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </button>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
