import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [allowNum, setnumAllowed] = useState(false);
  const [charallowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  const passwordref = useRef(null)
  const passwerdGenaerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (charallowed) str += "`{}][|!@#$%^&*(_+) ";
    if (allowNum) str += "1234567890";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, allowNum, charallowed, setpassword]);

const copypasswordtoclipboard = useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(3,9)
  window.navigator.clipboard.writeText(password)},[password])

  useEffect(() => {
    passwerdGenaerator();
  }, [length, allowNum, charallowed, passwerdGenaerator]);
  return (
    <>
      <div className="w-full shadow-sm rounded-lg items-center mx-auto py-4  ">
        <h1 >Password Generator </h1>

        <div className="flex w-full  shadow rounded-lg overflow-hidden mb-4 bg-red-300 ">
          <input
            type="text"
            value={password}
            readOnly
            placeholder="Password"
            className=" "
            ref={passwordref}
          />
          <button  onClick={copypasswordtoclipboard}className="">
            Copy
          </button>
        </div>
        <div className="flex text-md w-full gap-x-2">
          <input
          
            type="range"
            name=""
            id=""
            min={8}
            max={20}
            value={length}
            className=" "
            onChange={(e) => {
              setlength(e.target.value);
            }}
          />
          <label htmlFor="">Length ({length})</label>
          <div className=" ">
            <input
              type="checkbox"
              defaultChecked={allowNum}
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="">Number</label>
            <input
              type="checkbox"
              defaultChecked={allowNum}
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
