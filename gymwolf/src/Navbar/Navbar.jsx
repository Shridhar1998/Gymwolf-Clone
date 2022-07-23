import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Stack,
  Image,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import "../css/navbar.css";
import { AlertDialog, AlertDialogContent } from "@chakra-ui/react";

function Navbar() {
  // function AlertDialogExample() {
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  //   const cancelRef = React.useRef();

  //   return (
  //     <>
  //       {/* <Button colorScheme="red" onClick={onOpen}>
  //         Delete
  //       </Button> */}

  //       <AlertDialog
  //         isOpen={isOpen}
  //         leastDestructiveRef={cancelRef}
  //         onClose={onClose}
  //       >
  //         <AlertDialogOverlay>
  //           <AlertDialogContent>
  //             <Flex>
  //               <Input w="80%" height="auto" placeholder="dsfadsaf" />
  //               <Button colorScheme="red">register</Button>
  //             </Flex>
  //           </AlertDialogContent>
  //           <AlertDialogContent mt="8rem" width="200px">
  //             <Button bgColor="blue">sign in with facebook</Button>
  //           </AlertDialogContent>
  //           <AlertDialogContent mt="12rem" bgColor="none">
  //             dsakfnadsjn flkd skdj fifds fik,fjkd fjd fkjf
  //           </AlertDialogContent>
  //         </AlertDialogOverlay>
  //       </AlertDialog>
  //     </>
  //   );
  // }
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <p className="pointer">register</p>

            {/* <AlertDialog isOpen={isOpen}>
            <AlertDialogContent>
              <Flex>
                <Input w="80%" height="auto" placeholder="dsfadsaf" />
                <Button colorScheme="red" onClick={onClose}>
                  register
                </Button>
              </Flex>
            </AlertDialogContent>

            <AlertDialogContent mt="8rem" width="200px">
              <Button bgColor="blue">sign in with facebook</Button>
            </AlertDialogContent>
          </AlertDialog> */}
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
