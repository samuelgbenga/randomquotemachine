import "./App.scss";
import RandomBox from "./components/RandomBox";
import React, { useState, useEffect, useRef } from "react";

function App() {
  let classRef = useRef("red");
  const [color, setColor] = useState("red");
  useEffect(() => {
    classRef.current.className = color;
  }, [color]);
  return (
    <div ref={classRef}>
      <RandomBox getColor={(color) => setColor(color)} />
      <div className="footer">
        <h4>samuel built with love</h4>
      
      </div>
    </div>
  );
}

export default App;
