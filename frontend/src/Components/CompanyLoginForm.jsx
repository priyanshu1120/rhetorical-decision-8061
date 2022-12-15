import React from 'react'
import { Box, Button, Checkbox, HStack, Input, Text, useToast } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import { login } from '../Redux/CompanyAuth/action';

function CompanyLoginForm() {

  const initialState = { email: "", password: "" };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form)).then((res) => {
      if (res.payload !== undefined) {
        toast({
          title: "Login Successful.",
          description: "Welcome to Dashboard!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        setTimeout(() => {
          localStorage.setItem("token", JSON.stringify(` Bearer ${res.payload}`))
          navigate("/company/dashboard");
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
    <>
      <Box
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        bgColor={"white"}
        padding={"1.5rem 1.5rem 1.5rem 1.5rem"}
        borderRadius={"md"}
        margin={"auto"}
        marginTop={"2rem"}
        width={"30%"}
      >
        <Text fontWeight={"medium"} display={"flex"} marginBottom={"0.5rem"}>
          Login as Company
        </Text>
        {/* <Box display={"flex"}>
            <Link to={"/company/login"}>Sign in</Link>
          </Box> */}
        <Box>
          <Text
            textAlign={"left"}
            border={"1px dotted red"}
            borderRadius={"0.2rem"}
            padding={"0.2rem 0.2rem 0.2rem 0.2rem"}
            backgroundColor={"red.100"}
            marginBottom={"0.5rem"}
          >
            If you are a student looking for internships, please register as a
            student by clicking .<Link to={"/students"}>here</Link>{" "}
          </Text>
        </Box>
        <Button
          width={"100%"}
          backgroundColor={"#087cdd"}
          color={"white"}
          margin={"auto"}
          marginBottom={"0.5rem"}
        >
          Register with Linkdin
        </Button>
        <Text fontSize={"14px"} color={"gray"}>
          OR
        </Text>

        <form onSubmit={handleSubmit} display={"flex"} flexDirection={"column"} >

          <Box >

            <Input
              variant="flushed"
              placeholder="Email *"
              type={"email"}
              marginBottom={"0.5rem"}
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            <Input
              variant="flushed"
              placeholder="Password *"
              type={"text"}
              marginBottom={"0.5rem"}
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />
          </Box>

          <HStack display={"flex"} justifyContent={"space-between"} marginTop={"0.5rem"} alignContent={"center"}>
            <Checkbox >Remember Me</Checkbox>
            <Link to={"#"} >Forgot Password?</Link>
          </HStack>

          <Text marginTop={"0.5rem"}>Don't have an account? <Link to={"/company/register"}>Create your account</Link></Text>

          <Input type={"submit"} value={"Proceed to Posting Internship"} marginTop={"0.5rem"} cursor="pointer" />

        </form>
      </Box>
    </>
  )
}

export default CompanyLoginForm