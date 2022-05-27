import React from "react";

import {
  Container,
  Link,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  useDisclosure,
  Box,
  Flex,
  Icon,
} from "@chakra-ui/react";

export function Navbar() {
  return (
    <>
      <Container maxW="8xl" color="white">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Heading size="md">Chakra App</Heading>
          </Box>
          <Spacer />
          <Flex gap="6" fontSize={"18px"}>
            <Link>Inspiration</Link>
            <Link>Find Work</Link>
            <Link>Learn Design</Link>
            <Link>Hire Designers</Link>
          </Flex>

          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <ButtonGroup gap="2">
            <Button colorScheme="none">Sign In</Button>
            <Button colorScheme="teal">Sign Up</Button>
          </ButtonGroup>
        </Flex>
      </Container>
    </>
  );
}
