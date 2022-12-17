import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Text } from '@chakra-ui/react'
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


const EditModalEducation = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const [input, setInput] = useState(eduObj);
    const mobileError = input.mobile === "";
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };


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
              value={input.mobile}
              name="mobile"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Level Of Education*"
              fontSize={18}
            />
          
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Instituation Name*</FormLabel>
            <Input
              type="text"
              value={input.mobile}
              name="mobile"
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
              value={input.mobile}
              name="mobile"
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
              value={input.mobile}
              name="mobile"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Year*"
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

export default EditModalEducation