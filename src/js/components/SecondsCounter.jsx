import React from "react";

function SecondsCounter(props) {
  // Always show 6 digits, padding with zeros
  const secondsString = props.seconds.toString().padStart(6, "0");
  const digits = secondsString.split("");

  return (
    <div className="d-flex justify-content-center bg-black text-white p-3 fs-1">
      <div className="digit mx-1">
        <i className="fa-solid fa-clock"></i>
      </div>
      {digits.map((digit, index) => (
        <div key={index} className="digit mx-1">
          {digit}
        </div>
      ))}
    </div>
  );
}

export default SecondsCounter;
