import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../css/home.css";

function Mhome() {
  return (
    <Box>
      <Flex>
        <Box>
          <Box p="5rem 7rem">
            <Heading fontSize="36px" color="white" pb="2rem">
              Online personal trainer
            </Heading>
            <Text fontSize="22px" pb="3rem">
              Gymwolf has certified personal trainers that provide you with
              customised workout plans depending on your goals. Our trainers
              track your progress, coach and motivate you daily through our web
              and smartphone app.
            </Text>
            <Button
              className="learnMore"
              color="white"
              bgColor="black"
              p="30px 100px"
              fontSize="22px"
            >
              Learn more
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Box>
          <Image
            width="100rem"
            src="https://www.gymwolf.com/img/trainer-bg.jpg"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Mhome;
