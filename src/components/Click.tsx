import { useState } from "react";

const Click = () => {
    
    let [clickCounter, setClickCounter] = useState(0);
    let times = 'times'
    const handleClick = () => {
      clickCounter += 1;
      setClickCounter(clickCounter);
    };
    {clickCounter === 1 ? times = 'time' : times = 'times'}
    return (
      <>
        <div className = "Button">
          <button onClick={handleClick}>Click Me</button>
            <div>You clicked this button {clickCounter} {times}!</div>
        </div>
      </>
    );
  };

export default Click