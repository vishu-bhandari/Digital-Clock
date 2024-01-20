import React, { useState } from "react";
import Clock from 'react-digital-clock';
import "./index.css"; // Import the CSS file

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{ctime}</h1>
      <Clock />
    </div>
  );
};

export default App;
