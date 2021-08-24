import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const MenuBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const buildEmail = () => {
    const link = "mailto:bigfootyancey@gmail.com";
    window.location.href = link;
  };

  const handleScroll = (id) => {
    let element = document.getElementById(id);
    if (id === "merch-container") {
      element.scrollIntoView(false);
    } else {
      element.scrollIntoView(true);
    }
  };

  return (
    <div id="menu-bar">
      <img
        src="logos/bigfoot_white.png"
        alt="Bigfoot Yancey logo - white"
        style={{
          width: "100px",
        }}
        id="menu-bar-logo"
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
      >
        <MenuIcon
          style={{
            color: "white",
          }}
          fontSize="large"
        />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          className="font-roboto"
          onClick={() => {
            handleScroll("merch-container");
            handleClose();
          }}
        >
          Vinyl/Merch
        </MenuItem>
        <MenuItem
          className="font-roboto"
          onClick={() => {
            handleScroll("schedule-container");
            handleClose();
          }}
        >
          Shows
        </MenuItem>
        <MenuItem
          className="font-roboto"
          onClick={() => {
            buildEmail();
            handleClose();
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
};
