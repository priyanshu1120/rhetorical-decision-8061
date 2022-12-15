import { ChevronDownIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import React from "react";
import { Link } from "react-router-dom";
import StudentProfile from "../Components/StudentProfile";

const StudentApplication = () => {
    return (
        <Box>
          <Box backgroundColor={"#df1e2e"} p={3}w="full">
            <Text color="white" fontWeight={600}>
              Please Click Here VERIFY EMAIL & Click Here to VERIFY NUMBER
            </Text>
          </Box>
    
          <Grid
            templateAreas={`"nav main"`}
            gridTemplateColumns={["0px 1fr", "1px 1fr", "1px 1fr", "400px 1fr"]}
            h="400px"
            gap={["1","1","4"]}
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem area={"nav"}>
              <Box>
                <StudentProfile />
              </Box>
            </GridItem>
            <GridItem   area={"main"}>
              <Box w="full">
                
              <Box  w={[ "100%" ,"98%"]} p={[10,10,12,12]} border="1px solid red" mt="8px"  boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px" bg="white">
    
               </Box>
            </Box>
    
    
            </GridItem>
          </Grid>
        </Box>
      );
}

export default StudentApplication