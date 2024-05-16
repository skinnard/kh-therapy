import React from "react";

function Chevron(props) {
  return (
    <svg
      className={props.className}
      height={props.height}
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fill="#f1b8b8"
        d="M15.9,10.3c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.3,0.1-0.4c0-0.1,0-0.3-0.1-0.4C16.1,9.1,16,9,15.9,8.9L5.1,1.4C4.9,1.3,4.8,1.3,4.6,1.3c-0.2,0-0.3,0-0.4,0.1C4.1,1.4,3.9,1.5,3.9,1.7C3.8,1.8,3.7,1.9,3.7,2.1v15c0,0.2,0,0.3,0.1,0.4c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.3,0.1,0.4,0.1c0.2,0,0.3-0.1,0.4-0.1L15.9,10.3z"
      />
    </svg>
  )
}

export default Chevron;