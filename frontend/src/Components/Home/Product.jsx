import React from "react";
import { Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        height: "auto",
        padding: "80px 0px 90px",
        // border: "1px solid red",
      }}
    >
      <Box margin="auto">
        <Heading as="h5" paddingBottom="20px">
          LET’S GET SOME
          <span style={{ color: " rgb(221, 31, 45)" }}> WORK EXPERIENCE</span>
        </Heading>
      </Box>

      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem
          width="300px"
          height="200px"
          //   margin="10px 10px 10px"
          marginBottom="10px"
        >
          <Link to="/marketing">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/Marketing-Icon.jpg"
              alt="marketing"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/bussiness">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/BD.jpg"
              alt="marketing"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/content">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/Content-Writing.jpg"
              alt="content"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/graphics">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/Graphic.jpg"
              alt="graphics"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/finance">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/Finance.jpg"
              alt="finance"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/human">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/HR.jpg"
              alt="human"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/engineering">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/Eng.jpg"
              alt="engineering"
            />
          </Link>
        </GridItem>
        <GridItem width="300px" height="200px">
          <Link to="/intern">
            <Image
              src="https://assets.interntheory.com/creative/home-internships/All-Internships.jpg"
              alt="all"
            />
          </Link>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Product;
