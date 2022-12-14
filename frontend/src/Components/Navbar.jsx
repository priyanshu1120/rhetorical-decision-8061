import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, useDisclosure, DrawerContent, HStack, Icon, Image, Flex, Box, Button, Text } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { BsFillCartFill } from "react-icons/bs";
import { MdLogout, MdBook,MdDashboard,MdPerson,MdFormatAlignJustify,} from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import { useState } from "react";


function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
     const [menu,setMenu]=useState(false)
    const [register,setRegister]=useState(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const [logo,setLogo] = useState(false)
    const navigate = useNavigate()
    const handleLog = ()=>{
         if(token){
            localStorage.removeItem("token")
             navigate("/login/student")
         }
         navigate("/login/student")
         
    }

    return (
        <>
            <Flex justifyContent="space-between" p="8px 25px 5px 25px" alignItems="center" boxShadow='base' rounded='md' bg='white'>
                <Flex gap={5}>
                    <HamburgerIcon onClick={onOpen} _hover={{ backgroundColor: "lightgray" }} cursor="pointer" padding="5px" boxSize={10} borderRadius='full' />
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
                                    <Icon w="6" h="6" mr="1rem" as={MdDashboard} /> <Link to="/student/dashboard">Dashboard</Link>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdPerson} /> <Link to="/profile/student">Profile</Link>
                                </HStack>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    // border="1px solid red"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdFormatAlignJustify} />{" "}
                                    <Link to="/internship">
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
                                 <Box onClick={()=>setMenu(!menu)}>
                                    <Flex _hover={{ backgroundColor: "lightgray" }} padding="1rem" fontWeight="bold" alignItems="center" justifyContent="space-between">
                                        <Flex >
                                            <Icon w="6" h="6" mr="1rem" as={MdBook} />
                                            <p>Courses</p>
                                        </Flex>
                                        { menu ? 
                                        <Icon w="5" h="6" mr="1rem" as={IoIosArrowUp} color="blue.400" /> :
                                        <Icon w="5" h="6" mr="1rem" as={IoIosArrowDown} color="blue.400" /> 
                                        }
                                    </Flex>
                                    {
                                        menu ? 
                                        <Box lineHeight={10} pl="3rem" transition="1s ease-in-out">
                                            <Box _hover={{ backgroundColor: "lightgray" }} fontWeight="bold" >
                                                <Link to="/courses">
                                                    <p>Online Courses</p>
                                                </Link>
                                            </Box>
                                            <Box _hover={{ backgroundColor: "lightgray" }} fontWeight="bold" >
                                                <Link to="/courses">
                                                    <p>Classroom Traning</p>
                                                </Link>
                                            </Box>
                                        </Box>
                                        :""
                                    }
                                </Box>
                              
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
                                 <Box onClick={()=>setRegister(!register)}>
                                    <Flex _hover={{ backgroundColor: "lightgray" }} padding="1rem" fontWeight="bold" alignItems="center" justifyContent="space-between">
                                        <Flex >
                                            <Icon w="6" h="6" mr="1rem" as={MdBook} />
                                            <p>Register</p>
                                        </Flex>
                                        { register ? 
                                        <Icon w="5" h="6" mr="1rem" as={IoIosArrowUp} color="blue.400" /> :
                                        <Icon w="5" h="6" mr="1rem" as={IoIosArrowDown} color="blue.400" /> 
                                        }
                                    </Flex>
                                    {
                                        register ? 
                                        <Box lineHeight={10} pl="3rem" transition="1s ease-in-out">
                                            <Box _hover={{ backgroundColor: "lightgray" }} fontWeight="bold" >
                                                <Link to="/company/register">
                                                    <p>Comapany</p>
                                                </Link>
                                            </Box>
                                            <Box _hover={{ backgroundColor: "lightgray" }} fontWeight="bold" >
                                                <Link to="/register/student">
                                                    <p>Student</p>
                                                </Link>
                                            </Box>
                                        </Box>
                                        :""
                                    }

                                </Box>
                                <HStack
                                    _hover={{ backgroundColor: "lightgray" }}
                                    padding="1rem"
                                    fontWeight="bold"
                                >
                                    <Icon w="6" h="6" mr="1rem" as={MdLogout} /> {token?<Text  onClick = {handleLog} cursor="pointer">Logout</Text>:<Text cursor="pointer">Login</Text>}
                                </HStack>
                            </DrawerBody>

                        </DrawerContent>
                    </Drawer>
                </Flex>
               
                <Box justifyContent={"space-between"}  display='flex'>
                    <Link to="/cart"><Icon
                        width="25px"
                        height="25px"
                        margin="10px 20px 0px "
                        as={BsFillCartFill}
                    /></Link>

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