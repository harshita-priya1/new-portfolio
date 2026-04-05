import React from "react";
import Typewriter from "typewriter-effect";
import { portfolioData } from "../../data/portfolioData";

function Type() {
  return (
    <Typewriter
      options={{
        strings: portfolioData.typewriterRoles,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
