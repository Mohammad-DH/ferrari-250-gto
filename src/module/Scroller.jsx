//the idea is this to make a range input look like the page scroller and link it to the scroll positions of the page
//benefit is in this that the new scroller will be the same in all browsers
import React, { useState } from "react";

function Scroller() {
  const [VAL, setVAL] = useState(0);

  //to keep the scroller update
  window.addEventListener("scroll", () => {
    setVAL(document.documentElement.scrollTop);
  });

  return (
    <div className="scroll">
      <input
        type="range"
        min={1}
        max={
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        }
        value={VAL}
        step={0.1}
        className="scroller"
        onChange={(e) => {
          document.documentElement.scrollTop = e.target.value;
        }}
      />

      <style jsx>{`
        .scroll {
          position: fixed;
          width: 0.3vw;
          height: 100vh;
          top: 0%;
          right: 0%;
          background-color: rgba(44, 44, 44, 0.5);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
        }
        .scroller {
          -webkit-appearance: none;
          position: absolute;
          transform: rotate(90deg);
          width: 100vh;
          height: 0.3vw;
          background-color: transparent;
          object-fit: cover;
          outline: none;
        }
        .scroller::-webkit-slider-runnable-track {
          -webkit-appearance: none;
          width: 3vw;
          height: 100%;
        }
        .scroller::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 3vw;
          height: 100%;
          background: rgba(255, 242, 0, 0.7);
          cursor: pointer;
          border-radius: 100vw;
          border: none;
          transition: all 0.3s linear;
        }
        .scroller::-moz-range-thumb {
          width: 3vw;
          height: 100%;
          background: rgba(255, 242, 0, 0.7);
          cursor: pointer;
          border-radius: 100vw;
          border: none;
          transition: all 0.3s linear;
        }
        .scroller::-moz-range-thumb:hover {
          background: rgb(255, 242, 0);
        }

        .scroller::-webkit-slider-thumb:hover {
          background: rgb(255, 242, 0);
        }
      `}</style>
    </div>
  );
}

export default Scroller;
