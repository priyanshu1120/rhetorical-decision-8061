import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, SimpleGrid, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const Details = () => {
  const links = [
    "https://assets.interntheory.com/creative/home-logo/logo-1.png",
    "https://assets.interntheory.com/creative/home-logo/logo-2.png",
    "https://assets.interntheory.com/creative/home-logo/logo-3.png",
    "https://assets.interntheory.com/creative/home-logo/logo-4.png",
    "https://assets.interntheory.com/creative/home-logo/logo-5.png",
    "https://assets.interntheory.com/creative/home-logo/logo-6.png",
    "https://assets.interntheory.com/creative/home-logo/logo-7.png",
    "https://assets.interntheory.com/creative/home-logo/logo-8.png",
    "https://assets.interntheory.com/creative/home-logo/logo-9.png",
    "https://assets.interntheory.com/creative/home-logo/logo-10.png",
    "https://assets.interntheory.com/creative/home-logo/logo-11.png",
    "https://assets.interntheory.com/creative/home-logo/logo-12.png",
    "https://assets.interntheory.com/creative/home-logo/logo-13.png",
    "https://assets.interntheory.com/creative/home-logo/logo-14.png",
    "https://assets.interntheory.com/creative/home-logo/logo-15.png",
    "https://assets.interntheory.com/creative/home-logo/logo-16.png",
    "https://assets.interntheory.com/creative/home-logo/logo-17.png",
    "https://assets.interntheory.com/creative/home-logo/logo-18.png",
    "https://assets.interntheory.com/creative/home-logo/logo-19.png",
    "https://assets.interntheory.com/creative/home-logo/logo-20.png",
  ];
  return (
    <Flex direction={["column", "column", "row"]} justifyContent="space-evenly">
      <Box w={[300, 500, 650]} alignItems="center">
        <Heading
          textAlign={["center", "left"]}
          as="h1"
          size={["sm", "lg"]}
          borderBottom="1px solid #ddd"
          mt={[8, 4, 8, 40]}
        >
          PLETHORA OF OPPORTUNITIES
          <span style={{ color: " rgb(221, 31, 45)" }}> FOR YOU</span>
        </Heading>
        <Text
          textAlign={["left", "center", "left"]}
          fontSize={{ base: "14px", md: "14px", lg: "14px" }}
        >
          We are on a mission to connect employers to young talent all over
          India. With our strong corporate network, it will no longer be a
          challenge to find the right internship for you
        </Text>
      </Box>

      <Box>
        <SimpleGrid columns={[2, 3, 4]}>
          {links.map((el) => (
            <GridItem key={el}>
              <Image src={el} alt="img" />
            </GridItem>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
