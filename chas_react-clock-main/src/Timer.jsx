/* import { useState, useEffect } from "react";

const Timer = ({ startTime, timer }) => {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) {
        clearInterval(intervalId);
      } else {
        setTime((t) => {
          return t - 1;
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div>
      <h1>{timer}</h1>
      {minutes}:{seconds}
    </div>
  );
};
export default Timer;
 */

import { useState, useEffect } from "react";

const Timer = ({ startTime, timer }) => {
  const [time, setTime] = useState(startTime);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        if (time === 0) {
          clearInterval(intervalId);
        } else {
          setTime((t) => t - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [time, isPaused]);

  const handlePauseClick = () => {
    setIsPaused((paused) => !paused);
  };

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  return (
    <div>
      <h1>{timer}</h1>
      {minutes}:{seconds}{" "}
      <button onClick={handlePauseClick}>
        {isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );
};

export default Timer;
