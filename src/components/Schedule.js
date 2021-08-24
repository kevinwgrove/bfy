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
          fontSize: "50px",
        }}
      >
        Upcoming Shows
      </Typography>

      <div id="plugin-container" className="overlay-element">
        <div
          className="fb-page"
          data-href="https://www.facebook.com/BigfootYanceyMusic/events/?ref=page_internal"
          data-tabs="events"
          data-width="500"
          // data-height=""
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/BigfootYanceyMusic/events/?ref=page_internal"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/BigfootYanceyMusic/events/?ref=page_internal">
              Bigfoot Yancey
            </a>
          </blockquote>
        </div>
      </div>
    </>
  );
};
