import React from "react";
// import logo from "../Images/add-to-cart.jpg";

export function Cart() {
  return (
    <>
      <div className="add-to-cart">
        <img
          src={require("../Images/add-to-cart.jpg")}
          alt="Cart Image"
          style={{ width: "50px" }}
        />
      </div>
      <div className="product-list">
        <div className="img-wrapper item">
          <img src={require("../Images/iphone.jpg")} alt="logo" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span> <br />
          <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
}
