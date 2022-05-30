import React from "react";
import "./Header.css";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/free-vector/podcast-logo-simple-design_169533-99.jpg"
          alt="logo"
        />
        <h2>Podify</h2>
      </div>

      <div className="header-navbar">
        <a href="./">Home</a>
        <a href="./About">About</a>
        <a href="./Products">Products</a>
        <a href="./Pricing">Pricing</a>
      </div>
      <Button className="btn">Sign In</Button>
    </div>
  );
};

export default Header;
