import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {MdModeEdit} from "react-icons/md"

const eduObj = {
  firstname: "",
  lastname: "",
  email: "",
  mobile: "",
  password: "",
  city: "",
  preference: "",
  category: "",
  find: "",
};


const EditPersonalStudent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const [input, setInput] = useState(eduObj);
    const [scrollBehavior, setScrollBehavior] = React.useState('inside')

    const mobileError = input.mobile === "";
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };


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
            <FormLabel fontSize={"12px"} color="#949494">Experience Type*</FormLabel>
            <Input
              type="text"
              value={input.mobile}
              name="mobile"
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
              value={input.mobile}
              name="mobile"
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
              value={input.mobile}
              name="mobile"
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
              value={input.mobile}
              name="mobile"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Responsibility*"
              fontSize={18}
            />
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button bg="green" color="white" mr={3}>
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