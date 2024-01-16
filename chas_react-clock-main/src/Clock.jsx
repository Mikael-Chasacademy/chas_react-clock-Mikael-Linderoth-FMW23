/* import React, { useState, useEffect } from "react";

export const Clock = ({ timeZone }) => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone })
  );

  useEffect(() => 
    const updateClock = () => {
      setTime(new Date().toLocaleTimeString("en-US", { timeZone }));
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]); 

  return (
    <div>
      <h1>Current Time ({timeZone}):</h1>
      <p>{time}</p>
    </div>
  );
}; */
import { useEffect, useState } from "react";

const Clock = ({ timeZone, city }) => {
  const [time, setTime] = useState();

  useEffect(() => {
    setInterval(() => {
      const t = new Date().toLocaleTimeString("sv", { timeZone });

      setTime(t);
    }, 1000);
  }, []);
  return (
    <div>
      <h1>{city}</h1>
      {time}
    </div>
  );
};
export default Clock;
