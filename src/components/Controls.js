import React, { useState, useEffect } from "react";
import { IconButton, Button, Typography } from "@material-ui/core";
import {
  VolumeOff,
  VolumeUp,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";
import { useBfyStore } from "../BfyContext";
import { openNewWindow } from "../helpers";
import { useAnalyticsEventTracker } from "../useGoogleAnalytics";

export const Controls = () => {
  const gaEventTracker = useAnalyticsEventTracker('Controls');
  const [muted, setMuted] = useState(true);
  const [top, setTop] = useState(window.innerHeight / 4);
  const [height, setHeight] = useState(window.innerHeight / 2);
  const bfyStore = useBfyStore();
  const mobileDevice = bfyStore.mobileDevice;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setTop(window.innerHeight / 4);
      setHeight(window.innerHeight / 2);
    });
    window.removeEventListener("resize", () => {
      setTop(window.innerHeight / 4);
      setHeight(window.innerHeight / 2);
    });
  });

  const toggleSound = () => {
    const element = document.getElementById("video");
    element.muted = !element.muted;
    gaEventTracker(`Sound Toggled | sound on: ${!muted}`)
    setMuted(!muted);
  };

  return mobileDevice ? (
    <div id="main-play-container">
      <div
        id="play-button-container"
        style={{
          top: `${top}px`,
          height: `${height}px`,
        }}
      >
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            gaEventTracker(`Full Video (YouTube redirect) button click: mobile device`)
            openNewWindow(
              "https://www.youtube.com/watch?v=KhfhgWWnR60&t=1643s"
            );
          }}
          className="overlay-element"
        >
          <PlayCircleFilledOutlined
            style={{
              color: "white",
              width: "150px",
              height: "150px",
            }}
            className="overlay-element"
          />
        </IconButton>
        <Typography
          className="font-alumni overlay-element"
          style={{
            fontSize: "60px",
            fontWeight: "500",
          }}
        >
          Full Video
        </Typography>
      </div>
    </div>
  ) : (
    <div id="main-play-container">
      <div id="full-video-button">
        <Button
          className="font-alumni overlay-element"
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "20px",
          }}
          onClick={(e) => {
            e.preventDefault();
            gaEventTracker(`Full Video (YouTube redirect) button click`)
            openNewWindow(
              "https://www.youtube.com/watch?v=KhfhgWWnR60&t=1643s"
            );
          }}
        >
          Full Video
        </Button>
      </div>
      <div id="sound-button-container">
        {muted ? (
          <IconButton onClick={toggleSound}>
            <VolumeOff
              style={{
                color: "white",
              }}
            />
          </IconButton>
        ) : (
          <IconButton onClick={toggleSound}>
            <VolumeUp
              style={{
                color: "white",
              }}
            />
          </IconButton>
        )}
      </div>
    </div>
  );
};
