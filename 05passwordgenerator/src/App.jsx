import { useCallback, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [allowNum, setnumAllowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");
  const passwerdGenaerator = useCallback(
    function () {
      let pass = "";
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (charallowed) str += "`{}][|!@#$%^&*(_+) ";
      if (allowNum) str += "1234567890";
      for (let i = 0; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass = str.charAt(char);
      }
      setpassword(pass);
    },
    [length, allowNum, charallowed, setpassword]
  );

  return (
    <>
      <h1>Password Generator </h1>

      <div className="w-full max-w-md mx-auto shadow-sm rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        test
        <div className="flex  shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="password"
            className="outline-none w-full py-1 px-3"
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            name=""
            id=""
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label htmlFor="">Length ({length})</label> 
          <div className=" flex items-center gap-x-1">
       
          <input
            type="checkbox"
            defaultChecked={allowNum}
            onChange={() => {
              setnumAllowed((prev) => !prev);
            }}
          /> <label htmlFor="">Number</label>
        </div>
        <div className=" flex items-center gap-x-1">
       
          <input
            type="checkbox"
            defaultChecked={allowNum}
            onChange={() => {
              setnumAllowed((prev) => !prev);
            }}
          /> <label htmlFor="">Character</label>
        </div>
        
        </div>
        
      </div>
    </>
  );
}

export default App;
