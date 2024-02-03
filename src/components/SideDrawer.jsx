import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = ({ handleSearch }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [search, setSearch] = useState("");
  return (
    <Flex
      as="nav"
      minH="30px"
      bg="teal.200"
      alignItems="center"
      p={4}
      gap="auto"
    >
      <Box>
        <Text
          display={{ base: "none", md: "flex" }}
          fontWeight="bold"
          fontSize="3xl"
        >
          Recipe Finder
        </Text>
      </Box>
      <Spacer display={{ base: "none", md: "block" }} />
      <Box width={{ base: "80%", md: "50%" }} bg="white" borderRadius="2xl">
        <Input
          placeholder="Search for a recipe"
          size="lg"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Button size="lg" bg="orange.100" onClick={() => handleSearch(search)}>
          <Search2Icon />
        </Button>
      </Box>
      <Spacer display={{ base: "none", md: "block" }} />
      <Box ml="auto">
        {/* <Button ref={btnRef} colorScheme="teal.300" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
      </Box>
    </Flex>
  );
};

export default SideDrawer;
