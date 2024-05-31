import React from "react";
import Layout from "../Layout";
import { Box } from "@mui/material";

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap" rel="stylesheet"/>

function About() {
  return (
    <div>
      <Layout>
        <Box sx={{
          my: 20,
          p: 2,
          textAlign: "center",
          marginTop: "70px",

          // ----------Now we are targeting child div using & ----------
          "& div" : {
            fontWeight: "bold",
            fontSize: "2rem",
            fontFamily: "'Roboto', sans-serif",
            my: 2,
          },
          "& p" : {
            textAlign:"justify"
          },
          "@media (max-width:600px)":{
            my:8
          }
        }}>
          <div>Welcome to my Restaurant</div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Box>
      </Layout>
    </div>
  );
}

export default About;
