import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Text,
  HStack,
  SimpleGrid,
  Heading,
} from "@chakra-ui/layout";
import {MdDelete,MdModeEdit} from "react-icons/md"
import EditModalEducation from './EditModalEducation';
import { deleteEducation, getEducation } from '../Redux/StudentReducer/action';
import { useToast } from '@chakra-ui/react';


const StudentEducation = () => {
  const {Educationdata,isLoading,isError} = useSelector((store)=>store.StudentReducer)
  const token = JSON.parse(localStorage.getItem("token"))
  const dispatch = useDispatch()
  const toast = useToast()


  useEffect(()=>{
    dispatch(getEducation(token))
  },[]) 

  const handleDelete = (id)=>{
    dispatch(deleteEducation({id,token})).then((res)=>{
      if(res.payload){
        toast({
          title: "Education deleted Successful.",
          status: "success",
          duration: 2000,
          isClosable: true,
          position:"top"
        });
        setTimeout(() => {
        }, 2000);
      }
      dispatch(getEducation(token))
   })
  }
 
 


  return (
<>
{
    Educationdata.length>0 && Educationdata.map((education,index)=>
    <SimpleGrid key={education._id} w="90%" mt="40px" columns={[1,1,1]} spacing={[5,5,5]} p={[2,2]} borderTop="1px solid red" borderBottom={"1px solid black"}>
      <HStack w={["100%" ]} justify={["space-between"]} align={["center"]} >
      <Heading as ="h2" fontSize={[24]} fontWeight={[500]} fontFamily={"sans-serif"}>{education.graduation}</Heading>
      <Text>{education.status}</Text>
      </HStack>  
     <HStack  w={["100%" ]} justify={["space-between"]} align={["center"]}>
     <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"}>{education.college}</Text></Box>
      
       <MdDelete onClick={()=>handleDelete(education._id)} style={{color:"#087cdd" , fontSize:"24px", cursor:"pointer"}}/>
      
      </HStack>  
      <HStack  w={["100%" ]} justify={["space-between"]} align={["center"]}>
     <Box w={["70%","60%","50%"]} align={["left"]}><Text fontSize={[18]} fontWeight={[500]} fontFamily={"sans-serif"} align="left">{education.year}</Text></Box>
     
     <EditModalEducation data = {Educationdata[index]} />
    
     </HStack> 
    </SimpleGrid>
    )
   } 
  </>
    
  )
}

export default StudentEducation
