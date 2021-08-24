import React from "react";
import { Merch, Schedule } from ".";

export const Content = () => {
  return (
    <>
      <img
        src="/logos/circle_white.png"
        alt="Bigfoot Yancey circle logo white"
        style={{
          width: "200px",
          marginTop: "50px",
        }}
        id="overlay-logo"
        className="overlay-element"
      />
      <div id="merch-container">
        <Merch />
      </div>
      <div id="schedule-container">
        <Schedule />
      </div>
    </>
  );
};
