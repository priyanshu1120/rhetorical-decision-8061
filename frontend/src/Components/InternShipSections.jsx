
import React from 'react'
import { useDispatch } from "react-redux"
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { Box, Flex, HStack, Stack, Text, VStack } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input';
import { Textarea } from '@chakra-ui/textarea';
import { useState } from 'react';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Select } from '@chakra-ui/select';
import { Checkbox } from '@chakra-ui/checkbox';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import { Multiselect } from "multiselect-react-dropdown"
import { useToast } from '@chakra-ui/react';
import { postInternShip } from "../Redux/InternShipReducer/action"
import { useNavigate } from 'react-router-dom';

function InternShipSections() {
  const [value, setValue] = useState('1');
  const [option, setOption] = useState(["Communication Skill", "LeaderShip Skill", "Quick learner"]);

  const { activeStep, nextStep, prevStep } = useSteps({
    initialStep: 0
  });

  const initialDetails = {
    internship_title: "",
    internship_category: "",
    openings: "",
    internship_type: "",
    internship_starts: "",
    duration : "",
    duration_calender: "",
    address: "",
    internship_description: "",
    prefered_skills: "",
    prefered_colleges: "",
    prefered_degrees: "",
    specific_question: "",
    stiphen: "",
    perks: ""
  }

  const [internShipForm, setInternShipForm] = useState(initialDetails);
  const token = JSON.parse(localStorage.getItem("token"));
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInternShipForm({ ...internShipForm, [name]: value })
  }

  const handleSubmit = () => {
    dispatch(postInternShip({ internShipForm, token })).then((res) => {
      if (res.payload){
        console.log(res);
        toast({
          title: "Your internship got Added",
          status: "success",
          duration: 2000,
          position: "top-right"
        });
        setTimeout(() => {
          navigate('/company/register/profile-details');
        }, 2000)
      }
    })
  }

  console.log(internShipForm);


  return (
    <>
      <Box boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" width={"60%"} margin={"auto"} p={10} marginTop={"5rem"}>
        {/* <form > */}

          <Steps orientation="vertical" activeStep={activeStep} >
            <Step label="Section 1: What Kind Of An Internship Are You Offering?" >
              <FormControl >
                <FormLabel label={"Internship Title"} color={"gray"} >
                  <Select variant='flushed'
                  name='internship_title'
                  onChange={handleInputChange}
                  value={internShipForm.internship_title}
                  >
                     <option hidden>Add or select title for inernship</option>
                     <option value='Full Time intern'>Full Time internShip</option>
                     <option value='Full Stack Developer'>Full Stack Developer</option>
                     <option value='option3'>Part Time InternShip</option>
                     <option value='option4'>Dekstop Engineer</option>
                     <option value='option5'>DevOps Engineer</option>
                     <option value='option6'>Part time UI / UX InternShip</option>
                  </Select>
                </FormLabel>
              </FormControl>

              <FormControl >
                <FormLabel label={"Internship Category"} color={"gray"} >
                  <Select variant='flushed' 
                  name='internship_category'
                  onChange={handleInputChange}
                  value={internShipForm.internship_category}
                  >
                     <option hidden>Add or select company for inernship</option>
                    <option value='option1'>App Design and Development</option>
                    <option value='option2'>Digital Marketing</option>
                    <option value='option3'>Content writing</option>
                    <option value='option4'>Animation</option>
                    <option value='option5'>Business Development</option>
                  </Select>
                </FormLabel>
              </FormControl>

              <FormLabel label="Openings *">
                <Input name='openings'
                  onChange={handleInputChange}
                  value={internShipForm.openings}
                   variant={"flushed"} placeholder={"Specify the number of internship(s)"} />
              </FormLabel>

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} > InternShip Type *</Text>
                <Select 
                name='internship_type'
                onChange={handleInputChange}
                value={internShipForm.internship_type}
                variant='flushed' width={"75%"} >
                  <option hidden> Select Type of InternShip</option>
                  <option value='Full Time'>Full Time</option>
                  <option value='Part Time'>Part Time</option>
                  <option value='Work from home / Campus'>Work from home / Campus</option>
                </Select>
              </HStack>

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} > Internship Starts *</Text>
                <Select 
                name='internship_starts'
                onChange={handleInputChange}
                value={internShipForm.internship_starts}
                variant='flushed' width={"75%"} >
                  <option hidden>Select when do you want to start ?</option>
                  <option value='option2'>Later</option>
                  <option value='option1'>Immediate</option>
                </Select>
              </HStack>

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
              <Input 
              width={"20%"}
                  name='duration'
                  onChange={handleInputChange}
                  value={internShipForm.duration}
                  marginLeft={"0rem 1rem 0rem 1rem"} placeholder="Enter Number" variant={"flushed"} />
                <Select 
                name='duration_calender'
                onChange={handleInputChange}
                value={internShipForm.duration_calender}
                variant='flushed' width={"75%"} >
                  <option hidden>Select Duration</option>
                  <option value='Months'>Months</option>
                  <option value='Weeks'>Weeks</option>
                  <option value='Days'>Days</option>
                </Select>
              </HStack>

              <FormLabel label={"Address *"}>
                <Textarea 
                marginTop={"1rem"}
                name='address'
                onChange={handleInputChange}
                value={internShipForm.address}
                float={"left"} width={"60%"} placeholder='Write your address here!' />
              </FormLabel>

              <FormLabel label={"internship_description *"}>
                <Textarea 
                marginTop={"1rem"}
                name='internship_description'
                onChange={handleInputChange}
                value={internShipForm.internship_description}
                float={"left"} width={"60%"} placeholder='Write your thoughts why do this internship here!' />
              </FormLabel>

            </Step>
            <Step label="Section 2: What Kind Of Internship Are You Looking for?" >

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} >Prefered Skills *</Text>
                <Select 
                name='prefered_skills'
                onChange={handleInputChange}
                value={internShipForm.prefered_skills}
                variant='flushed' width={"75%"} >
                  <option hidden>Select any Prefered Skills.</option>
                  <option value='Full Stack web Dev'>Full Stack web Dev</option>
                  <option value='Java Backend Developer'>Java Backend Developer</option>
                  <option value='UI/UX design'>UI/UX design</option>
                  <option value='Angular Developer'>Angular Developer</option>
                  <option value='React Developer'>React Developer</option>
                  <option value='Backend Developer'>Backend Developer</option>
                </Select>
              </HStack>

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} >Prefered Colleges *</Text>
                <Select 
                name='prefered_colleges'
                onChange={handleInputChange}
                value={internShipForm.prefered_colleges}
                variant='flushed' width={"75%"} >
                  <option hidden>Select any Prefered Colleges.</option>
                  <option value='IIT Madras, Chennai'>IIT Madras, Chennai</option>
                  <option value='IIT Delhi, New Delhi'>IIT Delhi, New Delhi</option>
                  <option value='IIT Bombay, Mumbai'>IIT Bombay, Mumbai</option>
                  <option value='IIT Kharagpur, Kharagpur'>IIT Kharagpur, Kharagpur</option>
                  <option value='Indian Institute of Management'>Indian Institute of Management</option>
                </Select>
              </HStack>

           

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} >Prefered Degrees *</Text>
                <Select 
                name='prefered_degrees'
                onChange={handleInputChange}
                value={internShipForm.prefered_degrees}
                width={"75%"} 
                variant='flushed'  >
                  <option hidden>Select any prefered degrees.</option>
                  <option value='BE/B.Tech- Bachelor of Technology'>BE/B.Tech- Bachelor of Technology</option>
                  <option value='B.Arch- Bachelor of Architecture'>B.Arch- Bachelor of Architecture</option>
                  <option value='BCA- Bachelor of Computer Applications'>BCA- Bachelor of Computer Applications</option>
                  <option value='B.Sc.- Information Technology'>B.Sc.- Information Technology</option>
                  <option value='B.Sc- Interior Design'>B.Sc- Interior Design.</option>
                  <option value='BDS- Bachelor of Dental Surgery.'>BDS- Bachelor of Dental Surgery.</option>
                </Select>
              </HStack>


              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} > Do you want candidates to answer any specific questions while applying for this internship?</Text>
                <Select 
                name='specific_question'
                onChange={handleInputChange}
                value={internShipForm.specific_question}
                variant='flushed' width={"75%"} >
                  <option hidden>Select any of questions.</option>
                  <option value='option1'>Why we should hire you ?</option>
                  <option value='option2'>where do you wanna see your self in next five years ?</option>
                  <option value='option3'>what are your strengths & weaknesses ?</option>
                  <option value='option4'>Why do you wanna work in our organisation ?</option>
                </Select>
              </HStack>

            </Step>
            <Step label="Section 3 : What are your take aways from this internships ?" >
              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text width={"20%"} color={"gray"}  > Stipend Type *</Text>
                <Input 
                name='stiphen'
                onChange={handleInputChange}
                value={internShipForm.stiphen}
                placeholder={"How much stiphen you wanna provide"}
                width={"75%"} variant={"flushed"} />
              </HStack>

              <HStack marginTop={"1rem"} display={"flex"} justifyContent={"space-between"} alignContent={"center"}>
                <Text color={"gray"} width={"20%"} >Perks *</Text>
                <Select 
                name='perks'
                onChange={handleInputChange}
                value={internShipForm.perks}
                variant='flushed' width={"75%"} >
                  <option hidden>Select any perks.</option>
                  <option value='Certificate of Internship'>Certificate of Internship</option>
                  <option value='Full Stack Developer'>Full Stack Developer</option>
                  <option value='Possibility of Pre Placement Offer'>Possibility of Pre Placement Offer</option>
                  <option value='Flexible Hours'>Flexible Hours</option>
                  <option value='Casual Attire'>Casual Attire</option>
                </Select>
              </HStack>
            </Step>

          </Steps>
          <Flex>
            {activeStep !== 0 && <Button onClick={prevStep}>Previous</Button>}
            {activeStep !== 2 && <Button onClick={nextStep}>Next</Button>}
            {activeStep === 2 && <Button onClick={handleSubmit} type="submit" >Submit</Button>}
          </Flex>
        {/* </form> */}
      </Box>
    </>
  )
}

export default InternShipSections
