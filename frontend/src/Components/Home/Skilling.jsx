import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react'

const Skilling = () => {
  return (
    <>
      <Box p={"50"} bg="#eeeeee">
        <Text
          as="b"
          fontSize={{ base: "24px", md: "30px", lg: "36px" }}
          color="black"
        >
          HOW ABOUT <span style={{ color: "#dd1f2d" }}>UPSKILLING</span>
        </Text>
        <SimpleGrid
          columns={[1, 2, 3]}
          spacing="40px"
          mt={[2, 4, 6, 8]}
          mb={[2, 4, 6, 8]}
        >
          <Image
            src="https://assets.interntheory.com/creative/home-courses/Homepage-stock.jpg"
            alt=""
          ></Image>
          <Image
            src="https://assets.interntheory.com/creative/home-courses/Homepage-digital.jpg"
            alt=""
          ></Image>
          <Image
            src="https://assets.interntheory.com/creative/home-courses/Homepage-web.jpg"
            alt=""
          ></Image>
        </SimpleGrid>
      </Box>
    </>
  );
}

export default Skilling