import React from "react";
// import Button from "bootstrap";

export default function Buttons({ styleClass, value, onClick }) {
  return (
    <>
      <div>
        <button className={`border pclr redis wfnt ${styleClass}`} onClick={() => onClick()}>
          {value}
        </button>
      </div>
    </>
  );
}
