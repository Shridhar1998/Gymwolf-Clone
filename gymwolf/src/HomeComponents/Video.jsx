import React from "react";
import bgmage from "../landingvideo/Gymwolf_video.mp4";
import "../css/video.css";
import { Box, Button, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Mhome from "./Mhome";
function Video() {
  return (
    <div>
      <video autoPlay muted loop className="landing_video">
        <source src={bgmage} type="video/mp4" />
      </video>
      <Box color="white" pt="255px">
        <Heading
          fontSize="65px"
          textShadow="2px 2px 4px #000000"
          textAlign="center"
        >
          A better way to track your workouts
        </Heading>
        <Box display="flex" justifyContent="center" mt="5rem">
          <Button
            color="#fffff"
            bgColor="#26A9E1"
            p="30px 100px"
            fontSize="22px"
          >
            Start free
          </Button>
        </Box>
        <Box textAlign="center" p="2rem" textDecoration="underline">
          <a href="">
            <b>
              See how it works <ArrowRightIcon w="9px" />
            </b>
          </a>
        </Box>
        {/* <Mhome/> */}
      </Box>
    </div>
  );
}

export default Video;
