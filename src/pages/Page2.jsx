import React, { useEffect, useState } from "react";

function Page2() {
  //save a reference to element
  const [slider, setslider] = useState(document.querySelector(".slider"));
  useEffect(() => {
    setslider(document.querySelector(".slider"));
  }, []);
  //video controll
  const Controler = () => {
    slider.paused ? slider.play() : slider.pause();
  };

  return (
    <div className="page2">
      {/* second video */}
      <video
        onClick={() => Controler()}
        className="slider"
        playsInline={true}
        webkit-playsinline="true"
        preload="auto"
        muted="muted"
        loop={true}
      ></video>

      <style jsx>{`
        .page2 {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
        }
        .slider {
          object-fit: cover;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        .input {
          position: absolute;
          bottom: 5%;
          left: 0;
          background: white;
          width: 10vw;
        }
      `}</style>
    </div>
  );
}

export default Page2;
