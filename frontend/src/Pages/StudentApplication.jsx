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
  Heading,
} from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import React, { useEffect } from "react";
import {TbCameraPlus} from "react-icons/tb"
import {MdEdit} from "react-icons/md"
import { Link } from "react-router-dom";
import StudentProfile from "../Components/StudentProfile";
import {MdAddCircle} from "react-icons/md"

import StudentEducation from "../Components/StudentEducation";
import StudentExperience from "../Components/StudentExperience";
import AddModalEducation from "../Components/AddModalEducation";
import AddExperienceModal from "../Components/AddExperienceModal";
import EditAddress from "../Components/EditAddress";
import EditPersonalStudent from "../Components/EditPersonalStudent";
import Footer from "../Components/Courses/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/StudentAuthReducer/action";

const StudentApplication = () => {
  const student = JSON.parse(localStorage.getItem("student"))
  var data = student[0]
  const dispatch = useDispatch()
  const user = useSelector((store)=>store.StudentAuthReducer)
 const userdata = user.data
 const newdata = userdata[0]
console.log(newdata)

useEffect(()=>{
  dispatch(getUser(data._id))
},[])


    return (
        <Box mb={15}>
          <Box backgroundColor={"#df1e2e"} p={3}w="full">
            <Text color="white" fontWeight={600}>
              Please Click Here VERIFY EMAIL & Click Here to VERIFY NUMBER
            </Text>
          </Box>
       
          <Grid
            templateAreas={`"nav main"`}
            gridTemplateColumns={["0px 1fr", "1px 1fr", "1px 1fr", "400px 1fr"]}
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
              <Box w="full"  boxShadow={"sm"} mt="10px" >
               <HStack w="full"  p={10} justify="space-between" flexDirection={["column" , "row"]}>
                <HStack w={[ "100%","100%","60%"]}  spacing={[4,8]} flexDirection={["column","column","row"]}>
                       <Box position="relative"  border="1px solid">
                        <Image src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg" alt="" w="120px" h="120px" />
                         <Box position="absolute" w="40%" h="40%" display="flex" fontSize={24} color="white" justifyContent="center" alignItems="center" top="80px" left="80px" borderRadius="50%" bg="#df1e2e"><TbCameraPlus/></Box>
                       </Box>
                       <Box w={[ "100%","100%","70%"]} h="120px" align={["center","left"]}>
                           <Text align={["center","center","left"]} ml="20px" fontSize={18}>{newdata?.firstname} {newdata?.lastname}</Text>
                          <Box mt={[ "10px","25px"]} >
                            <Button   colorScheme={"messenger"} fontSize={[10,14,14,16]} pb="8px" size="sm">View Resume </Button>
                            <Button ml="10px" fontSize={[10,14,14,16]} variant="unstyled" size="sm" pl={2} pr={2}  border="1px solid red">Download Resume</Button>
                          </Box>
                       </Box>
                </HStack>

                <HStack>
                       <Button  variant="unstyled" fontSize={16} border="1px solid blue" size="sm" pl={2} pr={2} color="blue">Change Password</Button>
                 </HStack>
               </HStack>
                    
               <Box ml={10}  border="2px dashed #e0e0e0" w="90%"></Box>
               <HStack w="90%" ml={10} mt={6} fontSize={24} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  justify={"space-between"}>
                 <Text>Personal Details</Text> 
            
                 <Box w="40px" h="40px" borderRadius={"50%"} display="flex" alignItems={"center"} justifyContent="center" bg="#087cdd" color="white"><EditPersonalStudent  /></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"} flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>
                   Name
                 </Heading>
                 <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.firstname} {newdata?.lastname}</Text></Box>
               </HStack>
              
               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Gender</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.gender}</Text></Box>
               </HStack>
                
               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Dob</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.dob}</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Languages</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.langauge}</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Hobbies</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.hobbies}</Text></Box>
               </HStack>


               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Achievements</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>Team Leader</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Skills</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.skill}</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Preference</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.preference}</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>About</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.about}</Text></Box>
               </HStack>

             
               <Box ml={10} mt="20px" border="2px dashed #e0e0e0" w="90%"></Box>
               <HStack w="90%" ml={10} mt={6} fontSize={24} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  justify={"space-between"}>
                 <Text>Contact Details</Text> 
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"} flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>
               Email ID
                 </Heading>
                 <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.email}</Text></Box>
               </HStack>
              
               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>mobile</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.mobile}</Text></Box>
               </HStack>
                
               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Facebook Account</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>1998-06-12</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Google Account</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.account}</Text></Box>
               </HStack>




               <Box ml={10} mt="20px" border="2px dashed #e0e0e0" w="90%"></Box>
               <HStack w="90%" ml={10} mt={6} fontSize={24} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  justify={"space-between"}>
                 <Text>Address Details</Text> 
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"} flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>
               Address
                 </Heading>
                 <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.city}</Text></Box>
               </HStack>
              
               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>City</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.city}</Text></Box>
               </HStack>
                
               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>State</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.state}</Text></Box>
               </HStack>

               <HStack w={["80%","30%"]} ml={10} mt={2} fontSize={14} fontWeight={400} fontFamily={"Roboto, Helvetica, Arial, sans-serif"}  flexDirection={["column","row"]} justify={"space-between"}>
               <Heading as='h4' size='sm'>Pincode</Heading>
               <Box w={["70%","45%"]} align={["center","left"]}><Text>{newdata?.pincode}</Text></Box>
               </HStack>
            
               <Box ml={10}  mt="20px" border="2px dashed #e0e0e0" w="90%"></Box>

            <SimpleGrid columns={[1,1,2]} w="90%" mt="30px" ml={10} border="none">
                <Box  borderRight ="1px solid green" p={[2]}>
                   <HStack w={["98%","98%","90%"]} justify="space-between"  >
                   <Heading as='h1' fontWeight={[400]} fontSize={[24]}>Education Detail</Heading>
                      <HStack w="40px" h="40px" borderRadius={"50%"} display="flex" justifyContent={"center"} alignItem="center" bg="#087cdd" color="white" fontSize={24}><AddModalEducation /></HStack>
                   </HStack>
                   
                   <StudentEducation/>
                </Box>
                <Box  borderLeft="1px solid green" p={[2]} pl={[2,2,8]}>
                <HStack w={["98%","98%","98%"]} justify="space-between"  >
                   <Heading as='h1' fontWeight={[400]} fontSize={[24]}>Experience Detail</Heading>
                      <HStack w="40px" h="40px" borderRadius={"50%"} display="flex" justifyContent={"center"} alignItem="center" bg="#087cdd" color="white" fontSize={24}><AddExperienceModal /></HStack>
                   </HStack>
                   <StudentExperience/>
                </Box>
            </SimpleGrid>

            </Box>
            </GridItem>
          </Grid>
        
        </Box>
      );
}

export default StudentApplication