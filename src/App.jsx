//import { useState } from "react";

import "./App.css";
import { Traffic } from "./Traffic";

function App() {
  //const [color, setColor] = useState("");
  return (
    <div className="App">
      {/* <div className="traffic">
        {<div
          onClick={() => setColor("red")}
          className={`light ${color === "red" ? "light-on": ""}`}
          style={{ backgroundColor: "red" }}
        /> }
      </div> */}

      <Traffic
        colors={[
          { id:1, color: "red", name: "red color" },
          { id:2, color: "yellow", name: "yellow color" },
          { id:3, color: "lime", name: "lime from green color" },
        ]}
      />
    </div>
  );
}

export default App;
