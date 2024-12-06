import React from "react";
import "./style.css"; // Import CSS file containing keyframes

function mainAnimation() {
  return (
    <>
      {" "}
      {/* <div
                  id="up"
                  className="position-absolute"
                ></div>
                  <div
                  id="down"
                  className="position-absolute"
                ></div>
                   <div
                  id="left"
                  className="position-absolute"
                ></div>
                  <div
                  id="right"
                  className="position-absolute"
                ></div> */}
      <div class="container-fluid">
        <div id="up"> </div> <div id="down"> </div> <div id="left"> </div>{" "}
        <div id="right"> </div>{" "}
      </div>
    </>
  );
}

export default mainAnimation;
