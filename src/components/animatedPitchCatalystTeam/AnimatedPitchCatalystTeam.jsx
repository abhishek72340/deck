import React from "react";
import "../../styles/animatedPitchCatalystTeam/animatedPitchCatalystTeam.scss";
const AnimatedPitchCatalystTeam = ({ progress, progress3, progress4 }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: progress > progress4 ? "" : "#e1ff01",
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
              : "translateX(1200px)",
        }}
      >
        {/* ***************add div on content**************** */}
        <div className="animated_main_content_container">
          {/* ********************************************** */}
          <div
            style={{
              transition: "2s",
              backgroundColor: "#e1ff01",
              height: "6.7rem",
              position: "absolute",
              width: "60vw",
              marginTop:
                progress >= progress3 && progress <= progress4 ? "-7rem" : "",
            }}
          ></div>

          {/* ******************************************************** */}
          <p className="first_main_container ">
            <span>
              {" "}
              As the months flew by, the{" "}
              <span className="color">PITCH CATALYST</span>
            </span>
            <br />
            <span> community flourished, attracting a diverse </span>
            <br />
            <span>
              array of <span className="color">STARTUPS</span> eager to refine
              their
            </span>
            <br />
            message and visuals.
          </p>

          <p className="second_main_container">
            Collaborating closely with each entrepreneur, the team developed{" "}
            <br />
            visually stunning narratives that accurately represented their
            businesses <br />
            and resonated with their target audiences. The success of Pitch
            Catalyst's <br />
            clients became a testament to the transformative power of expertly{" "}
            <br />
            crafted decks.
          </p>
        </div>
        {/* **************************************** */}
      </div>
    </div>
  );
};

export default AnimatedPitchCatalystTeam;
