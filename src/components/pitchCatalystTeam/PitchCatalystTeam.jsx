import "../../styles/pitchCatalystTeam/pitchCatalystTeam.scss";
const PitchCatalystTeam = ({ progress, progress2, progress3, progress4 }) => {
  return (
    <div
      className="pitch_catalyst_background"
      style={{
        transition: "2s",
        opacity: progress > progress2 && progress <= progress3 ? "1" : "0",
      }}
    >
      <div
        className="whole_para_container_black"
        style={{
          borderRadius:
            progress > 0.3 && progress <= 0.4
              ? "50px"
              : progress > progress3
              ? "50px"
              : "0",
          height:
            progress > 0.3 && progress <= 0.4
              ? "60vh"
              : progress > 0.3
              ? "60vh"
              : "100vh",
          backgroundColor: progress > 0.2 && progress <= 0.3 ? "#000" : "#000",
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
        <div className="whole_para_container">
          <p className="first_para_container">
            <b>the pitch catalyst team</b>, driven by a passion for visual{" "}
            <br />
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
    </div>
  );
};

export default PitchCatalystTeam;
