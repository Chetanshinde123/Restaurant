import React from "react";
import Layout from "../Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@mui/material";
import MenuList from "../../Data/Data";

function Menu({ handleClick }) {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "50px"
        }}
      >
        {MenuList.map(menu =>
          <Card sx={{ maxWidth: "390px", m: 3 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <h1>
                  {menu.name}
                </h1>
                <div>
                  {menu.description}
                </div>
                <div>
                  Price : <strong>Rs {menu.price} </strong>
                </div>
                <button className="btn btn-outline-info"
                 onClick={() => handleClick(menu)}>Add To Cart</button>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </Box>
    </Layout>
  );
}

export default Menu;
