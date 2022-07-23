import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Container,
  Spacer,
  Input,
  Radio,
  Stack,
  RadioGroup,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  Button,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Register() {
  return (
    <Box w="80%" m="auto" display="flex">
      <Box w="80%">
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Genereal</Tab>
            <Tab>Body Measurement</Tab>
            <Tab>Privacy</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Stack>
                <h1>General</h1>
                <HStack>
                  <b>Email:</b>
                  <Spacer />
                  <Input w="85%" />
                </HStack>

                <HStack>
                  <b>Your Name:</b>
                  <Spacer />
                  <Input placeholder="Name" w="85%" />
                </HStack>
                <HStack>
                  <b>Gender</b>

                  <RadioGroup pl="4rem">
                    <Stack spacing={2} direction="row">
                      <Radio colorScheme="red" value="1">
                        Radio
                      </Radio>
                      <Radio colorScheme="green" value="2">
                        Radio
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </HStack>
                {/* //birthdate */}
                <HStack>
                  <b style={{ marginRight: "1.5rem" }}>Date of Birth</b>

                  <Input w="150px" type="date" />
                </HStack>

                {/* password */}
                <HStack>
                  <b>Password:</b>
                  <Spacer /> <Input placeholder="Password" w="85%" />
                </HStack>
                {/* confirm pass */}
                <HStack>
                  <b>Confirm Password:</b>
                  <Spacer /> <Input placeholder="Confirm password" minW="85%" />
                </HStack>
                {/* metric unit */}
                <HStack>
                  <b>Preferred units:</b>
                  <Spacer /> <Input placeholder="Metric (kgs)" w="85%" />
                </HStack>
                {/* timezone */}
                <HStack>
                  <b>TimeZone:</b>
                  <Spacer />
                  <Input type="text" w="85%" placeholder="kolkata" />
                </HStack>
                {/* description */}
                <HStack>
                  <b>Description for Profile:</b>
                  <Spacer /> <Input minW="85%" />
                </HStack>
                {/* profile url */}
                <HStack>
                  <b>Profile URl:</b>
                  <Spacer /> <Input w="85%" />
                </HStack>
              </Stack>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Spacer />
      <Box> image</Box>
    </Box>
  );
}

export default Register;
