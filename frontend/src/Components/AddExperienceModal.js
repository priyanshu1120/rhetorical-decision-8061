import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import {MdAddCircle} from "react-icons/md"
import { Select, Text, useToast } from '@chakra-ui/react'
import { createEducation, createExperience, getExperience } from '../Redux/StudentReducer/action'

const expObj = {
  experiencetype: "",
  jobtitle: "",
  duration: "",
  responsibility: "",
  };



const AddExperienceModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const [input, setInput] = useState(expObj);
    const token = JSON.parse(localStorage.getItem("token"))
    const dispatch = useDispatch()  
    const toast = useToast()
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };

      const handleExperience = ()=>{
        dispatch(createExperience({input,token})).then((res)=>{ 
          if(res.payload){
            toast({
              title: "Education Added Successful.",
              description: "You can add more!",
              status: "success",
              duration: 2000,
              isClosable: true,
              position:"top"
            });
            setTimeout(() => {
            }, 2000);
          }
          dispatch(getExperience(token))
          setInput({...input,experiencetype:"", jobrole:"", duration:"", responsibility:""})
           onClose()
        }) 
  
      }
  


  return (
    <>
    <MdAddCircle onClick={onOpen} style={{ fontSize:"24px", cursor:"pointer"}}/>
    <Modal
      initialFocusRef={initialRef}
      isOpen={isOpen}
      onClose={onClose}
      size={["sm","md","xl"]}
    >
      <ModalOverlay />
      <ModalContent p="40px">
        <ModalHeader><Text fontSize={24}>Add Experience</Text></ModalHeader>
        <ModalBody pb={6}>
        <FormControl>
            <FormLabel fontSize={"12px"} color="#949494">Select Level Of EcreateEducation*</FormLabel>
          
            <Select
              variant="unstyled"
              borderBottom={"1px solid #949494"}
              rounded="none"
              name="experiencetype"
              onChange={handleInputChange}
              value={input.experiencetype}
              placeholder="Select Type of Experience*"
              color="#718096"
              fontSize={18}
              ref={initialRef}
            >
              <option value="Job">Job</option>
              <option value="InternShip">InternShip</option>
              <option value="Project">Project</option>
              <option value="College Festival">College Festival</option>
              <option value="Comiitee Mamber">Comiitee Mamber</option>
              <option value="Club">Club</option>
            </Select>
          </FormControl>

          <FormControl  mt={4}>
            
          <FormLabel fontSize={"12px"} color="#949494">Title/JobRole*</FormLabel>
            <Input
              type="text"
              value={input.jobtitle}
              name="jobtitle"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Title/Jobrole*"
              fontSize={18}
            />
          </FormControl>

          <FormControl  mt={4}>
            
            <FormLabel fontSize={"12px"} color="#949494">Experience in (month)*</FormLabel>
              <Input
                type="text"
                value={input.duration}
                name="duration"
                onChange={handleInputChange}
                variant="flushed"
                placeholder="Experience in (month)*"
                fontSize={18}
              />
            </FormControl>

            <FormControl  mt={4}>
            
            <FormLabel fontSize={"12px"} color="#949494">Responsibility*</FormLabel>
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
          <Button  bg="#df1e2e" onClick={handleExperience} color="white"  mr={3}>
      Add
          </Button>
          <Button onClick={onClose} color="blue">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default AddExperienceModal