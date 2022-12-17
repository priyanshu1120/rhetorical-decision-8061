import React from "react";
import {
  Box,
  Grid,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import CompanyRegisterForm from "../Components/CompanyRegisterForm";
// import { Link } from "react-router-dom";
function CompanyRegisterPage() {

  return (
    <>
      <SimpleGrid bgColor={"#eeeeee"}>
        <SimpleGrid
          display={"flex"}
          width={"75%"}
          margin={"auto"}
          border={"1px solid black"}
          padding={"1rem 1rem 1rem 1rem"}
          justifyContent={"space-between"}
          marginTop={"2rem"}
          marginBottom={"2rem"}
        >
          <Box width={"35%"} marginTop={"3rem"}>
            <Stack>
              <Text fontSize={"28px"}>17149 Companies</Text>
              <Text fontSize={"15px"}>
                Trust Us With Their Intern Requirements Wouldn't You?
              </Text>

              <Grid templateColumns="repeat(4, 1fr)" gap={6}>
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-1.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-2.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-3.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-4.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-5.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-6.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-7.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-8.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-9.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-10.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-11.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-12.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-13.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-14.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-15.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-16.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-17.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-18.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-19.png" />
                <Image src="https://assets.interntheory.com/creative/home-logo-colored/logo-20.png" />
              </Grid>
            </Stack>
          </Box>

          <CompanyRegisterForm />
        </SimpleGrid>
      </SimpleGrid>

      <SimpleGrid width={"50%"} margin={"auto"}>
        <Box margin={"auto"}>
          <Img
            src="https://assets.interntheory.com/creative/chart.png"
            height={"50%"}
            width={"50%"}
            margin={"auto"}
          />
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            WE ARE CONSTANTLY GROWING
          </Text>
          <Text>
            We are on a mission to connect employers to young talent all over
            India. With our strong student and college network, it will no
            longer be a challenge to hire the right intern for your company
          </Text>
        </Box>
      </SimpleGrid>

      <Box
        width={"90%"}
        margin={"auto"}
        marginTop={"5rem"}
        marginBottom={"5rem"}
      >
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          borderBottom={"1px solid gray"}
          paddingBottom={"0.5rem"}
        >
          How Does It Work?
        </Text>
        <Text paddingTop={"0.5rem"} color={"gray"} marginBottom={"1rem"}>
          We decided to keep the process as simple and hassle-free as possible
          :) !
        </Text>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            width={"22%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/sign-up.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Sign Up For Free
            </Text>
            <Text>
              Create an account on InternTheory Once your internship is
              verified, the relevant students and will be notified via our
              match-making algorithms and Pan-India network.
            </Text>
          </Stack>
          <Stack
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            width={"22%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/Post-Internship.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Post An Internship For Free
            </Text>
            <Text>
              Once your internship is verified, the relevant students and
              placement networks will be notified via our match-making
              algorithms and Pan-India network.
            </Text>
          </Stack>
          <Stack
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            width={"22%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/Notification.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Receive Notifications on Email
            </Text>
            <Text>
              Once your internship is verified, the relevant students and
              placement networks will be notified via our match-making
              algorithms and Pan-India network
            </Text>
          </Stack>
          <Stack
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
            width={"22%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/Review,shortlist&-hire.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Review Profile, Shortlist & Hire!
            </Text>
            <Text>
              Students with matching eligibility and availability will apply.
              You can review their profile on your dashboard, and get in touch
              with the one you like!.
            </Text>
          </Stack>
        </Box>
      </Box>

      <Box
        width={"90%"}
        margin={"auto"}
        marginTop={"5rem"}
        marginBottom={"5rem"}
      >
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          borderBottom={"1px solid gray"}
          paddingBottom={"0.5rem"}
        >
          Other Ways In Which We Can Help :)
        </Text>
        <Text paddingTop={"0.5rem"} color={"gray"} marginBottom={"1rem"}>
          Apart from catering as a free platform to post your internship and
          hire interns, we also provide an array of other services that may
          interest you :) !
        </Text>

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            width={"30%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/Annual-Intern.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Annual Intern Recruitment
            </Text>
            <Text>
              If you are an organization that works extensively with interns and
              needs them all round the year, we offer specialized solutions to
              make your job easier and faster!
            </Text>
          </Stack>
          <Stack
            width={"30%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/Annual-Intern.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Junior Employee Recruitment
            </Text>
            <Text>
              Apart from interns, if you are also looking to hire full time job
              candidates in the 0-3 years experience range, you may want to talk
              to our specialized hiring team :)
            </Text>
          </Stack>
          <Stack
            width={"30%"}
            padding={"0.5rem 0.5rem 0.5rem 0.5rem"}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          >
            <Img
              src="https://assets.interntheory.com/creative/stepIcons/Annual-Intern.png"
              height={"40%"}
              width={"28%"}
              margin={"auto"}
            />
            <Text color={"red"} fontSize={"xl"} fontWeight={"bold"}>
              Youth Marketing & Campus Activations
            </Text>
            <Text>
              With a solid Pan-India Campus ambassador Network and a reach of
              more than 5 Lakh students and 2000 colleges, we help companies who
              wish to run student marketing campaigns among the 18-24 age group.
            </Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default CompanyRegisterPage;
