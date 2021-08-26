import React from "react";
import { Video, Controls, MenuBar, Content } from "./index";

export const Mobile = () => {
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
        <Controls />
        <div id="content-container">
          <Content />
        </div>
      </div>
      <MenuBar />
    </>
  );
};
