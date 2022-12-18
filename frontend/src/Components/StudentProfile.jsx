import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, VStack,Text  } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'

import { Link, useLocation, useNavigate } from 'react-router-dom'

const StudentProfile = () => {
    const [size, setSize] = useState(window.innerWidth);
    const [text,setText] = useState(false)
  const navigate = useNavigate()
    const location=useLocation()
    const path = location.pathname
  const updateSize = () =>
    setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);
  const student = JSON.parse(localStorage.getItem("student"))
  var data = student[0]

const handleClick = ()=>{
      setText((prev)=>!prev)

}

// if(text==true){
//      navigate("/profile/student")
// }else{
//   navigate("/student/dashboard")
// }

  return (
     <Box>
        {
            size>980 ? (
        
    <Box w="xs" h="350px" p={[8,10]} ml="80px" mt="10px" rounded='md' bg='white' boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"  >
         
         <VStack >
             <Image src="https://assets.interntheory.com/creative/default-images/guyProfile.jpg" alt="" w="100px" h="100px"/>
          {path=="/student/dashboard" ?<Button colorScheme='messenger' onClick={()=>navigate("/profile/student")} size="xs" >MY PROFILE</Button>
          :<Button colorScheme='messenger'  size="xs" onClick={()=>navigate("/student/dashboard")}>DASHBOARD</Button> } 
            <Text>{data.firstname} {data.lastname}</Text>
            <Box w="250px" border="1px solid #999999"></Box>
            <Text>{data.email}</Text>
            <Text>+91 {data.mobile}</Text>
         </VStack>
    </Box>):(<Box></Box>)

}
    </Box>
  )
}

export default StudentProfile