import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx";

const Home = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Counter logic
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Alert when reaching 10 seconds (example)
  useEffect(() => {
    if (seconds === 10) {
      alert("⏰ You reached 10 seconds!");
    }
  }, [seconds]);

  return (
    <div className="text-center">
      <SecondsCounter seconds={seconds} />

      <div className="mt-3">
        <button
          className="btn btn-danger me-2"
          onClick={() => setIsRunning(false)}
        >
          Stop
        </button>
        <button
          className="btn btn-success me-2"
          onClick={() => setIsRunning(true)}
        >
          Resume
        </button>
        <button
          className="btn btn-warning"
          onClick={() => setSeconds(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home;
