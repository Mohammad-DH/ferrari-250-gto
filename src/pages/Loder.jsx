import React, { useEffect, useState } from "react";
import { Get } from "../module/Get";

function Lodeer() {
  //geting the Progress of downloading
  const [Progress1, setProgress1] = useState(0);
  const SETProgress1 = (I) => {
    setProgress1(parseInt(I, 10));
  };
  const [Progress2, setProgress2] = useState(0);
  const SETProgress2 = (I) => {
    setProgress2(parseInt(I, 10));
  };

  useEffect(() => {
    //sending the request
    Get(SETProgress1, "/SSS2.mp4", ".video");
    Get(SETProgress2, "/slider.mp4", ".slider");
  }, []);

  return (
    <div className="loader">
      <span className="Progress">
        {((Progress1 + Progress2) / 2).toFixed(0)} %
      </span>
      <style jsx>{`
        .loader {
          position: fixed;
          width: 100%;
          height: 100%;
          background-color: black;
          z-index: 99999;
          transition: all 0.5s linear;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .hide {
          opacity: 0;
        }
        .notDisplay {
          display: none;
        }
        .Progress {
          font-family: "ParagraphFont";
          font-size: 6vw;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
}

export default Lodeer;
