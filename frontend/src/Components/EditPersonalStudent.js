import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {MdModeEdit} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { getUser, updateUser } from '../Redux/StudentAuthReducer/action'

const eduObj = {
  firstname: "",
  lastname: "",
  city: "",
  language: "",
  skill:"",
  state:"",
  about:"",
  dob:"",
  pincode:""
};


const EditPersonalStudent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const [input, setInput] = useState(eduObj);
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')
    const dispatch = useDispatch()
    const student = JSON.parse(localStorage.getItem("student"))
    var data = student[0]
 var id = data._id

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };


const edit=()=>{
    dispatch(updateUser({input,id})).then((res)=>{
        dispatch(getUser(id))
        onClose() 
    }) 
   
} 

useEffect(()=>{
  dispatch(getUser(id))
},[])


  return (
    <>

    <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
          <Radio display={"none"} value='inside'>inside</Radio>
        </Stack>
      </RadioGroup>

    <MdModeEdit mt={15} onClick={onOpen} ref={initialRef} style={{color:"white" , fontSize:"24px", cursor:"pointer"}}/> 
   

    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={["sm","md","xl"]}
      scrollBehavior={scrollBehavior}
      finalFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent p="10px" h="600px" overflow={"hidden"}>
        <ModalHeader><Text fontSize={24}>Personal Details</Text></ModalHeader>
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel fontSize={"12px"} color="#949494">FirstName*</FormLabel>
            <Input
              type="text"
              value={input.firstname}
              name="firstname"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="first name*"
              fontSize={18}
            />
          
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">LastName*</FormLabel>
            <Input
              type="text"
              value={input.lastname}
              name="lastname"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="last name*"
              fontSize={18}
            />
          </FormControl>

          
          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">City*</FormLabel>
            <Input
              type="text"
              value={input.city}
              name="city"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="city*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">skill*</FormLabel>
            <Input
              type="text"
              value={input.skill}
              name="skill"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="skill*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">language*</FormLabel>
            <Input
              type="text"
              value={input.language}
              name="language"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="language*"
              fontSize={18}
            />
          </FormControl>

          
          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">about*</FormLabel>
            <Input
              type="text"
              value={input.about}
              name="about"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="about*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">dob*</FormLabel>
            <Input
              type="text"
              value={input.dob}
              name="dob"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="dob*"
              fontSize={18}
            />
          </FormControl>
          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">state*</FormLabel>
            <Input
              type="text"
              value={input.state}
              name="state"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="state*"
              fontSize={18}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">pincode*</FormLabel>
            <Input
              type="number"
              value={input.pincode}
              name="pincode"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="pincode*"
              fontSize={18}
            />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button bg="green" onClick={edit} color="white" mr={3}>
          update
          </Button>
          <Button onClick={onClose} color="blue">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default EditPersonalStudent