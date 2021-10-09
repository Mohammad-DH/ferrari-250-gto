import axios from "axios";
import gsap from "gsap";

export const Get = async (state, src, elementClass) => {
  //Axios config
  const config = {
    responseType: "blob",
    onDownloadProgress: function (progressEvent) {
      state(((progressEvent.loaded / progressEvent.total) * 100).toFixed(0));
    },
  };

  axios
    .get(src, config)
    .then((res) => {
      //saving the res in the browser
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const video = document.querySelector(elementClass);
      video.src = url;
      setTimeout(() => {
        //when first video is done
        if (src === "/SSS2.mp4") {
          gsap.to(".show", { minHeight: "2100vh" }); //gsap will not works without this
          gsap.to(".loader", { duration: 1, opacity: 0 });
          gsap.to(".loader", { duration: 0.00001, display: "none" }, "+=1");
        }
      }, 50);
    })
    .catch((err) => console.log(err));
};
