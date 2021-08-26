import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const MenuBar = () => {
  const [elementOneTop, setElementOneTop] = useState(0)
  const [elementTwoTop, setElementTwoTop] = useState(0)

  useEffect(() => {
    window.onload = () => {
      const elOne = document.getElementById('merch-container')
      const elTwo = document.getElementById('schedule-container')
      const elOneTop = Math.round(elOne.offsetTop)
      const elTwoTop = Math.round(elTwo.offsetTop)
      setElementOneTop(elOneTop)
      setElementTwoTop(elTwoTop)
    }
    window.addEventListener("resize", () => {
      const elOne = document.getElementById('merch-container')
      const elTwo = document.getElementById('schedule-container')
      const elOneTop = Math.round(elOne.offsetTop)
      const elTwoTop = Math.round(elTwo.offsetTop)
      setElementOneTop(elOneTop)
      setElementTwoTop(elTwoTop)
    })
    window.removeEventListener("resize", () => {
      const elOne = document.getElementById('merch-container')
      const elTwo = document.getElementById('schedule-container')
      const elOneTop = Math.round(elOne.offsetTop)
      const elTwoTop = Math.round(elTwo.offsetTop)
      setElementOneTop(elOneTop)
      setElementTwoTop(elTwoTop)
    })
  })

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

  const handleScroll = (id, elementOneTop, elementTwoTop) => {
    const offSet = 110;
    const overlay = document.getElementById('overlay-wrapper')
    const scrollPosition1 = Math.round(elementOneTop - offSet);
    const scrollPosition2 = Math.round(elementTwoTop - offSet);
    if (id === 'merch-container') {
      overlay.scrollTo({
        top: scrollPosition1,
        behavior: "smooth"
      });
    } else {
      overlay.scrollTo({
        top: scrollPosition2,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
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
        id="menu-button"
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
            handleScroll("merch-container", elementOneTop, elementTwoTop);
            handleClose();
          }}
        >
          Vinyl/Merch
        </MenuItem>
        <MenuItem
          className="font-roboto"
          onClick={() => {
            handleScroll("schedule-container", elementOneTop, elementTwoTop);
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
    </>
  );
};
