import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import React from "react";
import { Link } from "react-router-dom";
import StudentProfile from "../Components/StudentProfile";

const StudentDashboard = () => {
  return (
    <Box>
      <Box backgroundColor={"#df1e2e"} p={3}w="full">
        <Text color="white" fontWeight={600}>
          Please Click Here VERIFY EMAIL & Click Here to VERIFY NUMBER
        </Text>
      </Box>

      <Grid
        templateAreas={`"nav main"`}
        gridTemplateColumns={["0px 1fr", "1px 1fr", "1px 1fr", "400px 1fr"]}
        h="400px"
        gap={["1","1","4"]}
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <Box>
            <StudentProfile />
          </Box>
        </GridItem>
        <GridItem   area={"main"}>
          <Box w="full"  mr={10}>
            <VStack>
              <Box
                border="2px dashed red"
                w={[ "80%" ,"98%"]}
                align="left"
                mt="10px"
                bg="white"
                p={2}
                borderRadius={2}
                boxShadow="md"
              >
                <Text>
                  Still in college and want to start a business already? Become
                  our affiliate and kickstart your entrepreneurial journey.
                  Click here for details
                </Text>
              </Box>
            </VStack>

            <Box p={5} mt="16px"  w={[ "80%" ,"98%"]} boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" bg="white">
                  <Text align="left" fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize={20}>Recommended Courses</Text>
           
                <Box w="full"  overflow={"hidden"}>
                  <SimpleGrid spacing={[2,2,2,2]} columns={[1,2,2,3]}>
                    <Box border="1px solid green" borderRadius={5}>
                      <HStack spacing={[2,2,2,2]} p={2} >
                         <Image src="https://assets.interntheory.com/creative/courses/thumbnails/it.jpg" alt= "course" w="70px" h="70px" />
                         <Text fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize={[16,16,14,12]}>IT STARTER PACK (COURSE4)</Text>
                      </HStack>
                    </Box>
                    <Box border="1px solid green" borderRadius={5}>
                      <HStack spacing={[2,2,2,2]} p={2} >
                         <Image src="https://assets.interntheory.com/courses/banner/1573120159.png" alt= "course" w="70px" h="70px" />
                         <Text fontFamily="Roboto, Helvetica, Arial, sans-serif"fontSize={[16,16,14,12]}>OFFLINE STOCK MARKET COURSE</Text>
                      </HStack>
                    </Box>

                    <Box border="1px solid green" borderRadius={5}>
                      <HStack spacing={[2,2,2,2]} p={2} >
                         <Image src="https://assets.interntheory.com/creative/courses/thumbnails/r-programming-course.png" alt= "course" w="70px" h="70px" />
                         <Text fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize={[16,16,14,12]}>R PROGRAMMING COURSE</Text>
                      </HStack>
                    </Box>
                  </SimpleGrid>
                </Box>  

                <Text align="left" fontFamily="Roboto, Helvetica, Arial, sans-serif"mt="30px" fontSize={20}>Recommended internships</Text>
           
               <Box w="full" overflow={"hidden"}>
             <SimpleGrid spacing={[2,2,2,2]} columns={[1,2,2,3]}>
               <Box border="1px solid green" borderRadius={5}>
                 <HStack spacing={[8,8,8,2]} p={2} >
                    <Image src="https://assets.interntheory.com/uploads/company/logos/eab5f5e8e3caeb2ef8ae4dff8eb4e1de42044540.jpg" alt= "course" w="70px" h="70px" />
                    <Text fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize={[16,16,14,12]}>Client Server Executive</Text>
                 </HStack>
               </Box>
               <Box border="1px solid green" borderRadius={5}>
                 <HStack spacing={[8,8,8,2]} p={2} >
                    <Image src="https://assets.interntheory.com/uploads/company/companylogos/62362fbf882221470f099d8d0a119df93ce19831/7e34b7356b30b3696d14fcab94c6e8989a42fd69com.jpg" alt= "course" w="70px" h="70px" />
                    <Text fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize={[16,16,14,12]}>Human Resourses Internship</Text>
                 </HStack>
               </Box>

               <Box border="1px solid green" borderRadius={5}>
                 <HStack spacing={[8,8,8,2]} p={2} >
                    <Image src="https://assets.interntheory.com/uploads/company/logos/ce621fc8bc71e12c2356f869eb640cdee89ce235.jpg" alt= "course" w="70px" h="70px" />
                    <Text fontFamily="Roboto, Helvetica, Arial, sans-serif" fontSize={[16,16,14,12]}>Digital Market Internship</Text>
                 </HStack>
               </Box>
             </SimpleGrid>
               </Box>     
         </Box>  
            
          <Box  w={[ "80%" ,"98%"]} p={[10,10,12,12]} border="1px solid red" mt="50px"  boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" bg="white">
               <HStack spacing={[1,2,4,10]} >
               <Link to="#"><Text fontWeight={500}>MY APPLICATION</Text></Link>
               <Link to="#">  <Text fontWeight={500}>MY COURSES</Text></Link>
               </HStack>
               <Box w="96%" border="1px solid #999999" mt="20px"></Box>
               <HStack spacing={[1,2,4,5]} w="full"  justify={[ 'flex-start','flex-end']}>
             <Text fontWeight={500}>SORT BY</Text>
             <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Latest First
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Latest First</MenuItem>
                    <MenuItem>Oldest First</MenuItem>
                  </MenuList>
              </Menu>
              <Text>|</Text>
             <Text fontWeight={500}>SHOW</Text>
              
             <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                   All
                  </MenuButton>
                  <MenuList>
                    <MenuItem>All</MenuItem>
                    <MenuItem>Pending</MenuItem>
                    <MenuItem>Sortlist</MenuItem>
                    <MenuItem>Reject</MenuItem>
                    <MenuItem>Hired</MenuItem>
                    <MenuItem>Joined</MenuItem>
                  </MenuList>
              </Menu>
             

              </HStack>
           </Box>
        </Box>


        </GridItem>
      </Grid>
    </Box>
  );
};

export default StudentDashboard;
