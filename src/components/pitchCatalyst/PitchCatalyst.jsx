import React from "react";
import "../../styles/pitchCatalyst/pitchCatalyst.scss";
import pitch1 from "../../assets/pitchCatalyst1.png";
import pitch2 from "../../assets/pitchCatalyst2.png";
import pitch3 from "../../assets/pitchCatalyst3.png";
const PitchCatalyst = ({ progress4, progress5, progress }) => {
  console.log("progress", progress);
  return (
    <div>
      <div
        className="pitch_catalyst_container"
        style={{
          transition: "1s",
          transform:
            progress > progress4 && progress <= progress5
              ? "translate(0)"
              : progress > progress5
              ? "scale(0.5)"
              : "translateY(900px)",
        }}
      >
        <img src={pitch1} alt="pitch-img" id="pitch1" />
        <img src={pitch2} alt="pitch-img" id="pitch2" />
        <img src={pitch3} alt="pitch-img" id="pitch3" />
      </div>
      <p
        className="pitch_catalyst_paragraph"
        style={{ opacity: progress > progress5 ? "1" : "0" }}
      >
        <span>The Pitch Catalyst</span> headquarters also evolved into a vibrant
        hub <br />
        of resources and tools, equipping startups with the knowledge <br />
        and inspiration they <span>needed to thrive.</span>
      </p>
    </div>
  );
};

export default PitchCatalyst;
