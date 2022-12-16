import React from "react";
import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

const Constant = () => {
  return (
    <Box display="flex" height="auto" width="100%">
      <Box
        textAlign="center"
        marginLeft="10%"
        width="40%"
        height="auto"
        // border="1px solid red"
        paddingBottom="3rem"
      >
        <Image
          width="300px"
          height="300px"
          margin="auto"
          src="https://assets.interntheory.com/creative/chart.png"
          alt="img"
        />
      </Box>
      <Box
        height="auto"
        width="40%"
        // border="1px solid red"
        paddingBottom="3rem"
      >
        <Box margin="auto" marginTop="25%">
          <Heading as="h1" size="lg" borderBottom="1px solid #ddd">
            WE ARE CONSTANTLY
            <span style={{ color: " rgb(221, 31, 45)" }}> GROWING</span>
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
            We are on a mission to help every student in India. Upgrading your
            CV and getting you a meaningful job remains our sole motive and we
            are not stopping anytime soon.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default Constant;
