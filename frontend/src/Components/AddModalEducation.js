import React from 'react'
import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { useDisclosure } from '@chakra-ui/hooks'
import { Input } from '@chakra-ui/input'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import {MdAddCircle} from "react-icons/md"
import { Select, Text } from '@chakra-ui/react'

const AddModalEducation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

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
        <ModalHeader><Text fontSize={24}>Add Education</Text></ModalHeader>
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
              <option value="Doctorate">Doctorate</option>
              <option value="Post Graduationr">Post Graduationr</option>
              <option value="Graduation">Graduation</option>
              <option value="Diploma">Diploma</option>
              <option value="XII Equivalent">XII Equivalent</option>
              <option value="X Equivalent">X Equivalent</option>
            </Select>
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Instituation Name*</FormLabel>
            <Select
              variant="unstyled"
              name="college"
              borderBottom={"1px solid #949494"}
              rounded="none"
              // onChange={handleInputChange}
              // value={input.city}
              placeholder="Enter the Institution Name*"
              color="#718096"
              fontSize={18}
            >
              <option value="S.D. Collage Of Engineerring and Techonology">S.D. Collage Of Engineerring and Techonology</option>
              <option value="K.L. Janta Inter College">K.L. Janta Inter College</option>
              <option value="Shanti Insititute of Technology">Shanti Insititute of Technology</option>
              <option value="S.D. Management of Technology">S.D. Management of Technology</option>
              <option value="S.K. Happy High School">S.K. Happy High School</option>
              <option value="Goverment Girl Senior Sacondaey School">Goverment Girl Senior Sacondaey School</option>
            </Select>
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Degree*</FormLabel>
            <Select
              variant="unstyled"
              name="city"
              borderBottom={"1px solid #949494"}
              rounded="none"
              // onChange={handleInputChange}
              // value={input.city}
              placeholder="Degree*"
              color="#718096"
              fontSize={18}
            >
              <option value="B.Tech">B.tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="B.Com">B.Com</option>
              <option value="M.Com">M.Com</option>
              <option value="B.A">B.Com</option>
              <option value="M.A">M.A</option>
              <option value="Doctor Of Medicine">Doctor Of Medicine</option>
              <option value="Diploma in Computer Science">Diploma in Computer Science</option>
              <option value="Diploma in Mechanical">Diploma in Mechanical</option>
              <option value="Senior Sacondary">Senior Sacondary</option>
              <option value="High School">High School</option>
            </Select>
          </FormControl>

          <FormControl mt={6}>
            <FormLabel  fontSize={"12px"} color="#949494">Year*</FormLabel>
            <Select
              variant="unstyled"
              name="year"
              borderBottom={"1px solid #949494"}
              rounded="none"
              // onChange={handleInputChange}
              // value={input.city}
              placeholder="Year*"
              color="#718096"
              fontSize={18}
            >
              <option value="First Year">First Year</option>
              <option value="Second Year">Second Year</option>
              <option value="Third Year">Third Year</option>
              <option value="Fourth Year">Fourth Year</option>
              <option value="Fith Year">Fift Year</option>
              <option value="Sixth Year">Sixth Year</option>
            </Select>
          </FormControl>

        </ModalBody>

        <ModalFooter>
          <Button bg="#df1e2e" color="white" mr={3}>
          Add
          </Button>
          <Button onClick={onClose} color="blue">Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default AddModalEducation