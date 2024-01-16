import React from "react";
import "../../styles/animatedPitchCatalystTeam/animatedPitchCatalystTeam.scss";
import AnimatedMainContent from "./AnimatedMainContent";
const AnimatedPitchCatalystTeam = ({ progress, progress3, progress4 }) => {
  return (
    <div
      className="container"
      style={{
        opacity: progress > progress3 && progress <= progress4 ? "1" : "0",
        transform: progress > progress4 ? "translateY(-500px)" : "none",
      }}
    >
      <div
        style={{
          transition: "1s ease-in-out",
          transform:
            progress >= progress3 && progress <= progress4
              ? "none"
              : progress > progress4
              ? "translateY(-500px)"
              : "translateX(1500px)",
          opacity: progress >= progress3 ? "1" : "0",
        }}
      >
        <AnimatedMainContent />
      </div>
    </div>
  );
};

export default AnimatedPitchCatalystTeam;
