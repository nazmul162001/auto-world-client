import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";

const Home = ({ show, setShow }) => {
  return (
    <div className="">
      <Navbar show={show} setShow={setShow} />
      <Products />
    </div>
  );
};

export default Home;
