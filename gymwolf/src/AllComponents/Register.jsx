import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Spacer,
  Input,
  Radio,
  Stack,
  RadioGroup,
  HStack,
  Button,
  InputGroup,
  InputLeftAddon,
  Image,
  Text,
  Heading,
  InputRightAddon,
  VStack,
} from "@chakra-ui/react";
import { LockIcon } from "@chakra-ui/icons";

import { useState } from "react";

const init = {
  email: "",
  name: "",
  gender: "",
  dob: "",
  password: "",
  Cpassword: "",
  kgs: "",
  timezone: "",
  description: "",
  url: "",
};
function Register() {
  const [regData, setRegData] = useState({});
  const [obj, setObj] = useState(init);
  function handleChange(e) {
    const { name, value } = e.target;
    setObj({
      ...obj,
      [name]: value,
    });
  }
  const {
    email,
    name,
    gender,
    dob,
    password,
    Cpassword,
    kgs,
    timezone,
    description,
    url,
  } = obj;
  function submit(e) {
    e.preventDefault();
    setRegData(obj);
  }
  return (
    <Box  w="80%" m="auto" display="flex" pt="5rem">
      <Box w="80%" mr="2rem">
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Genereal</Tab>
            <Tab>Body Measurement</Tab>
            <Tab>Privacy</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form onSubmit={submit}>
                <Stack>
                  <Heading fontWeight="normal" fontSize="22px">
                    General
                  </Heading>
                  <HStack>
                    <b>Email:</b>
                    <Spacer />
                    <Input
                      name="email"
                      value={email}
                      onChange={handleChange}
                      w="80%"
                      placeholder="Email"
                    />
                  </HStack>

                  <HStack>
                    <b>Your Name:</b>
                    <Spacer />
                    <Input
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      w="80%"
                      value={name}
                    />
                  </HStack>
                  <HStack>
                    <b>Gender:</b>
                    <Spacer />
                    <Input
                      name="gender"
                      value={gender}
                      onChange={handleChange}
                      placeholder="gender"
                      width="80%"
                    />
                  </HStack>
                  {/* //birthdate */}
                  <HStack>
                    <b style={{ marginRight: "3.5rem" }}>Date of Birth</b>

                    <Input
                      w="150px"
                      name="dob"
                      value={dob}
                      onChange={handleChange}
                      type="date"
                    />
                  </HStack>

                  {/* password */}
                  <HStack>
                    <b>Password:</b>
                    <Spacer />
                    <Input
                      name="password"
                      value={password}
                      onChange={handleChange}
                      placeholder="Password"
                      w="80%"
                    />
                  </HStack>
                  {/* confirm pass */}
                  <HStack>
                    <b>Confirm Password:</b>
                    <Spacer />
                    <Input
                      name="Cpassword"
                      value={Cpassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      w="80%"
                    />
                  </HStack>
                  {/* metric unit */}
                  <HStack>
                    <b>Preferred units:</b>
                    <Spacer />
                    <Input
                      name="kgs"
                      value={kgs}
                      onChange={handleChange}
                      placeholder="Metric (kgs) "
                      w="80%"
                    />
                  </HStack>
                  {/* timezone */}
                  <HStack>
                    <b>TimeZone:</b>
                    <Spacer />
                    <Input
                      name="timezone"
                      value={timezone}
                      onChange={handleChange}
                      type="text"
                      w="80%"
                      placeholder="kolkata"
                    />
                  </HStack>
                  {/* description */}
                  <HStack>
                    <b>Description for Profile:</b>
                    <Spacer />
                    <Input
                      minW="80%"
                      value={description}
                      name="description"
                      onChange={handleChange}
                      placeholder="Description"
                      type="text"
                    />
                  </HStack>
                  {/* profile url */}
                  <HStack>
                    <b>Profile URl:</b>

                    <InputGroup size="sm">
                      <Spacer />
                      <InputLeftAddon children="https://" />
                      <Input
                        w="80%"
                        value={url}
                        name="url"
                        onChange={handleChange}
                        placeholder="profile image url"
                      />
                    </InputGroup>
                  </HStack>
                  <Box w="100%" p="1rem" bgColor="#f5f5f5">
                    <Button bg="#2ecc71" type="submit" onClick={submit}>
                      Save
                    </Button>
                  </Box>
                </Stack>
              </form>
            </TabPanel>
            {/* body measurement */}
            <TabPanel>
              <Text fontSize="1.5rem" mb="1rem">
                Body measurement
              </Text>
              <Box w="80%" p="2rem 0" bgColor="limewhite" m="auto">
                <Stack>
                  <HStack>
                    <b style={{ width: "80px" }}>Height:</b>
                    <InputGroup>
                      <Input maxW="200px" placeholder="height" />
                      <InputRightAddon children="cm" />
                    </InputGroup>
                  </HStack>
                  <HStack>
                    <b style={{ width: "80px" }}>Waist:</b>
                    <InputGroup>
                      <Input maxW="200px" placeholder="Waist" />
                      <InputRightAddon children="cm" />
                    </InputGroup>
                  </HStack>

                  <HStack>
                    <b style={{ width: "80px" }}>Hips:</b>
                    <InputGroup>
                      <Input maxW="200px" placeholder="Hips" />
                      <InputRightAddon children="cm" />
                    </InputGroup>
                  </HStack>
                  <HStack>
                    <b style={{ width: "80px" }}>Neck:</b>
                    <InputGroup>
                      <Input maxW="200px" placeholder="Neck" />
                      <InputRightAddon children="cm" />
                    </InputGroup>
                  </HStack>
                </Stack>
              </Box>
              <Box w="100%" mt="2.5rem" p="1rem" bgColor="#eeeeee">
                <Button bg="#2ecc71" type="submit" onClick={submit}>
                  Save
                </Button>
              </Box>
            </TabPanel>

            {/* Privacy  */}
            <TabPanel>
              <Box
                border="1px sold red"
                width="90%"
                height="400px"
                bgColor="limewhite"
                p="2rem 0"
              >
                <Stack>
                  <Button
                    w="8rem"
                    bgColor="white"
                    fontSize="1.5rem"
                    leftIcon={<LockIcon />}
                    fontWeight="normal"
                  >
                    Privacy
                  </Button>
                  <b>Your profile is public</b>
                  <p>
                    <span style={{ color: "blue" }}>
                      Make your workouts private
                    </span>
                    , so only you can see them
                  </p>

                  <HStack>
                    <Box mt="2rem">
                      <input style={{ marginRight: "1rem" }} type="checkbox" />
                      <b>
                        Send e-mail notifications when receiving new messages.
                      </b>
                    </Box>
                  </HStack>
                </Stack>
                {/* save button */}
                <Box w="100%" mt="2.5rem" p="1rem" bgColor="#eeeeee">
                  <Button bg="#2ecc71" type="submit" onClick={submit}>
                    Save
                  </Button>
                </Box>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Spacer />
      <Box h="200px" w="20%" justifySelf="right">
        <Box bgColor="#f5f5f5" w="100%" p="1rem 1rem">
          <Box borderBottom="1px solid grey" m="1rem 0">
            {regData.url ? (
              <Image width="90%" m="auto" height="150px" src={regData.url} />
            ) : (
              <Image
                width="90%"
                m="auto"
                height="150px"
                src="https://www.gymwolf.com/user_images/4c4ea86ae54faee7a5219b4a5111d87c_.jpg"
              />
            )}

            <Heading fontSize="1.5rem" textAlign="center" m="1rem 0">
              {regData.name}
            </Heading>
          </Box>
          <Box borderBottom="1px solid grey" m="2rem 0" textAlign="center">
            <Text>
              <b>0</b>
            </Text>
            <Text mb="2rem">workouts added</Text>
          </Box>
          <Box borderBottom="1px solid grey" m="2rem 0" textAlign="center">
            <Text>
              <b>{regData.kgs ? regData.kgs : 0} kgs</b>
            </Text>
            <Text mb="2rem">Lifted</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
