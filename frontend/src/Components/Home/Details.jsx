import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
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
    <Box display="flex">
      <Box marginLeft="10%" height="auto" width="40%">
        <Box margin="auto" marginTop="25%">
          <Heading as="h1" size="lg" borderBottom="1px solid #ddd">
            PLETHORA OF OPPORTUNITIES
            <span style={{ color: " rgb(221, 31, 45)" }}> FOR YOU</span>
          </Heading>
          <p
            style={{
              color: "#3C4858",
              fontSize: "0.875rem",
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "0.01071em",
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            We are on a mission to connect employers to young talent all over
            India. With our strong corporate network, it will no longer be a
            challenge to find the right internship for you
          </p>
        </Box>
      </Box>
      <Box width="40%" height="auto">
        <Grid templateColumns="repeat(4, 1fr)">
          {links.map((el) => (
            <GridItem key={el} width="150px" height="75px">
              <Image src={el} alt="img" />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
