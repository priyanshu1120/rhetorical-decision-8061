import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Text,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {MdModeEdit} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getExperience, updateExperience } from '../Redux/StudentReducer/action'




const EditExperienceModal = (data) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    var expdata = data
    var id = expdata.data._id
    const [input, setInput] = useState( {
      experiencetype: expdata.data.experiencetype,
      jobtitle: expdata.data.jobtitle,
      responsibility: expdata.data.responsibility,
      duration:expdata.data.duration,
    });

    const token = JSON.parse(localStorage.getItem("token"))
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()  


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };
    
      const handleEdit = ()=>{
        if(id){
         dispatch(updateExperience({id,token,input})).then((res)=>{
            if(res.payload){
               toast({
                title:"Experience updated successfully",
                description:"you can update more..",
                status: "success",
                duration: 2000,
                isClosable: true,
                position:"top"
               })
               setTimeout(() => {
              }, 2000);  
            }
            dispatch(getExperience(token))
             onClose() 
       })
    } else{
      alert("data not Found")
    }

  }




  return (
    <>
    <MdModeEdit onClick={onOpen} style={{color:"#087cdd" , fontSize:"24px", cursor:"pointer"}}/>
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size={["sm","md","md"]}
    >
      <ModalOverlay />
      <ModalContent p="10px">
        <ModalHeader><Text fontSize={24}>Update Experience</Text></ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontSize={"12px"} color="#949494">Experience Type*</FormLabel>
            <Input
              type="text"
              value={input.experiencetype}
              name="experiencetype"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Experience Type*"
              fontSize={18}
            />
          
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Title/JobRole*</FormLabel>
            <Input
              type="text"
              value={input.jobtitle}
              name="jobtitle"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="JobRole*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Experience in (month)*</FormLabel>
            <Input
              type="text"
              value={input.duration}
              name="duration"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Experience*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Responsibility*</FormLabel>
            <Input
              type="text"
              value={input.responsibility}
              name="responsibility"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Responsibility*"
              fontSize={18}
            />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button bg="green" onClick = {handleEdit} color="white" mr={3}>
          update
          </Button>
          <Button onClick={onClose} color="blue">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default EditExperienceModal