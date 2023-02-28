import React from "react";
import { useBfyStore } from "../BfyContext";
require('dotenv').config();

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
        <source src={process.env.REACT_APP_S3_VIDEO_URL} type="video/mp4" />
      </video>
    </div>
  );
};
