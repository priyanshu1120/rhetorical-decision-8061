
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
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { login, signup } from "../Redux/StudentAuthReducer/action";
const loginObj = {
  email: "",
  password: "",

};
const LoginStudent = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState(loginObj);
const toast = useToast()
const emailError = input.email === "";
const passwordError = input.password === "";
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(input)).then((res) => {
      if (res.payload!==undefined) {
        toast({
          title: "Login Successful.",
          description: "Welcome to Dashboard!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          localStorage.setItem("token",JSON.stringify(` Barer ${res.payload}`))
          navigate("/student/dashboard");
        }, 2000);
      } else {
        toast({
          title: "Login failed.",
          description: "Wrong Credential!",
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
    pt="1px"
  >
    <Box
      w={["full", "500px"]}
      m="auto"
      p={[8, 10]}
      mt={[20, "10vh"]}
      border={["none", "1px"]}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      borderColor={["", "white"]}
      backgroundColor="white"
      borderRadius={10}
    >
      <HStack w='full' justify='space-around'>
        <Text fontWeight={600}>STUDENT</Text>
        <Text fontWeight={600}>COMPANY</Text>

      </HStack>
      <VStack spacing={4} align="flex-start" w="full"  mt="10px">
        <VStack spacing={1} align={["flex-start"]} w="full">
          <Heading
            fontFamily={"Roboto, Helvetica, Arial, sans-serif"}
            fontSize={24}
          >
           Login
          </Heading>
        </VStack>
      </VStack>
      <Box border={["1px"]} mt="15px" pl={2} borderRadius="8px">
        <Text textAlign={"left"} color="#80625d">
          If you are a company looking to hire interns, please login as a
          company by clicking{" "}
          <Link to="#" style={{ color: "blue" }}>
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
        mt="20px"
        spacing={[3, 16]}
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
        spacing={[3, 16]}
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
     
        <FormControl isInvalid={emailError} mt="30px">
          <Input
            type="email"
            value={input.email}
            name="email"
            onChange={handleInputChange}
            placeholder="Email*"
            variant="flushed"
            fontSize={18}
            isRequired
          />
          {!emailError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage>required.</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={passwordError} mt="20px" >
          <Input
            type="password"
            value={input.password}
            name="password"
            onChange={handleInputChange}
            variant="flushed"
            placeholder="Password*"
            fontSize={18}
            isRequired
          />
          {!passwordError ? (
            <FormHelperText></FormHelperText>
          ) : (
            <FormErrorMessage>required.</FormErrorMessage>
          )}
        </FormControl>

        <HStack w="full" justify="space-between" mt="20px">
           <Checkbox  fontSize={18}> Reminder Me.</Checkbox>
           <Button variant='link' colorScheme='blue' fontSize={18}>Forgot Password ?</Button>
      </HStack>
          <Text mt={5}>Don't have an account? <Link style={{color:"blue"}}>Create your Account</Link></Text>
        <Input
          type="submit"
          variant="outline"
          borderColor="gray.300"
          value="Login"
          cursor="pointer"
          mt="20px"
        />
      </form>
    </Box>
  </Box>
  )
}

export default LoginStudent