import React from "react";

import {
  Box,
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Image,
  Stack,
  VStack,
} from "@chakra-ui/react";
import "../css/Feature.css";
import featimg from "../images/feature.png";
import progimg from "../images/progress.png";
import dataimg from "../images/database.png";

export function Feature() {
  return (
    <Box>
      <Box p="5rem 7rem">
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <GridItem w="100%" mb="2rem">
            <Box>
              <Heading fontSize="36px" color="black" pb="2rem">
                Features
              </Heading>
              <Text fontSize="22px" pb="3rem">
                Gymwolf is a workout tracking tool. Add workouts, create your
                own customized workout plans or find suitable plan from other
                users. Accomplish your goals with motivation from personal
                trainer and committed training.
              </Text>
              <Button
                className="skyblue"
                color="white"
                bgColor="#26a9e1"
                p="30px 100px"
                fontSize="22px"
              >
                Take a tour
              </Button>
            </Box>
          </GridItem>
          <GridItem w="100%" mb="2rem">
            <Box className="himages">
              <img src={featimg} alt="feature.png" />
            </Box>
          </GridItem>
          <GridItem w="100%" mb="2rem">
            <Box className="himages">
              <img src={progimg} alt="feature.png" />
            </Box>
          </GridItem>
          <GridItem w="100%" mb="2rem">
            <Box>
              <Heading fontSize="36px" color="black" pb="2rem">
                See your progress
              </Heading>
              <Text fontSize="22px" pb="3rem">
                Gymwolf provides different graphs that help you track your
                progress. There are graphs for gym workouts, cardio workouts and
                bodyweight. The graphs are highly customizable: you can select
                the date range, exercise and group the results by month, week or
                single workout.
              </Text>
              <Button
                className="skyblue"
                color="white"
                bgColor="#26a9e1"
                p="30px 100px"
                fontSize="22px"
              >
                Take a tour
              </Button>
            </Box>
          </GridItem>
          <GridItem w="100%" mb="2rem">
            <Box>
              <Heading fontSize="36px" color="black" pb="2rem">
                Database with 300+ exercises
              </Heading>
              <Text fontSize="22px" pb="3rem">
                Gymwolf has a database with over 300 exercises. The exercises
                come with detailed descriptions, tips and step-by-step images.
                If you don't find a exercise from our database, then you can
                also add your own exercises.
              </Text>
              <Button
                className="skyblue"
                color="white"
                bgColor="#26a9e1"
                p="30px 100px"
                fontSize="22px"
              >
                Take a tour
              </Button>
            </Box>
          </GridItem>
          <GridItem w="100%" mb="2rem">
            <Box className="himages">
              <img src={dataimg} alt="feature.png" />
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box className="greycontainer">
        <VStack>
          <Box className="btns" mt="1.5rem">
            <Button>1</Button>
            <Button>1</Button>
            <Button>4</Button>
            <Button>0</Button>
            <Button>3</Button>
            <Button>0</Button>
            <Button>8</Button>
            <Button>7</Button>
            <Button>9</Button>
            <Button>8</Button>
            <h1>Kgs</h1>
          </Box>

          <h1 style={{ fontSize: "22px" }}>LIFTED USING GYMWOLF</h1>
        </VStack>
      </Box>
    </Box>
  );
}
