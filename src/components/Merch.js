import React from "react";
import { openNewWindow } from "../helpers";
import { Button, Typography } from "@material-ui/core";

export const Merch = () => {
  return (
    <>
      <Typography
        className="font-ultra overlay-element"
        style={{
          color: "white",
          fontWeight: "400",
          fontSize: "60px",
        }}
      >
        VINYL & MERCH
      </Typography>
      <div id="vinyl-wrapper">
        <Button
          className="vinyl-button overlay-element"
          onClick={(e) => {
            e.preventDefault();
            openNewWindow(
              "https://www.squarecatvinylshop.com/product/bigfoot-yancey-hills-vinyl-/1730?cp=true&sa=false&sbp=false&q=true"
            );
          }}
        >
          <img
            src="/images/hills.jpeg"
            alt="Bigfoot Yancey - Hills (Album)"
            style={{
              width: "300px",
            }}
          />
        </Button>

        <Button
          className="vinyl-button overlay-element"
          onClick={(e) => {
            e.preventDefault();
            openNewWindow(
              "https://www.squarecatvinylshop.com/product/bigfoot-yancey-early-years-vinyl-/6056?cp=true&sa=false&sbp=false&q=true"
            );
          }}
        >
          <img
            src="/images/early_years.jpeg"
            alt="Bigfoot Yancey - Early Years (Album)"
            style={{
              width: "300px",
            }}
          />
        </Button>
      </div>
      <Typography
        className="text font-bungee overlay-element"
        style={{
          marginTop: "20px",
          height: "40px",
        }}
      >
        Merch coming soon...
      </Typography>
    </>
  );
};
