
import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import { BsShareFill } from "react-icons/bs";

const Intern = () => {
    return (
        <Box borderBottom="2px" borderBottomStyle="dashed" borderColor={"lightgray"} p="30px 0px">
            <Flex  justify="space-between" p="5px 25px 5px 25px" flexDirection={{base:'column',sm:"column",md:"column" ,lg:'row'}}>
                <Flex gap={5} flexDirection={{base:'column',sm:"column",md:"column",lg:'row'}}>
                    <Box>
                        <Image
                            boxSize={{base:'40px',sm:"60px",md:"100px",lg:'100px'}}
                            objectFit='cover'
                            src='https://assets.interntheory.com/uploads/company/logos/348ebc3e1dc80c206c4ac8af46f90db576813b9d.jpg'
                            alt='flado' />
                    </Box>
                    <Box textAlign="left">
                        <Text fontSize={{base:"md",sm:"md", md:"xl",lg:"2xl"}} >Digital Marketing Analyst</Text>
                        <Box lineHeight="18px" fontSize={{base:"sm",sm:"sm", md:"md",lg:"md"}}>
                            <Text>Fando Network</Text>
                            <Text>Full Time Internship</Text>
                            <Text>Digital Marketing</Text>
                            <Text>Bangalore</Text>
                            <Text>Stipend: 15000 per month</Text>
                        </Box>
                    </Box>
                </Flex>
                <Flex flexDirection={{base:'row',sm:"row",md:"row",lg:"column"}} justify="space-between" alignItems="center" >
                    <Text fontSize={{base:"sm",sm:"sm", md:"md",lg:"md"}}>3 weeks left</Text>
                    <Box _hover={{ backgroundColor: "lightgray" }} padding="10px" borderRadius='full'> <BsShareFill size="25px" /></Box>
                    <Text color="blue.400" fontSize={{base:"sm",sm:"sm", md:"md",lg:"md"}}>VIEW AND APPLY</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Intern
