import React from "react";

function SecondsCounter(props) {
  // Convert seconds into a 6-digit string (e.g., "000006")
  const secondsString = props.seconds.toString().padStart(6, "0");
  const digits = secondsString.split("");

  return (
    <div className="d-flex justify-content-center bg-black text-white p-3 fs-1">
      {/* Solid FontAwesome clock icon */}
      <div className="digit mx-1">
        <i className="fa-solid fa-clock"></i>
      </div>

      {/* Render each digit in its own box */}
      {digits.map((digit, index) => (
        <div key={index} className="digit mx-1">
          {digit}
        </div>
      ))}
    </div>
  );
}

export default SecondsCounter;
