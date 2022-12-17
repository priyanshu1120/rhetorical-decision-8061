import React from 'react'
import {
  Box,
  Text,
  HStack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/layout";
import {MdDelete,MdModeEdit} from "react-icons/md"
import EditModalEducation from './EditModalEducation';
const StudentEducation = () => {
  return (
    <SimpleGrid w="90%" mt="40px" columns={[1,1,1]} spacing={[5,5,5]} p={[2,2]} borderTop="1px solid red" borderBottom={"1px solid black"}>

     <HStack w={["100%" ]} justify={["space-between"]} align={["center"]} >
         <Heading as ="h2" fontSize={[24]} fontWeight={[500]} fontFamily={"sans-serif"}>Degree</Heading>
         <Text>Status</Text>
      </HStack>  
     <HStack  w={["100%" ]} justify={["space-between"]} align={["center"]}>
     <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"}>College</Text></Box>
      <MdDelete style={{color:"#087cdd" , fontSize:"24px"}}/>
      </HStack>  
      <HStack  w={["100%" ]} justify={["space-between"]} align={["center"]}>
     <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"} align="left">Year</Text></Box>
     <EditModalEducation/>
     </HStack> 
    </SimpleGrid>
  )
}

export default StudentEducation
