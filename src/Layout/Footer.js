import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <Box>
        <p
          style={{
            textAlign: "center",
            backgroundColor: "#1A1A19",
            color: "white",
            fontSize: "20px",
            padding: "10px"
          }}
        >
          <Box
            sx={{
              my: 3,
              //  -------& is use to target directly to icons class  has svg synatax to target directly we can use it-------
              "& svg": {
                fontSize: "60px",
                cursor: "pointer",
                mr: 2 
              },
              "& svg:hover": {
                color: "gold",
                transform: "translateY(5px)",
                transition: "all 800ms"
              }
            }}
          >
            {/* -----ICONS--------- */}
            <InstagramIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <GitHubIcon />
            <YouTubeIcon />
          </Box>
          All Rights Reserved &copy; Chetan.info
        </p>
      </Box>
    </div>
  );
}

export default Footer;
