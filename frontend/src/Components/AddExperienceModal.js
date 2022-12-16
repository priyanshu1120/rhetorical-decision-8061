import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import {MdAddCircle} from "react-icons/md"
import { Select, Text } from '@chakra-ui/react'

const expObj = {
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



const AddExperienceModal = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const [input, setInput] = useState(expObj);
    const mobileError = input.mobile === "";
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
      };
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
            <FormLabel fontSize={"12px"} color="#949494">Select Level Of Education*</FormLabel>
          
            <Select
              variant="unstyled"
              borderBottom={"1px solid #949494"}
              rounded="none"
              name="Graduation"
              // onChange={handleInputChange}
              // value={input.city}
              placeholder="Select Lavel Of Education*"
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

          <FormControl isInvalid={mobileError} mt={4}>
            
          <FormLabel fontSize={"12px"} color="#949494">Title/JobRole*</FormLabel>
            <Input
              type="text"
              value={input.mobile}
              name="mobile"
              onChange={handleInputChange}
              variant="flushed"
              placeholder="Title/Jobrole*"
              fontSize={18}
            />
            {!mobileError ? (
              <FormHelperText></FormHelperText>
            ) : (
              <FormErrorMessage>required.</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={mobileError} mt={4}>
            
            <FormLabel fontSize={"12px"} color="#949494">Experience in (month)*</FormLabel>
              <Input
                type="text"
                value={input.mobile}
                name="experince"
                onChange={handleInputChange}
                variant="flushed"
                placeholder="Experience in (month)*"
                fontSize={18}
              />
              {!mobileError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>required.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={mobileError} mt={4}>
            
            <FormLabel fontSize={"12px"} color="#949494">Responsibility*</FormLabel>
              <Input
                type="text"
                value={input.mobile}
                name="experince"
                onChange={handleInputChange}
                variant="flushed"
                placeholder="Responsibility*"
                fontSize={18}
              />
              {!mobileError ? (
                <FormHelperText></FormHelperText>
              ) : (
                <FormErrorMessage>required.</FormErrorMessage>
              )}
            </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button  bg="#df1e2e" color="white"  mr={3}>
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