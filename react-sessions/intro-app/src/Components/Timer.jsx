import React, { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const fetchTimeHandler = () => {
    setTime(new Date().toLocaleTimeString());
  };

  setInterval(fetchTimeHandler, 1000);

  return (
    <div>
      <div className="container p-5 text-center shadow">
        <h1>{time}</h1>
      </div>
    </div>
  );
};

export default Timer;
