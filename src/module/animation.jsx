import gsap from "gsap";

import ScrollTrigger from "gsap/src/ScrollTrigger";

export const animation = (Video, Slider) => {
  gsap.registerPlugin(ScrollTrigger);

  let tl2 = gsap.timeline({});

  //stop until video is downloaded
  Video.onloadeddata = function () {
    //make the opacity of first text to 1 in instant
    document.querySelector(".t1").opacity = 1;
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: "top top",
        end: "bottom+=2000% bottom",
        markers: false,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    //S-1
    tl.to(".video", { duration: 0.3, opacity: 1 }, "-=.2")
      .to(".t1", { duration: 0.3, opacity: 0 }, "-=.2")
      .to(Video, { duration: 2, currentTime: 4 }, "-=.2")
      //S-1
      .to(".video", { duration: 0.3, opacity: 0 }, "-=.3")
      //S-2
      .to(".t2", { duration: 0.3, opacity: 1 }, "-=.1")
      .to(".t2", { duration: 0.3, opacity: 0 }, "+=.2")
      .to(Video, { currentTime: 4.1 }, "-=.7")
      .to(".video", { duration: 1, opacity: 1 }, "-=.4")
      .to(Video, { duration: 2, currentTime: 8 }, "-=.8")
      //S-2
      .to(".video", { duration: 0.3, opacity: 0 }, "-=.4")
      //S-3
      .to(".t3", { duration: 0.3, opacity: 1 }, "-=.2")
      .to(".t3", { duration: 0.3, opacity: 0 }, "+=.1")
      .to(Video, { currentTime: 8.1 }, "-=.85")
      .to(".video", { duration: 1, opacity: 1 }, "-=.4")
      .to(Video, { duration: 3, currentTime: 12 }, "-=.8")
      //S-3
      .to(".video", { duration: 0.3, opacity: 0 }, "-=.7")
      //S-4
      .to(".t4", { duration: 0.3, opacity: 1 }, "-=.4")
      .to(".t4", { duration: 0.3, opacity: 0 }, "+=.1")
      .to(Video, { currentTime: 12.2 }, "-=.9")
      .to(".video", { duration: 1, opacity: 1 }, "-=.4")
      .to(Video, { duration: 3, currentTime: 16 }, "-=.7")
      .to(".t5", { duration: 0.3, opacity: 1 }, "-=.6")
      .to(".t5", { duration: 0.5, opacity: 0 }, "+=.3")
      //S-4
      .to(".text", { duration: 0.0001, display: "none" }, "+=1")
      .to(".video", { duration: 0.0001, opacity: 0 }, "-=1.3")
      //Slider
      .add(() => {
        Slider.pause();
        tl2.to(Slider, { duration: 1.5, currentTime: 0 });
      }, "-=.8")
      .to(".slider", { duration: 0.0001, opacity: 1 }, "-=1.3")
      .to(".video", { duration: 0.0001, display: "none" })
      .add(() => {
        Slider.play();
      }, "-=.6")
      .to(".page2", { duration: 0.4, top: "-100%", opacity: 0 })
      .to(".page2", { duration: 0.0001, display: "none" })
      .to(".page3", { duration: 0.2, display: "block", bottom: "0%" }, "-=.1");
  };
  // Dealing with devices
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }
  if (isTouchDevice()) {
    Video.play();
    Video.pause();
  }
};
