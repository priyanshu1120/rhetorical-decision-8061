import { Box, Center, Heading, Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'

const Pro = () => {
  return (
    <>
      <Box
        bg="#f7fcfe"
        width={[
          "100%", // 0-30em
          "50%", // 30em-48em
          "25%", // 48em-62em
          "100%", // 62em+
        ]}
      >
        <Box margin="auto">
          <Heading as="h5">
            LET’S GET SOME
            <span style={{ color: " rgb(221, 31, 45)" }}> WORK EXPERIENCE</span>
          </Heading>
        </Box>

        <Center>
          <SimpleGrid
            spacing="10px"
            columns={[2, 4, 4]}
            m={["1rem", "2rem", "rem"]}
          >
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/HR.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/BD.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/Graphic.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/Finance.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/HR.jpg"
                alt=""
              />
            </Box>
            <Box>
              <Image
                width={[
                  "100%", // 0-30em
                  "50%", // 30em-48em
                  "25%", // 48em-62em
                  "80%", // 62em+
                ]}
                src="https://assets.interntheory.com/creative/home-internships/Eng.jpg"
                alt=""
              />
            </Box>
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}

export default Pro