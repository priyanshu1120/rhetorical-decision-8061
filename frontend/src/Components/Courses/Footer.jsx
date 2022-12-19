import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box bg="#446478" color="white"  >
      <SimpleGrid
        columns={[1, 2, 3]}
        spacingX="40px"
        spacingY="20px"
        m={1}
        h="15rem"
      >
        <Box m="auto" mt={[2, 3, 8]}>
          <div>BY PLACE</div>
          <hr />
          <div>Internships In Mumbai</div>
          <div>Internships In Delhi</div>
          <div>Internships In Bangalore</div>
          <div>Internships In Pune</div>
          <div>Internships In Hyderabad</div>
        </Box>

        <Box m="auto" mt={[2, 3, 8]}>
          <div>BY PROFILE</div>
          <hr />
          <div>Marketing Internships</div>
          <div>Business Development Internships</div>
          <div>Content Writing Interships</div>
          <div>Graphic Design Internships</div>
          <div>HR internships</div>
          <div>Engineering Internships</div>
        </Box>

        <Box m="auto" mt={[2, 3, 8]}>
          <div>BY TYPE</div>
          <hr />
          <div>Full Time Internships</div>
          <div>Part Time Internships</div>
          <div>Work From Home Internships</div>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
