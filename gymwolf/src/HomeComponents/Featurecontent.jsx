import React from "react";

import { Box, Heading, Text, Button } from "@chakra-ui/react";

export function Featurecontent() {
  return (
    <div>
      <Box>
        <Heading fontSize="36px" color="black" pb="2rem">
          Online personal trainer
        </Heading>
        <Text fontSize="25px" pb="3rem">
          Gymwolf has certified personal trainers that provide you with
          customised workout plans depending on your goals. Our trainers track
          your progress, coach and motivate you daily through our web and
          smartphone app.
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
    </div>
  );
}
