import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  HStack,
  Stack,
  Select,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/StudentAuthReducer/action";

const regObj = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  password: "",
  city: "",
  preference: "",
  category: "",
  find: "",
};

const RegisterStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(regObj);
  const [run, setRun] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  var isError = input.firstname === "";
  const lastError = input.lastname === "";
  const emailError = input.email === "";
  const passwordError = input.password === "";
  const mobileError = input.mobile === "";
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ ...input })).then((res) => {
      console.log(res)
      if (!res.payload.msg) {
        toast({
          title: "Signup Successful.",
          description: "Login Please!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          localStorage.setItem("student",JSON.stringify(res.payload))
          navigate("/login/student");
        }, 2000);
      } else {
        toast({
          title: "Signup failed.",
          description: "Email Already Exit!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      console.log(res);
    });
  };

  return (
    <Box
      backgroundImage="url('https://assets.interntheory.com/creative/Web-Banner.jpg')"
      w="100vw"
      h="auto"
      pt="20px"
    >
      <Box
        w={["full", "600px"]}
        m="auto"
        p={[8, 10]}
        mt={[1, "1px"]}
        border={["none", "1px"]}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
        borderColor={["", "white"]}
        backgroundColor="white"
        borderRadius={10}
      >
        <VStack spacing={4} align="flex-start" w="full">
          <VStack spacing={1} align={["flex-start"]} w="full">
            <Heading
              fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
              fontSize={24}
            >
              Register Candidate
            </Heading>
            <Text>
              Already have an account?{" "}
              <Link to="/login/student" style={{ color: "blue" }}>
                Sign in
              </Link>
            </Text>
          </VStack>
        </VStack>
        <Box border={["1px"]} mt="15px" pl={2} borderRadius="8px">
          <Text textAlign={"left"} color="#80625d">
            If you are a company looking to hire interns, please register as a
            company by clicking{" "}
            <Link to="/company/register" style={{ color: "blue" }}>
              here
            </Link>
            .
          </Text>
        </Box>

        <HStack
          bg="#4267b2"
          w="full"
          cursor="pointer"
          h={[14, 14]}
          borderRadius={8}
          mt="50px"
          spacing={[3, 28]}
          pl={5}
          align="center"
        >
          <Box
            w="30px"
            h="30px"
            display={"flex"}
            borderRadius={3}
            justifyContent="center"
            alignItems={"center"}
            bg="white"
          >
            <BsFacebook style={{ fontSize: "25px", color: "#4267b2" }} />
          </Box>
          <Heading
            fontSize={[14, 16]}
            fontFamily="Roboto, Helvetica, Arial, sans-serif"
            color="white"
          >
            REGISTER WITH FACEBOOK
          </Heading>
        </HStack>

        <HStack
          bg="#087cdd"
          w="full"
          cursor="pointer"
          h={[14, 14]}
          borderRadius={8}
          mt="10px"
          spacing={[3, 28]}
          pl={5}
          align="center"
        >
          <Box
            w="30px"
            h="30px"
            display={"flex"}
            borderRadius={3}
            justifyContent="center"
            alignItems={"center"}
            bg="white"
          >
            <FcGoogle style={{ fontSize: "25px", color: "#4267b2" }} />
          </Box>
          <Heading
            fontSize={[14, 16]}
            fontFamily="Roboto, Helvetica, Arial, sans-serif"
            color="white"
          >
            REGISTER WITH GOOGLE
          </Heading>
        </HStack>

        <form onSubmit={handleSubmit}>
          <HStack mt={50}>
            <FormControl isInvalid={isError}>
              <Input
                type="text"
                value={input.firstname}
                onChange={handleInputChange}
                variant="flushed"
                placeholder="First Name*"
                name="firstname"
                fontSize={18}
                required
                
              />
              {!isError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>First Name is required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={lastError}>
              <Input
                type="text"
                value={input.lastname}
                onChange={handleInputChange}
                variant="flushed"
                placeholder="Last Name*"
                name="lastname"
                fontSize={18}
                required
              />
              {!lastError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>Last Name is required.</FormErrorMessage>
              )}
            </FormControl>
          </HStack>

          <FormControl>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={handleInputChange}
              placeholder="Email*"
              variant="flushed"
              fontSize={18}
            />
            {!emailError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={passwordError}>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Password*"
              fontSize={18}
            />
            {!passwordError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Password is required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={mobileError}>
            <Input
              type="text"
              value={input.mobile}
              name="mobile"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Mobile Number*"
              fontSize={18}
            />
            {!mobileError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>Mobile Number is required.</FormErrorMessage>
            )}
          </FormControl>

          <Stack spacing={4}>
            <Select
              variant="flushed"
              name="city"
              onChange={handleInputChange}
              value={input.city}
              placeholder="City*"
              color="#718096"
              fontSize={18}
            >
              <option value="Ahmednagar">Ahmednagar</option>
              <option value="Baranagar">Baranagar</option>
              <option value="Nagpur">Nagpur</option>
            </Select>

            <Select
              variant="flushed"
              name="preference"
              onChange={handleInputChange}
              value={input.preference}
              placeholder="Peferences*"
              color="#718096"
              fontSize={18}
            >
              <option value="Admin">Admin</option>
              <option value="Animation">Animation </option>
              <option value="App Design & Developement">
                App Design & Developement
              </option>
            </Select>

            <Select
              variant="flushed"
              name="find"
              onChange={handleInputChange}
              value={input.find}
              placeholder="How did you find us*"
              color="#718096"
              fontSize={18}
            >
              <option value="From a friend">From a friend</option>
              <option value="Google Search">Google Search</option>
              <option value="Google Ads">Google Ads</option>
              <option value="Bing/yahoo">Bing/yahoo</option>
              <option value="Social media">Social media</option>
              <option value="other">other</option>
            </Select>

            <Select
              variant="flushed"
              name="category"
              value={input.category}
              onChange={handleInputChange}
              placeholder="What are you Looking for*"
              color="#718096"
              fontSize={18}
            >
              <option value="Internships">Internships</option>
              <option value="Jobs">Jobs</option>
              <option value="Both">Both</option>
            </Select>
          </Stack>

          <Input
            type="submit"
            variant="outline"
            borderColor="gray.300"
            value="Next"
            cursor="pointer"
            mt="50px"
          />
        </form>
      </Box>
    </Box>
  );
};

export default RegisterStudent;
