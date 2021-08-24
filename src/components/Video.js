import React from "react";
import { useBfyStore } from "../BfyContext";

export const Video = () => {
  const bfyStore = useBfyStore();
  const mobileDevice = bfyStore.mobileDevice;
  return mobileDevice ? (
    <div id="video-wrapper">
      <img
        id="video"
        src="/images/bfy.png"
        alt="Bigfoot Yancey - Studio Sessions"
      />
    </div>
  ) : (
    <div id="video-wrapper">
      <video preload="true" autoPlay poster="true" loop muted id="video">
        <source src="./videos/northern_soul.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
