import React from "react";

function Page1() {
  return (
    <div className="page1">
      {/* first video */}
      <video
        controlsList="nodownload"
        className="video"
        playsInline={true}
        webkit-playsinline="true"
        preload="auto"
        muted="muted"
      ></video>
      {/* text panels */}
      <div className="text">
        <img className="t1" src="./t1f.svg" alt="" />
        <img className="t2" src="./t2f.svg" alt="" />
        <img className="t3" src="./t3f.svg" alt="" />
        <img className="t4" src="./t4.svg" alt="" />
        <img className="t5" src="./t5.svg" alt="" />
      </div>

      <style jsx>{`
        .page1 {
          background-color: black;
          width: 100%;
          height: 100%;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
        }

        .text {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text img {
          position: absolute;
        }

        .t1 {
          width: 95%;
          opacity: 1;
        }

        .t2 {
          width: 70%;
          opacity: 0;
        }

        .t3 {
          width: 90%;
          opacity: 0;
        }

        .t4 {
          margin-top: 4%;
          width: 85%;
          opacity: 0;
        }

        .t5 {
          width: 25%;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Page1;
