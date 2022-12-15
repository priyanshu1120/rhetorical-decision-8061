import { Box, Button, Text,Input, useToast, VStack, HStack} from '@chakra-ui/react';
import{Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import React from 'react';
import { useState } from 'react';
import {register} from "../Redux/CompanyAuth/action";

function CompanyRegisterForm() {

  const initState = {firstname :"",lastname: "",mob_number:"",company_name:"", email: "", password: ""}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form,setForm] = useState(initState);
  
  const handleInputChange = (e) =>{
    const { name , value } = e.target;
    setForm({...form , [name]:value});
  }
  
  const toast = useToast();
  const handleSubmit = (e) =>{

    e.preventDefault();

    dispatch(register({ ...form})).then((res)=>{
      if(!res.payload.msg){
        toast({
          title: "Signup Successful.",
          description: "Login Please!",
          status: "success",
          duration: 2000,
          isClosable: true
        });
        setTimeout(() => {
          navigate("/company/login");
        }, 2000);
      } else{
        toast({
          title: "Signup failed.",
          description: "Email Already Exit!",
          status: "error",
          duration: 2000,
          isClosable: true
        })
      }
      console.log(res)
    });
  };
  console.log(form);

  return (
    <>
        <Box
          width={"45%"}
          bgColor={"white"}
          padding={"1.5rem 1.5rem 1.5rem 1.5rem"}
          borderRadius={"md"}
        >
          <Text fontWeight={"medium"} display={"flex"}>
            Start Hiring Interns
          </Text>
          <Box display={"flex"}>
            <Text marginTop={"0.5rem"} fontWeight={"normal"} color={"gray"}>
              Already have an account?
            </Text>
            <Link to={"/company/login"}>Sign in</Link>
          </Box>
          <Box>
            <Text
            marginTop={"0.5rem"}
              textAlign={"left"}
              border={"1px dotted red"}
              borderRadius={"0.2rem"}
              padding={"0.2rem 0.2rem 0.2rem 0.2rem"}
              backgroundColor={"red.100"}
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
            marginTop={"0.5rem"}
          >
            Register with Linkdin
          </Button>

          <Text marginTop={"0.5rem"} fontSize={"14px"} color={"gray"}>
            OR
          </Text>

          {/* form is starting from here */}

          <form onSubmit={handleSubmit} display={"flex"} flexDirection={"column"}>
            <HStack>
              <Input
              
                variant="flushed"
                placeholder="First Name"
                // width={"49%"}
                type={"text"}
                value={form.firstname}
                name="firstname"
                onChange= {handleInputChange}
              />
              
              <Input
              
                variant="flushed"
                placeholder="Last Name"
                // width={"49%"}
                type={"text"}
                value={form.lastname}
                name="lastname"
                onChange= {handleInputChange}
                />
                
            </HStack>
            <VStack>
              <Input
              
                variant="flushed"
                placeholder="Company Name *"
                type={"text"}
                value={form.company_name}
                name="company_name"
                onChange= {handleInputChange}
              />
              <Input
              
                variant="flushed"
                placeholder="Mobile Number*"
                type={"number"}
                value={form.mob_number}
                name="mob_number"
                onChange= {handleInputChange}
              />
              <Input
              
                variant="flushed"
                placeholder="Email *"
                type={"email"}
                value={form.email}
                name="email"
                onChange= {handleInputChange}
              />
              <Input
                variant="flushed"
                placeholder="Password *"
                type={"text"}
                value={form.password}
                name="password"
                onChange= {handleInputChange}
                
                />
            </VStack>
             <Input 
             type={"submit"} value={"Register Now!"} cursor="pointer" marginTop={"1rem"} />
          </form>
        </Box>
    </>
  )
}

export default CompanyRegisterForm;
