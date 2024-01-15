import React from "react";
import "../../styles/our-story/our-story.scss";
const OurStory = ({ progress, progress1, progress2 }) => {
  return (
    <div
      id="our_story"
      style={{
        opacity: progress >= progress1 && progress <= progress2 ? "1" : "0",
        transform:
          progress >= progress1 && progress <= progress2
            ? "none"
            : "translateY(-600px)",
        transition: progress > progress1 && progress <= progress2 ? "2s" : "2s",
      }}
    >
      <div className="our_story_text_container">
        <p className="our">Our</p>
        <p className="story">Story</p>
      </div>
      <p className="our_story_paragraph">
        In 2023, amidst the bustling energy of, a group of{" "}
        <b> INNOVATIONVILLE </b>
        creative
        <br /> entrepreneurs and seasoned professionals united under a shared
        vision.
        <br />
        They recognized that startups often faced challenges in effectively
        <br /> communicating their potential and engaging with their target
        audiences.
        <br />
        Determined to bridge this gap, they founded
        <b>PITCH CATALYST</b>
        —A haven for <br />
        startups seeking
        <b> EXPERT GUIDANCE AND SUPPORT</b>
      </p>
    </div>
  );
};

export default OurStory;
