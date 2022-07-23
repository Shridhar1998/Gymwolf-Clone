import React from "react";
import Navbar from "../Navbar/Navbar";
import Video from "../HomeComponents/Video";
import "../css/video.css";
import Mhome from "../HomeComponents/Mhome";
import { Box } from "@chakra-ui/react";
import { Feature } from "../HomeComponents/Feature";
import { Footer } from "../Footer/Footer";

function Home() {
  return (
    <div>
      

      <Video />
      <Box mt="14.5vh" bgColor="#26a9e1">
        <Mhome />
      </Box>
      <Feature />
      <Footer />
    </div>
  );
}

export default Home;
