import {  Button, Heading, HStack, Image, Img, Input, Select, Stack, Text, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postProfile } from '../Redux/CompanyProfile/action';

function RegisterCompanyProfile() {

    const initialDetails = {
    company_logo : "",
    company_name : "",
    website : "",
    industry : "",
    about_comapny : "",
    address : "",
    city :  "",
    pincode : "",
    company_size : ""
      }
    
      const [profie, setProfile] = useState(initialDetails);
      const token = JSON.parse(localStorage.getItem("token"));
      const toast = useToast()
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profie, [name]: value })
      }
    
      const handleSubmit = () => {
        dispatch(postProfile({ profie, token })).then((res) => {
          if (res.payload){
            // console.log(res);
            toast({
              title: "Your Company info got Added",
              status: "success",
              duration: 2000,
              position: "top-right"
            });
            setTimeout(() => {
              navigate('/company/dashboard');
            }, 2000)
          }
        })
      }
      console.log(profie);

    return (
        <>
            <Stack boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" width={"60%"} margin={"auto"} p={10} marginTop={"5rem"} marginBottom={"5rem"} >
            <Heading as={"h1"} size={"lg"}>Last Step! Few Details About Your Company!</Heading>
            <Text>This is a one time procedure to establish the validity of your company.</Text>
            <form  >

                <HStack display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <Text width={"20%"} color={"gray"}>Company Logo</Text>
                    <Input 
                    name='company_logo'
                     onChange={handleInputChange}
                     type={"file"}
                     value={profie.company_logo} 
                       placeholder={"choose a logo for your company"}/>
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>Company Name *</Text>
                    <Input 
                    name='company_name'
                    onChange={handleInputChange}
                    value={profie.company_name}
                    width={"70%"} variant={"flushed"} type={"text"}  />
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>Website *</Text>
                    <Input
                    name='website'
                    onChange={handleInputChange}
                    value={profie.website}
                    placeholder='https://www.internhub.com' width={"70%"} variant={"flushed"} type={"url"}  />
                </HStack>
                
                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>Industry *</Text>
                    <Select
                    name='industry'
                    onChange={handleInputChange}
                    value={profie.industry}
                    width={"70%"}>
                        <option hidden>Select a Industry</option>
                        <option value="E-Commerce">E-Commerce</option>
                        <option value="Ed-Tech">Ed-Tech</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Cyber-Security">Cyber-Security</option>
                    </Select>
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>About Your Company *</Text>
                    < Textarea
                                      name='about_comapny'
                                      onChange={handleInputChange}
                                      value={profie.about_comapny}
                    width={"70%"} placeholder='Here is a sample placeholder to write About Your Company'  />
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>Address *</Text>
                    < Textarea 
                    name='address'
                    onChange={handleInputChange}
                    value={profie.address}
                    width={"70%"} placeholder='Here is a sample placeholder for Address'  />
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>City *</Text>
                    < Input 
                    name='city'
                    onChange={handleInputChange}
                    value={profie.city}
                    width={"70%"} variant={"flushed"} placeholder='write your city here' type={"text"}  />
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>Pincode *</Text>
                    < Input 
                    name='pincode'
                    onChange={handleInputChange}
                    value={profie.pincode}
                    width={"70%"} type={"number"} variant={"flushed"} placeholder='write your city here'  />
                </HStack>

                <HStack marginBottom={"1rem"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} >
                    <Text width={"20%"} color={"gray"}>Company Size *</Text>
                    <Select 
                     name='company_size'
                     onChange={handleInputChange}
                     value={profie.company_size}
                    variant={"flushed"} width={"70%"}>
                        <option hidden>Select a Range</option>
                        <option value="1">1</option>
                        <option value="1-10">1-10</option>
                        <option value="11-25">11-25</option>
                        <option value="25-50">25-50</option>
                        <option value="50-100">50-100</option>
                        <option value="500++">500++</option>
                    </Select>
                </HStack>
                <Button type={"submit"} margin={"auto"} onClick={handleSubmit} >Submit</Button>
            </form>
            </Stack>
        </>
    )
}

export default RegisterCompanyProfile