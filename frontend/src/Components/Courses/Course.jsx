import React from "react";
import data from "./db.json"
import "./Course.css"
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

const Course = ({ handleAddProduct }) => {
  console.log(data);
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
     
            p={["0", "1rem", "2rem", "1rem"]}
            pr={["2rem", 0, 0, 0]}
            pl={["2rem", 0, 0, 0]}
            src="https://assets.interntheory.com/creative/courses/listpage/Course-banner1.png"
            alt="Dan Abramov"
          />
        </Center>
      </Box>

      <Box >
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
                w="100%"
                h="140px"
                src={x.image}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Box
                  borderBottom="1px dashed grey"
                  w="98%"
                  margin="auto"
                  textAlign="left"
                  h="100px"
                  padding="0.5rem"
                >
                  <Heading as="h4" fontWeight="bold" mb="0.35rem" size="sm">
                    {x.heading}
                  </Heading>
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.54)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {x.sub_heading}
                  </p>
                </Box>
                <Box display="flex" flexDirection="row-reverse">
                  <Heading pr="1rem" as="h5" marginLeft="10px" fontSize="md">
                    {x.dis_price}
                  </Heading>
                  <p
                    style={{
                      color: "rgba(0, 0, 0, 0.54)",
                      lineHeight: "1.5",
                      fontWeight: "400",
                      letterSpacing: "0.01071em",
                      textDecoration: "line-through",
                      fontSize: "0.775rem",
                    }}
                  >
                    {x.price}
                  </p>
                </Box>

                <Box
                  textAlign="right"
                  fontWeight="bold"
                  color="rgb(255, 179, 38)"
                  fontSize="sm"
                  lineHeight="1.5"
                  letterSpacing="0.01071em"
                  paddingRight="1rem"
                >
                  <Text>Emi starting at ₹{x.emi}/month</Text>
                </Box>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Box
                display="flex"
                width="100%"
                paddingRight="2rem"
                justifyContent="flex-end"
              >
                <ButtonGroup spacing="2">
                  <Button
                    style={{ color: "#087CDD" }}
                    colorScheme="blue"
                    variant="ghost"
                    size="sm"
                    margin="0"
                  >
                    Know More
                  </Button>
                  <Button className="btn btn-awesome"
                    boxShadow="0px 1px 5px 0px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 3px 1px -2px rgb(0 0 0 / 12%);"
                    colorScheme="red"
                    size="sm"
                    verticalAlign="middle"
                    margin="0"
                    marginRight="-20px"
                    onClick={() => handleAddProduct(x)}
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </Box>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      <Box  bg="#df1e2e">
        <Text noOfLines={[6, 4, 2]} ml="auto" align="center">
          Use Coupon Code FIRSTCOURSE to avail a discount of 20% on your course
          enrolment. Offer expires in
        </Text>
      </Box>
    </div>
  );
};

export default Course;
