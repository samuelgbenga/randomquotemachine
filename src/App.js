import "./App.scss";
import RandomBox from "./components/RandomBox";
import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div className={color}>
      <RandomBox getColor={(color) => setColor(color)} />
      <div className="footer">
        <h4>samuel built with love</h4>
        {console.log(color)}
      </div>
    </div>
  );
}

export default App;
