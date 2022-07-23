import React from "react";
import { Route, Routes } from "react-router";
import Home from "../AllComponents/Home";
import Register from "../AllComponents/Register";
import Signin from "../AllComponents/Signin";
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function AllRoutes() {
  return (
    <>
<<<<<<< HEAD
    
=======
      <Navbar />
>>>>>>> f3122c0e0cd27a44ccecf99b00fa716602b08496
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default AllRoutes;
