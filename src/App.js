import { useEffect, useState } from "react";

import "./App.css"

import { animation } from "./module/animation"
import Show from "./module/Show"
import Scroller from "./module/Scroller";
import Loder from "./pages/Loder";
import Warningmessage from "./pages/Warning_message";

function App() {
  //2 videos for animation
  const [Video, setVideo] = useState()
  const [Slider, setSlider] = useState()

  useEffect(() => {
    //adding animation
    window.scrollTo(0, 0)
    if (Video && Slider) {
      animation(Video, Slider)
    } else {
      setVideo(document.querySelector(".video"))
      setSlider(document.querySelector(".slider"))
    }
  }, [Video, Slider])




  return (
    <div className="App">
      <Warningmessage />
      <Loder />
      <Scroller />
      <Show />
    </div>
  );
}

export default App;
