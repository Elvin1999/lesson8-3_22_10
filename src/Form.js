import React, { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>Focus the input </button>
    </>
  );
}
