import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Text,
  HStack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/layout";
import { useToast } from '@chakra-ui/react';
import {MdDelete,MdModeEdit} from "react-icons/md"
import EditExperienceModal from './EditExperienceModal';
import { deleteExperience, getExperience } from '../Redux/StudentReducer/action';



const StudentExperience = () => {

  const {Experiencedata,isLoading,isError} = useSelector((store)=>store.StudentReducer)
  const token = JSON.parse(localStorage.getItem("token"))
  const dispatch = useDispatch()
  const toast = useToast()
  useEffect(()=>{
    dispatch(getExperience(token))
  },[]) 

  const handleDelete = (id)=>{
    dispatch(deleteExperience({id,token})).then((res)=>{
      if(res.payload){
        toast({
          title: "Experience deleted Successful.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:"top"
        });
        setTimeout(() => {
        }, 2000);
      }
      dispatch(getExperience(token))
   })
  }
 

  return (
    <>
  {
     
     Experiencedata.length>0 && Experiencedata.map((experience,index)=>
    <SimpleGrid key={experience._id} w="90%" mt="40px" columns={[1,1,1]} spacing={[5,5,5]} p={[2,2]} borderTop="1px solid red" borderBottom={"1px solid black"}>

    <HStack w={["100%" ]} justify={["space-between"]} align={["center"]} >
        <Heading as ="h2" fontSize={[24]} fontWeight={[500]} fontFamily={"sans-serif"}>{experience.experiencetype}</Heading>
        <Text color="red">Pendng</Text>
     </HStack>  
    <HStack  w={["100%" ]} justify={["space-between"]} align={["center"]}>
    <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"}>{experience.jobtitle}</Text></Box>
     
     <MdDelete onClick={()=>handleDelete(experience._id)} style={{color:"#087cdd" , fontSize:"24px"}}/>

     </HStack> 
     <HStack w={["100%" ]} justify={["space-between"]} align={["center"]} >
     <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"}>{experience.responsibility}</Text></Box>
     </HStack> 
    
     <HStack  w={["100%" ]} justify={["space-between"]} align={["center"]}>
     <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"} align="left">{experience.duration}</Text></Box>
     
     <EditExperienceModal data = {Experiencedata[index]}/>

     </HStack> 
   </SimpleGrid>
     )
}
   </>
  )
}

export default StudentExperience
