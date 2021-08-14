import "./App.css";
import "react-bootstrap";
import {
  IconButton
} from "@material-ui/core"
import { VolumeOff, VolumeUp } from "@material-ui/icons"
import { useState } from "react";

function App() {
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const element = document.getElementById('video')
    element.muted = !element.muted
    setMuted(!muted)
  }

  return (
    <>
      <div id="video-wrapper">
        <video id="video" preload autoPlay poster loop muted>
          <source src="videos/northern_soul.mp4" type="video/mp4" />
        </video>
      </div>
      <div 
        id="overlay-wrapper"
      >
        <div
          id="menu-bar"
        >
        </div>
        <div
          id="sound-button-container"
        >
          {
            muted
            ?
            <IconButton
              onClick={toggleSound}
            >
              <VolumeOff 
                style={{
                  color: 'white'
                }}
              />
            </IconButton>
            :
            <IconButton
              onClick={toggleSound}
            >
              <VolumeUp 
                style={{
                  color: 'white'
                }}
              />
            </IconButton>
          }
        </div>
      </div>
    </>
  );
}

export default App;
