import React from "react";
import { Typography } from "@material-ui/core";

export const Schedule = () => {
  return (
    <>
      <Typography
        className="text font-bungee overlay-element"
        align="center"
        style={{
          fontWeight: "400",
          fontSize: "60px",
        }}
      >
        Upcoming Shows
      </Typography>

      <div id="plugin-container">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FBigfootYanceyMusic%2F&tabs=events&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="500"
          height="600"
          style={{
            border: "none",
            overflow: "hidden",
          }}
          title="Bigfoot Yancey FB Widget"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          adapt-container-width="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};
