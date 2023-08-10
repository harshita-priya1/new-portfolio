import React from "react";

function Preloader({ load }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh", //100% of the viewport height so that it covers the whole screen and comes above the content
        display: load ? "block" : "none", //if load is true, then display block, else display none
      }}
    >
      <div id={load ? "preloader" : "preloader-none"}></div>
      {/* if load is true then display the preloader else display nothing */}
    </div>
  );
}

export default Preloader;
