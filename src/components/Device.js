import React from "react";
import { Video, Controls, MenuBar, Content } from "./index";

export const Device = () => {
  const fadeOutOnScroll = () => {
    const elements = document.querySelectorAll(".overlay-element");
    const menuBarHeight = document.getElementById("menu-bar-logo").offsetHeight;
    

    for (let i = 0; i < elements.length; i++) {
      const elementHeight = elements[i].offsetHeight;
      const top = elements[i].getBoundingClientRect().top;
      let distanceToTop = window.pageYOffset + (top - elementHeight / 8);
      let opacity = 1;
      if (menuBarHeight > distanceToTop) {
        opacity = 1 - (menuBarHeight - distanceToTop) / elementHeight;
      }
      if (opacity >= 0) {
        elements[i].style.visibility = "visible";
        elements[i].style.opacity = opacity;
      } else {
        elements[i].style.visibility = "hidden";
      }
    }
  };

  const fadeOutEffect = () => {
    const target = document.getElementById("video-overlay-logo");
    const fadeEffect = setInterval(() => {
      if (!target.style.opacity) {
        target.style.opacity = 1;
      }
      if (target.style.opacity > 0) {
        target.style.opacity -= 0.04;
      } else {
        clearInterval(fadeEffect);
        target.style.visibility = "hidden";
      }
    }, 55);
  };

  setTimeout(() => {
    fadeOutEffect();
  }, 2500);

  return (
    <>
      <Video />
      <div
        id="overlay-wrapper"
        onScroll={(e) => {
          e.preventDefault();
          fadeOutOnScroll();
        }}
      >
          <img
            id="video-overlay-logo"
            src="/logos/circle_white.png"
            alt="Bigfoot Yancey circle logo"
          />
        <Controls />
        <div id="content-container">
          <Content />
        </div>
      </div>
      <MenuBar />
    </>
  );
};
