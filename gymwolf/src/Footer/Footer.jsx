import { Box, Image } from "@chakra-ui/react";
import React from "react";

export function Footer() {
  return (
    <Box mt="5rem" w="100%" h="380px" bgColor="#26a9e1" p="4rem 7rem 1rem 7rem">
      <Box mb="8%" display="flex" gap="7rem">
        <Box>
          <Box fontSize="14px" fontWeight="bold" m="18px 0">
            ABOUT
          </Box>
          <Box fontSize="18px" color="white" lineHeight="2rem">
            About us
          </Box>
          <Box fontSize="18px" color="white" lineHeight="2rem">
            Contact
          </Box>
        </Box>
        <Box>
          <Box fontSize="14px" fontWeight="bold" m="18px 0">
            LEGAL
          </Box>
          <Box fontSize="18px" color="white" lineHeight="2rem">
            Term of Service
          </Box>
          <Box fontSize="18px" color="white" lineHeight="2rem">
            Privacy
          </Box>
          <Box fontSize="18px" color="white" lineHeight="2rem">
            Pricing
          </Box>
        </Box>
        <Box>
          <Box fontSize="14px" m="18px 0" fontWeight="bold">
            Get the app
          </Box>
          <Box>
            <Image
              w="9rem"
              mb="1rem"
              src="https://www.gymwolf.com/img/footer/android-button.png"
            />
          </Box>
          <Box>
            <Image
              w="9rem"
              src="https://www.gymwolf.com/img/footer/ios-button.png"
            />
          </Box>
        </Box>
        <Box>
          <Box fontSize="14px" fontWeight="bold" m="18px 0">
            SOCIAL
          </Box>
          <Box>
            <Image src="https://www.gymwolf.com/img/footer/fb-button.png" />
          </Box>
        </Box>
        <Box>
          <Box fontSize="14px" fontWeight="bold" m="18px 0">
            LANGUAGES
          </Box>
          <Box fontSize="18px" color="white" lineHeight="2rem">
            Eesti keeles
          </Box>
        </Box>
      </Box>
      <Box p="1rem 0" color="white" borderTop="1px solid white">
        Copyright © Mooncascade OÜ. All Rights Reserved. Tel: +372 5344 5686.
        E-mail: info@gymwolf.com
      </Box>
    </Box>
  );
}
