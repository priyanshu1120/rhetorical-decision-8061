import { Image } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'
import Intern from '../Components/Intern'

const InternShip = () => {
    return (
        <Flex w="80%" m="auto" justify="space-between" mt={5} flexDirection={{base:'column',sm:"column",md:"row",lg:'row'}}>
            <Box w="25%" bg='white'  >
                <Image objectFit='cover' display={{base:"none",md:"block",lg:"block"}} src='https://assets.interntheory.com/creative/Internship_left_course_add_01.png' alt="Internship Logo" />
            </Box>
            <Box w="73%" boxShadow='md' p='6' rounded='md' bg='white'>
                <Text fontSize="2xl" fontWeight="semibold" textAlign="left" >All Internships</Text>
                <Intern />
                <Intern />
                <Intern />
                <Intern />
                <Intern />
                <Intern />
                <Intern />
                <Intern />
                <Intern />
            </Box>
        </Flex>
    )
}

export default InternShip
