
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import { BsShareFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Intern = ({_id, company_logo, internship_title, internship_type, internship_category, address, about_comapny }) => {
  
    return (
        <Box borderBottom="2px" borderBottomStyle="dashed" borderColor={"lightgray"} p="30px 0px">
            <Flex justify="space-between" p="5px 25px 5px 25px" flexDirection={{ base: 'column', sm: "column", md: "column", lg: 'row' }}>
                <Flex gap={5} flexDirection={{ base: 'column', sm: "column", md: "column", lg: 'row' }}>
                    <Box>
                        <Image
                            boxSize={{ base: '40px', sm: "60px", md: "100px", lg: '100px' }}
                            objectFit='cover'
                            src={company_logo}
                            alt='flado' />
                    </Box>
                    <Box textAlign="left">
                        <Text fontSize={{ base: "md", sm: "md", md: "xl", lg: "2xl" }} >{internship_title}</Text>
                        <Box lineHeight="18px" fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }} >
                            {/* <Text>{about_comapny}</Text> */}
                            <Text>Type:{internship_type}</Text>
                            <Text>Category: {internship_category}</Text>
                            <Text>Address: {address}</Text>
                            <Text>Stipend: Check for more</Text>
                        </Box>
                    </Box>
                </Flex>
                <Flex flexDirection={{ base: 'row', sm: "row", md: "row", lg: "column" }} justify="space-between" alignItems="center" >
                    <Text fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>3 weeks left</Text>
                    <Box _hover={{ backgroundColor: "lightgray" }} padding="10px" borderRadius='full'> <BsShareFill size="25px" /></Box>
                    <Text color="blue.400" fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}><Link to={`/internship/${_id}`}> VIEW AND APPLY</Link></Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Intern
