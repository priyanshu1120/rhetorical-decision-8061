import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {MdModeEdit} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getEducation, updateEducation } from '../Redux/StudentReducer/action'




const EditModalEducation = (data) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    var edudata = data
    var id = edudata.data._id
    const [edu,setEducation] = useState( {
      graduation: edudata.data.graduation,
      college: edudata.data.college,
      degree: edudata.data.degree,
      year:edudata.data.year,
      status:edudata.data.status
    })
    
    const token = JSON.parse(localStorage.getItem("token"))
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()  

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEducation({ ...edu, [name]: value });
      };


      const handleEdit = ()=>{
            if(id){
             dispatch(updateEducation({id,token,edu})).then((res)=>{
                if(res.payload){
                   toast({
                    title:"Education updated successfully",
                    description:"you can update more..",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position:"top"
                   })
                   setTimeout(() => {
                  }, 2000);  
                }
                dispatch(getEducation(token))
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
        <ModalHeader><Text fontSize={24}>Update Education</Text></ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontSize={"12px"} color="#949494">Level Of Education*</FormLabel>
            <Input
              type="text"
              value={edu.graduation}
              name="graduation"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Level Of Education*"
              fontSize={18}
              required
            />
          
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Instituation Name*</FormLabel>
            <Input
              type="text"
              value={edu.college}
              name="college"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Instituation Name*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Degree*</FormLabel>
            <Input
              type="text"
              value={edu.degree}
              name="degree"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Degree*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Year*</FormLabel>
            <Input
              type="text"
              value={edu.year}
              name="year"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Year*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Status*</FormLabel>
            <Input
              type="text"
              value={edu.status}
              name="status"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Status*"
              fontSize={18}
            />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button bg="green" onClick = {handleEdit}  color="white" mr={3}>
          update
          </Button>
          <Button onClick={onClose} color="blue">Cancel</Button>
        </ModalFooter>

      </ModalContent>

    </Modal>
    </>
  )
}

export default EditModalEducation