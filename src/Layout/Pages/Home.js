import React from "react";
import Layout from "../Layout";
import banner from "../Images/banner.jpeg";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1> Food You Like</h1>
          <p>Delicious food you has choice</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
