import React from "react";
import { Route, Routes } from "react-router";
import Home from "../AllComponents/Home";
import Register from "../AllComponents/Register";
import Signin from "../AllComponents/Signin";
import Navbar from "../Navbar/Navbar";

function AllRoutes() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
