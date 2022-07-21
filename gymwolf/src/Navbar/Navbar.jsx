import React from "react";
import { Box, Flex, Spacer, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import "../css/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Box>
        <Flex>
          <Box>
            <Link to="/">
              <Flex>
                <Image
                  className="navbar-gymwolf-logo"
                  src="https://www.gymwolf.com/img/gymwolf-small.png"
                />
                <span className="navbar-brand pointer">GYMWOLF</span>
              </Flex>
            </Link>
          </Box>
          <Spacer />

          <Link to="/register">
            <p className="pointer">Register</p>
          </Link>
          <Link to="/signin">
            <p className="pointer">sign in</p>
          </Link>
          <p className="pointer">
            <Search2Icon />
          </p>
        </Flex>
      </Box>
    </div>
  );
}

export default Navbar;
