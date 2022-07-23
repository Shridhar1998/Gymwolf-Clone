import { Box, Button, Container, Input, Stack } from "@chakra-ui/react";
import React from "react";

function Signin() {
  return <div>
    <Container textAlign="center" pt="100px">
      <Stack>
  <Input  placeholder="Email"/>
  <Input placeholder="password"/>
  <Stack/>
  <Stack/>
  <Stack/>
  <Button color="white" bgColor="skyblue">Signin</Button>
  <h1>-Or-</h1>
  <Button color="white" bgColor="facebook.400">Sign in with facebook</Button>
  </Stack>
  </Container>



  </div>;
}

export default Signin;
