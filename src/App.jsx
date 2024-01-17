import { useState } from "react";
import "./App.scss";
import Stickyroll from "@stickyroll/react/stickyroll";
import OurStory from "./components/ourStory/OurStory";
import PitchCatalystTeam from "./components/pitchCatalystTeam/PitchCatalystTeam";
import AnimatedPitchCatalystTeam from "./components/animatedPitchCatalystTeam/AnimatedPitchCatalystTeam";
import PitchCatalyst from "./components/pitchCatalyst/PitchCatalyst";
const App = () => {
  const [progress, setProgress] = useState(0);
  const progress1 = 0;
  const progress2 = 0.2;
  const progress3 = 0.4;
  const progress4 = 0.6;
  const progress5 = 0.9;

  const handleProgress = (p) => {
    setProgress(p);
  };

  return (
    <div>
      <Stickyroll pages={1} factor={10} onProgress={handleProgress}>
        <div className="main-container">
          {
            <OurStory
              progress={progress}
              progress1={progress1}
              progress2={progress2}
            />
          }

          {
            <PitchCatalystTeam
              progress={progress}
              progress2={progress2}
              progress3={progress3}
              progress4={progress4}
              progress1={progress1}
            />
          }
          {
            <AnimatedPitchCatalystTeam
              progress={progress}
              progress3={progress3}
              progress4={progress4}
            />
          }
          {
            <PitchCatalyst
              progress={progress}
              progress4={progress4}
              progress5={progress5}
            />
          }
        </div>
      </Stickyroll>
    </div>
  );
};

export default App;
