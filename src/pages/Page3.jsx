import React from "react";
import Info from "../module/info";

function Page3() {
  //get the audio and save it
  var audio = new Audio("audio.mp3");

  return (
    <div className="page3">
      {/* info about car */}
      <div className="inner">
        <Info
          imageUrl={"./ferrari-250gto.jpg"}
          title={"Design"}
          text={
            "The model was built on a 2400 mm wheel base, as had been the 250 GT ‘SWB’ from which it was derived. Although the chassis was built along the same lines, it used smaller section tubing, with additional bracing for increased torsional rigidity, and was given factory type reference 539/62 Comp., and then 539/64 Comp. Like the earlier 250 GT ‘SWB’ Berlinettas, four wheel disc brakes were fitted, with a cable-operated handbrake to the rear wheels, and it was also available as both a left- and right-hand drive."
          }
        />
        <Info
          imageUrl={"./Ferrari 250 GTO icon-3.jpg"}
          title={"Engine"}
          text={
            "Giacchino Colombo’s legendary engine was now a veteran campaigner: a 60° V12, twin overhead camshaft, 2,953cc masterpiece, producing 300bhp. Six twin-choke Weber carburettors sat in the centre of the engine’s V, mounted on magnesium-alloy inlet manifolds; the cylinder block was cast in a brand of aluminium called Siluminum, with cast-iron wet cylinder liners, and there’s dry sump lubrication. The crank was machined from a single steel billet, as were the con rods. It did also gain a new five-speed, all-synchromesh gearbox."
          }
        />
        <Info
          imageUrl={"./Ferrari 250 GTO inside.jpg"}
          title={"Performance"}
          text={
            "Amongst the numerous international successes of the 250 GTO were wins in the Tour de France in 1963 and 1964; GT class wins in the Targa Florio in 1962, 1963 and 1964; victories in the Tourist Trophy at Goodwood in 1962 and 1963; with GT category wins at Le Mans in 1962 and 1963, and in the Nurburgring 1000 km in 1963 and 1964."
          }
        />
      </div>

      <div className="footer">
        {/* text and function for playing the sound */}
        <div className="sound">
          <span onClick={() => audio.play()}>
            do you want to hear the sound !
          </span>
          <img onClick={() => audio.play()} src="./ferrari logo.svg" alt="" />
        </div>
        {/* link to my website */}
        <div className="end">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.mohammaddh.com/"
          >
            Made By Mohammad DH
          </a>
        </div>
      </div>
      <style jsx>
        {`
          .page3 {
            position: fixed;
            display: none;
            bottom: -100%;
            width: 100%;
            height: 100vh;
            color: white;
            overflow-y: scroll;
          }
          /* Hide Chrome, Safari and Opera scrollbars  */
          .page3::-webkit-scrollbar {
            display: none;
          }

          /* Hide IE, Edge and Firefox scrollbars  */
          .page3 {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }

          .footer {
            width: 100%;
            height: 40vh;
            background-color: #ff2800;
            margin-top: 5%;
            border-top: 0.7vw solid #fff200;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .sound {
            font-family: "TitleFont";
            width: 100%;
            flex: 9;
            font-size: 6vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .sound span,
          .sound img {
            cursor: pointer;
            transition: all 0.2s linear;
            color: rgba(255, 255, 255, 0.9);
          }
          .sound span:hover,
          .sound img:hover {
            transform: scale(1.01);
            color: rgb(255, 255, 255);
          }
          .sound img {
            width: 5vw;
          }
          .audio {
            position: absolute;
            opacity: 0;
            display: none;
          }
          .end {
            font-family: "ParagraphFont";
            width: 100%;
            flex: 1;
            background-color: rgb(0, 0, 0);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .end a {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
}

export default Page3;
