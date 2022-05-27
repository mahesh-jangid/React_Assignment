import React from "react";

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";

// import { useToast } from "@chakra-ui/react";

import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

const NavItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];
export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer isOpen={onOpen} placement="left" size={"xs"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>LOGO</DrawerHeader>

          <DrawerBody>
            <Box>
              {NavItems.map((item) => (
                <Flex
                  justify="flex-start"
                  cursor="pointer"
                  align="center"
                  p="4"
                  mx="4"
                  role="group"
                  _hover={{
                    bg: "cyan.400",
                    color: "white",
                  }}
                  borderRadius="lg"
                >
                  <Icon fontSize="22" mr="23px" as={item.icon}></Icon>

                  <span>{item.name}</span>
                </Flex>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
