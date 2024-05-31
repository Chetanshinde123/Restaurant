import React, { useState, useEffect } from "react";
import "./Cart.css";
import Layout from "../Layout";

function Cart({ cart, setCart }) {
  let [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach(menu => (ans += menu.amount * menu.price));
    setPrice(ans);
  };

  const handleRemove = id => {
    const arr = cart.filter(menu => menu.id !== id);
    setCart(arr);
  };

  const handleChange = (id, action) => {
    const updatedCart = cart.map(menu => {
      if (menu.id === id) {
        if (action === "increase") {
          menu.amount += 1;
        } else if (action === "decrease" && menu.amount > 1) {
          menu.amount -= 1;
        }
      }
      return menu;
    });
    setCart(updatedCart);
  };

  useEffect(
    () => {
      handlePrice();
    },
    [cart]
  );

  return (
    <Layout>
      <div
        className="container"
        style={{
          width: "60%",
          margin: "10px auto",
          marginTop: "70px",
          paddingTop: "20px",
          height: "100vh"
        }}
      >
        {cart.map(menu =>
          <div
            className="box d-flex m-4 mt-3 justify-content-between align-items-center border-bottom border-danger pb-3"
            key={menu.id}
          >
            <div className="img d-flex w-50 align-items-text-center">
              <img src={menu.image} alt={menu.img} width="90px" height="50px" />
              <p className="tes fw-bold ms-3 ">
                {menu.name}
              </p>
            </div>
            <div className="ac">
              <button
                style={{
                  marginLeft: "5px",
                  width: "30px",
                  padding: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  boxShadow: "0 0 3px black"
                }}
                onClick={() => handleChange(menu.id, "increase")}
              >
                +
              </button>
              <button
                style={{
                  marginLeft: "5px",
                  width: "30px",
                  padding: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  boxShadow: "0 0 3px black"
                }}
              >
                {menu.amount}
              </button>
              <button
                style={{
                  marginLeft: "5px",
                  width: "30px",
                  padding: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                  boxShadow: "0 0 3px black"
                }}
                onClick={() => handleChange(menu.id, "decrease")}
              >
                -
              </button>
            </div>
            <div>
              <span>
                {menu.price}
              </span>
              <button
                className="btn btn-info ms-3"
                onClick={() => handleRemove(menu.id)}
              >
                {" "}Remove{" "}
              </button>
            </div>
          </div>
        )}
        <div className="price d-flex justify-content-between fw-bold">
          <span style={{ fontSize: "2rem" }}>Total Price of Cart</span>
          <span style={{ fontSize: "2rem", marginRight: "100px" }}>
            Rs - {price}
          </span>
        </div>
        {/* </article> */}
      </div>
    </Layout>
  );
}

export default Cart;
