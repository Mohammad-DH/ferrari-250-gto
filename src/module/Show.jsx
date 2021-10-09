import React from "react";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

function Show() {
  return (
    <div className="show">
      <Page1 />
      <Page2 />
      <Page3 />

      <style jsx>{`
        .show {
          min-height: 1vh;
        }
      `}</style>
    </div>
  );
}

export default Show;
