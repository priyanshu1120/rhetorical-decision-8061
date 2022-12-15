import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, VStack,Text  } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

const StudentProfile = () => {
    const [size, setSize] = useState(window.innerWidth);
  const updateSize = () =>
    setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);


  return (
     <Box>
        {
            size>980 ? (
        
    <Box w="xs" h="350px" p={[8,10]} ml="80px" mt="10px" rounded='md' bg='white' boxShadow="rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"  >
         
         <VStack >
             <Image src="" alt="" w="100px" h="100px"/>
            <Link to ="/profile/student"><Button colorScheme='messenger' size="xs">MY PROFILE</Button></Link>
            <Text>Priyanshu kaushik</Text>
            <Box w="250px" border="1px solid #999999"></Box>
            <Text>priyanshukaushik796@gmail.com</Text>
            <Text>+91 8057247701</Text>
         </VStack>
    </Box>):(<Box></Box>)

}
    </Box>
  )
}

export default StudentProfile