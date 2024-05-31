import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider
} from "@mui/material";
import Logo from "../Layout/Images/logo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import {NavLink } from "react-router-dom";
import "./HeaderStyles.css";
import { useState } from "react";

function Header({size}) {
  let [mobileopen, setMobileopen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div
        style={{
          color: "goldenrod",
          fontSize: "20px",
          display: "flex",
          flexGrow: "1",
          margin: "50px"
        }}
      >
        <img src={Logo} alt="logo" height={"70px"} width="200px" />
      </div>
      <Divider />
      <div
        className="mobile-navigation-menu"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}> Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}> About</NavLink>
          </li>
          <li>
            <NavLink to={"/cart"}> Cart</NavLink>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Box>
        <AppBar component={"saas"} sx={{ bgcolor: "black" }}>
          <Toolbar>

            <IconButton
              aria-label="open drawer"
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <div
              style={{
                color: "goldenrod",
                fontSize: "20px",
                display: "flex",
                flexGrow: "1"
              }}
            >
              <img src={Logo} alt="logo" height={"70px"} width="200px" />
            </div>
              {/* -----------For normal view---------------- */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <div
                className="navigation-menu"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <NavLink activeclassName="active" to={"/"}>Home</NavLink>

                <NavLink to={"/contact"}> Contact</NavLink>

                <NavLink to={"/menu"}>Menu</NavLink>

                <NavLink to={"/about"}> About</NavLink>

                <NavLink to={"/cart"}>Cart<sup>{size} </sup> </NavLink>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{
              display: { sx: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px"
              }
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          {/* <Toolbar /> */}
        </Box>
      </Box>
    </div>
  );
}

export default Header;
