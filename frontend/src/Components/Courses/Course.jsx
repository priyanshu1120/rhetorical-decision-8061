import React from "react";
import data from "./db.json"
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";


const Course = () => {
  // console.log(data,"course")
  //   console.log(handleAddProduct)
  return (
    <div>
      <Box
        backgroundImage="url('https://assets.interntheory.com/creative/courses/listpage/Course-bannerbg.jpg')"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Center>
          <Image
            width={[
              "1200px", // 0-30em
              "700px", // 30em-48em
              "900px", // 48em-62em
              "1200px", // 62em+
            ]}
            border="1px solid red"
            p={["0", "1rem", "2rem", "1rem"]}
            pr={["2rem", 0, 0, 0]}
            pl={["2rem", 0, 0, 0]}
            src="https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png"
            alt="Dan Abramov"
          />
        </Center>
      </Box>

      <Box border="1px solid red">
        <Text ml={["2rem", "2rem", "1rem", "10rem"]} align="left">
          Certified Online Courses
        </Text>
        <Text
          noOfLines={[6, 4, 2]}
          ml={["2rem", "2rem", "1rem", "10rem"]}
          align="left"
        >
          Upgrade your skills with Intern Theory's online learning platform.
          Enrol for any certified online courses and get a step ahead of
          competition. Select from a range of skill based online courses
        </Text>
      </Box>

      <SimpleGrid spacing={4} columns={[1, 2, 4]} m={[10, 50, 10, 50]}>
        {data.map((x) => (
          <Card maxW="sm">
            <CardBody>
              <Image
                src={x.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{x.heading}</Heading>
                <Text>{x.sub_heading}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {x.dis_price}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  {x.price}
                </Text>
                <Text color="blue.600" fontSize="2xl">
                  Emi starting at ₹{x.emi}/month
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="blue">
                  Know More
                </Button>
                <Button
                  color="white"
                  bg="#df1e2e"
                >
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <Box border="1px solid red" bg="#df1e2e">
        <Text noOfLines={[6, 4, 2]} ml="auto" align="center">
          Use Coupon Code FIRSTCOURSE to avail a discount of 20% on your course
          enrolment. Offer expires in
        </Text>
      </Box>
    </div>
  );
};

export default Course;
