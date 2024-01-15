import React from "react";
import "../../styles/pitch-catalyst-team/pitch-catalyst-team.scss";

const PitchCatalystTeam = ({ progress, progress2, progress3 }) => {
  console.log(progress);
  return (
    <div
      className="pitch_catalyst_background"
      style={{
        transition: "1s",
        backgroundColor:
          progress > 0.17713598074608905 && progress <= 0.19951865222623347
            ? "#e1ff01"
            : "#000",
        opacity: progress > 0.1 && progress <= 0.2 ? "1" : "0",
      }}
    >
      <div
        className="whole_para_container"
        style={{
          backgroundColor:
            progress > 0.18813598074608905 && progress <= 0.19951865222623347
              ? "#000"
              : "#000",

          opacity: progress > progress2 && progress <= progress3 ? "1" : "0",
          transform:
            progress > progress2 && progress <= progress3
              ? "none"
              : progress > progress3
              ? "translateX(-1500px)"
              : "translateY(500px)",

          transition:
            progress > progress2 && progress <= progress3 ? "2s" : "2s",
        }}
      >
        <p className="first_para_container">
          <b>the pitch catalyst team</b>, driven by a passion for visual <br />
          storyTelling and a deep understanding of its impact, crafted <br />a
          dynamic platform to <b>empower startups</b>
        </p>
        <div id="line"></div>
        <p className="second_para_container">
          They offered a suite of services, ranging from pitch decks and sales
          decks to investor
          <br /> presentations, ensuring that every client's unique needs were
          met. The team's expertise in
          <br /> tailoring captivating decks enabled startups to stand out in
          the competitive landscape and <br /> foster{" "}
          <span>MEANINGFULconnections</span>
          with their <span>AUDIENCE.</span>
        </p>
      </div>
    </div>
  );
};

export default PitchCatalystTeam;
