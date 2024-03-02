

import "./App.css";
import Card from "./components/card";
function App() {


  return (
    <>
      <h1 className="bg-green-300 rounded-full">tailwind test</h1>
      <div className="flex">
        <Card username="ashutosh" />
        <Card username="sradha" />
      </div>
    </>
  );
}

export default App;
