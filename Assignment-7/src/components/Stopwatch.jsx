import React, { useState, useRef, useEffect } from "react";

export const Stopwatch = () => {
  // const [timerId, setTimerId] = useState();
  const timerId = useRef();
  console.log(timerId);
  const [watch, setWatch] = useState(0);

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1);
      }, 1000);
      // setTimerId(id);
      timerId.current = id;
    }
  };

  const pause = () => {
    clearInterval(timerId.current);
  };
  const reset = () => {
    clearInterval(timerId.current);
    setWatch(0);
    timerId.current = null;
  };
  useEffect(() => {
    return reset;
  }, []);

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  return (
    <div>
      <h3>Stopwatch</h3>
      <p>{msToTime(watch)}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
