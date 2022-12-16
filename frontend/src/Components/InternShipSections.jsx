// import { Button } from "@chakra-ui/button"
// import { Flex, Heading } from "@chakra-ui/layout"
// import { Step, Steps, useSteps } from "chakra-ui-steps"
// import { MdContentPaste } from "react-icons/md"

// const steps = [{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]

// export const InternShipSections = () => {
//   const { nextStep, prevStep, reset, activeStep } = useSteps({
//     initialStep: 0,
//   })
//   return (
//     <>
//       <Steps orientation="vertical" activeStep={activeStep}>
//         {steps.map(({ label }, index) => (
//           <Step width="100%" label={label} key={label}>
//             <MdContentPaste my={1} index={index} />
//           </Step>
//         ))}
//       </Steps>
//       {activeStep === steps.length ? (
//         <Flex px={4} py={4} width="100%" flexDirection="column">
//           <Heading fontSize="xl" textAlign="center">
//             Woohoo! All steps completed!
//           </Heading>
//           <Button mx="auto" mt={6} size="sm" onClick={reset}>
//             Reset
//           </Button>
//         </Flex>
//       ) : (
//         <Flex width="100%" justify="flex-end">
//           <Button
//             isDisabled={activeStep === 0}
//             mr={4}
//             onClick={prevStep}
//             size="sm"
//             variant="ghost"
//           >
//             Prev
//           </Button>
//           <Button size="sm" onClick={nextStep}>
//             {activeStep === steps.length - 1 ? "Finish" : "Next"}
//           </Button>
//         </Flex>
//       )}
//     </>
//   )
// }

// export default InternShipSections

import React from 'react'
import { Step, Steps, useSteps } from "chakra-ui-steps";
// import {} from "react-hook-form"
import { Box, Flex } from '@chakra-ui/layout'
import { CheckboxType, FormFeild, RadioDuration, TitleSelect } from './FormFeild';
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { useState } from 'react';
import { Button } from '@chakra-ui/button';

function InternShipSections() {

  const { activeStep,nextStep,prevStep } = useSteps({
    initialStep: 0 
  });

  const [field, setFeild] = useState({});


  return (
    <>
      <Box boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" width={"60%"} margin={"auto"} p={10} marginTop={"5rem"}>
        <form>

        <Steps orientation="vertical" label={activeStep}>
          <Step label="Section 1: What Kind Of An Internship Are You Offering?" >
            <FormFeild label={"Internship Title *"}>
              <TitleSelect label={"Add or select title for inernship"} />
            </FormFeild>

            <FormFeild label={"Internship Category"}>
              <TitleSelect label={"Add or select company for inernship"} />
            </FormFeild>

            <FormFeild label={"Openings *"}>
              <Input variant={"flushed"} placeholder={"Specify the number of internship(s)"} />
            </FormFeild>

            <FormFeild label={"Internship type *"}>
              <CheckboxType />
            </FormFeild>

            <FormFeild label={"Internship Starts *"}>
              <TitleSelect />
            </FormFeild>

            <FormFeild label={"Duration *"}>
              <RadioDuration />
            </FormFeild>

            <FormFeild label={"Address *"}>
              <Textarea float={"left"} width={"50%"} placeholder='Write your address here!' />
            </FormFeild>

          </Step>
          <Step label="address" />
          <Step label="Consent" />
        </Steps>
        <Flex>
            { activeStep !==0 && <Button onClick={prevStep}>Previous</Button>}
            { activeStep !==2 && <Button onClick={nextStep}>Next</Button>}
        </Flex>
        </form>
      </Box>
    </>
  )
}

export default InternShipSections
