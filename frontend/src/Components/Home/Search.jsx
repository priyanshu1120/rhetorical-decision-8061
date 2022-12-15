import {
  Box,
  Button,
  color,
  Heading,
  HStack,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";

const Search = () => {
  const basicBoxStyles = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    webkitBoxPack: "center",
    justifyContent: "center",
    boxSize: "500px",
    minHeight: "60vh",
    webkitBoxAlign: "center",
    alignItems: "center",
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",

    // position: "absolute",
    // opacity: "0.6",
    height: "100%",
    width: "100%",
    background:
      "url(https://assets.interntheory.com/creative/Homepage-Banner.png) center center/cover",
    backgroundColor: "rgb(68, 100, 120)",
  };
  return (
    <Box sx={basicBoxStyles}>
      <Box>
        <Box
          bgColor="gray"
          opacity="50%"
          width="310px"
          height="auto"
          //   border="1px solid red"
          margin="auto"
        >
          <Heading color="#fff" fontWeight="100" as="h5" padding="0 5px 0 5px">
            Let’s Get You
            <span style={{ padding: "0 5px 0 5px", backgroundColor: "red" }}>
              Ready
            </span>
          </Heading>
        </Box>

        <Box>
          <p
            style={{
              display: "flex",
              color: "#fff",
              fontWeight: 100,
              fontSize: "1.5rem",
            }}
          >
            The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An
            Internship. Get Placed
          </p>
        </Box>
      </Box>
      <Box
        width="80%"
        height="100px"
        backgroundColor="rgba(255, 255, 255, 0.77)"
        // opacity="50%"
        padding="20px 30px"
        position="sticky"
        borderRadius="9px"
        marginTop="27px"
        textAlign="center"
        display="block"
        boxSizing="inherit"
      >
        <HStack>
          <Select
            variant="flushed"
            focusBorderColor="gray.500"
            placeholder="Cities..."
            width="90%"
          >
            <option value="chennai">Chennai</option>
          </Select>
          <Select
            variant="flushed"
            focusBorderColor="gray.500"
            placeholder="Type..."
            width="90%"
          >
            <option value="fullTime">Full Time</option>
          </Select>
          <Select
            variant="flushed"
            focusBorderColor="gray.500"
            placeholder="Preferences..."
            width="90%"
          >
            <option value="admin">Admin</option>
          </Select>
          <p
            style={{
              textAlign: "center",
              color: "#3C4858",
              fontSize: "0.875rem",
              fontWeight: 400,
              lineheight: 1.5,
              letterSpacing: "0.01071em",
            }}
          >
            OR
          </p>
          <Box
            width="100%"
            padding="9px"
            backgroundColor="white"
            borderRadius="4px"
            maxWidth="83.333333%"
            flexBasis="83.333333%"
            // border="1px solid red"
            height="50px"
            display="flex"
          >
            <Input variant="flushed" placeholder="Search" />
            <Button width="50%" colorScheme="red" size="sm">
              Search
            </Button>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Search;
