
import { Box, Flex, Image, Text, SkeletonCircle, SkeletonText, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const SingleInternship = () => {
    const { id } = useParams();
    const toast = useToast()

    const [data, setData] = useState()

    useEffect(() => {
        axios.get("https://intern-hub-api.up.railway.app/profile-details")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
 
    const res = data?.find((e) => e._id === id ? e : "");
    
    return (
        <>
            <Flex w="80%" m="auto" justify="space-between" mt={5} flexDirection={{ base: 'column', sm: "column", md: "row", lg: 'row' }}>
                <Box w="25%" bg='white'  >
                    <Image objectFit='cover' display={{ base: "none", md: "block", lg: "block" }} src='https:assets.interntheory.com/creative/Internship_left_course_add_01.png' alt="Internship Logo" />
                </Box>
                { res ?
                    <Box w="73%" boxShadow='md' p='6' rounded='md' bg='white'>
                        <Flex gap={5} borderBottom="2px" borderBottomStyle="dashed" borderColor={"lightgray"}>
                            <Box>
                                <Image
                                    boxSize={{ base: '40px', sm: "60px", md: "100px", lg: '100px' }}
                                    objectFit='cover'
                                    src={res.company_logo}
                                    alt='flado' />
                            </Box>
                            <Box textAlign="left">
                                <Text>Opening: 25</Text>
                                <Text>Duration: 3 Months</Text>
                                <Text>Start Date: 5 jan 2023</Text>
                                <Text>Application Deadline: 1 jan 2023</Text>
                                <Text>Stipend: 15000 per Month</Text>
                                <Text>Perks: NA</Text>
                            </Box>

                        </Flex>
                        <Box textAlign="left">
                            <Text fontSize={{ base: "md", sm: "md", md: "xl", lg: "2xl" }} >{res.website}</Text>
                            <Box lineHeight="18px" fontSize={{ base: "sm", sm: "sm", md: "md", lg: "md" }}>
                                <Text>{res.company_name}</Text>
                                <Text>{res.about_comapny}</Text>
                                <Text>{res.industry}</Text>
                                <Text>{res.address}</Text>
                                <Text>{res.city}</Text>
                                <Text>{res.pincode}</Text>
                                <Text>Stipend: {res.company_size}</Text>
                            </Box>
                        </Box>

                        <Flex justifyContent="flex-end" gap={5} alignItems="center">
                            <Link to="/internship"><Text fontWeight="bold" color="blue.400">Back To InternShips</Text></Link>
                            <Button
                                onClick={() =>
                                    toast({
                                        title: 'Applied.',
                                        description: "Intership is Apply successfully.",
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                        position: 'top'
                                    })
                                }
                                colorScheme='red' >APPLY</Button>
                        </Flex>
                    </Box>
                    :
                    <Box w="73%" padding='6' boxShadow='lg' bg='white' h="100vh">
                        <SkeletonCircle size='10' />
                        <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='10' />
                    </Box>
                }

            </Flex>

        </>
    )
}

export default SingleInternship
