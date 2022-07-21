import { Box, Flex, Spacer, Stack, Image } from "@chakra-ui/react";
import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Box>
        <Flex>
          <Box>
            <Flex>
              <Image
                className="navbar-gymwolf-logo"
                src="https://www.gymwolf.com/img/gymwolf-small.png"
              />
              <span className="navbar-brand">GYMWOLF</span>
            </Flex>
          </Box>
          <Spacer />

          <p>Register</p>
          <p>sign in</p>
          <p>
            <Search2Icon />
          </p>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
