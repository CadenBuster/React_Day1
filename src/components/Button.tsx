import { useState } from "react";

const Button = () => {
  let [clickCounter, setClickCounter] = useState(0);
  const handleClick = () => {
    clickCounter += 1;
    setClickCounter(clickCounter);
  };
  return (
    <>
      <div className = "Button">
        <button onClick={handleClick}>Don't Click!</button>
        {clickCounter > 4 ? (
          <div className="tooMany">You clicked too many times, No more prize!</div>
        ) : (
          <div>You win a prize!!!</div>
        )}
      </div>
    </>
  );
};

export default Button;
