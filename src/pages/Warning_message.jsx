import React from "react";

function Warning_message() {
  return (
    <div className="Warning_message">
      <span>please use landscape mode</span>
      <style jsx>{`
        .Warning_message {
          margin-top: 5%;
          font-family: "TitleFont";
          position: fixed;
          color: white;
          z-index: 9999999;
          font-size: 4rem;
          line-height: 5rem;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Warning_message;
