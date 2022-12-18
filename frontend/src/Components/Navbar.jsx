import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, useDisclosure, DrawerContent, HStack, Icon, Image, Flex, Box, Button, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout, MdBook,MdDashboard,MdPerson,MdFormatAlignJustify,} from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { useState } from "react";


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const token = JSON.parse(localStorage.getItem("token"))
    const [logo,setLogo] = useState(false)
    const navigate = useNavigate()
    const handleLog = ()=>{
         if(token){
            localStorage.removeItem("token")
             navigate("/login/student")
         }
    }

    return (
        <>
            <Flex justifyContent="space-between" p="8px 25px 5px 25px" alignItems="center" boxShadow='base' rounded='md' bg='white'>
                <Flex gap={5}>
                    <HamburgerIcon onClick={onOpen} _hover={{ backgroundColor: "lightgray" }} padding="5px" boxSize={10} borderRadius='full' />
                    <Link to="/"> <Image w="150px" h="60px" src="/InternLogo.png" /> </Link>
                    
                    <Drawer placement='left' onClose={onClose} isOpen={isOpen} >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader borderBottomWidth='1px'>
                                <Flex gap={5}>
                                    <HamburgerIcon onClick={onClose} _hover={{ backgroundColor: "lightgray" }} padding="5px" boxSize={10} borderRadius='full' />
                                    <Image w="120px" h="60px" src="/InternLogo.png" />
                                </Flex>
                            </DrawerHeader>
                            <DrawerBody>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdDashboard} /> <p>Dashboard</p>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdPerson} /> <p>Profile</p>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdFormatAlignJustify} />{" "}
                                    <Link to="/intern">
                                        <p>Internship</p>
                                    </Link>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={IoBag} /> <p>Jobs</p>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdBook} />
                                    <Link to="/courses"
                                    >
                                        <p>Courses</p>
                                    </Link>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={BsCurrencyDollar} />{" "}
                                    <p>Transition</p>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={HiPhone} /> <p>Contact Us</p>
                                </HStack>
                                <hr />
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdLogout} /> <p>Logout</p>
                                </HStack>
                            </DrawerBody>

                        </DrawerContent>
                    </Drawer>
                </Flex>
               
                <Box justifyContent={"space-between"}  display='flex'>
                    <Icon
                        width="25px"
                        height="25px"
                        margin="10px 20px 0px "
                        as={BsFillCartFill}
                    />

                     {
                        token ? <Box> <Image src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg" alt="profile" 
                         w="40px"
                         h="40px" 
                         borderRadius={"50%"} 
                         cursor="pointer" 
                         onClick={()=>setLogo((prev)=>!prev)} />
                         <Box>{logo?<Text  onClick = {handleLog} cursor="pointer">Logout</Text>:<div></div>}</Box>
                        </Box>
                        :
                        <Button
                        size="sm"
                        margin="-10px 20px 0px 10px"
                        colorScheme="red"
                        variant="solid"
                        onClick = {handleLog}
                    >
                     SIGNIN
                    </Button>
                     }

                </Box>
            </Flex>
        </>
    )
}

export { Navbar }