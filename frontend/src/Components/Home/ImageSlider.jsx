import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = () => {
  const slides = [
    {
      img: "https://assets.interntheory.com/img/testimonial-image/in1.jpg",
      id: 3763,
      name: "Sshikha Bodwaani",
      posting: "Sr. Exec. HR at BookMyShow",
      description:
        "We have been using InternTheory for over a year now and are very happy with the quality of applications that we receive. Their team has been very helpful in screening applications for the various internship requirements we had. It has been a delight working with them.",
    },
    {
      img: "https://assets.interntheory.com/img/testimonial-image/in2.jpg",
      id: 3764,
      name: "Siddharth Viyyapu",
      posting: "Intern at Gooseberry Homes",
      description:
        "I created my profile because I had before Intern Theory, not come across a consultancy that would execute the responsibility of getting a result for your application irrespective of being failure or success the way they did. They've set the bars really high! Kudos team!",
    },
    {
      img: "https://assets.interntheory.com/img/testimonial-image/in4.jpg",
      id: 3765,
      name: "Harshil Bhadra",
      posting: "Intern at Porsche",
      description:
        "If you are more than satisfied with a particular product/firm who gives you more than you expect then there’s no need to find a substitute. Its similar with Intern Theory, the best team who makes continuous efforts and always ready to help! Thanks for giving me the best start.",
    },
    {
      img: "https://assets.interntheory.com/img/testimonial-image/in3.jpg",
      id: 3766,
      name: "Amani Nagda",
      posting: "Intern at Viacom 18",
      description:
        "I was on a look out for an internship to spend my summer productively and I stumbled upon Inter Theory. Their team was very kind and kept me updated. I applied for Viacom18 and got through. I thank Intern Theory team for giving me this opportunity.",
    },
  ];
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      {slides.map((slide) => {
        return (
          
          <Box
            key={slide.id}
            width="80%"
            // margin="auto"
            height="auto"
            // border="1px solid red"
            display="flex"
            backgroundColor="rgb(238, 238, 238);"
            borderTopRightRadius="100px"
            borderBottomLeftRadius="100px"
            margin="2% 10% 2% 10%"
          >
            <Box
              height="auto"
              width="30%"
              padding="2rem"
              borderRight="1px solid  #ddd"
            >
              <Box
                width="100px"
                margin="auto"
                textAlign="center"
                padding="5px 20px"
              >
                <Image
                  borderRadius="50%"
                  width="90px"
                  height="70px"
                  src={slide.img}
                />
              </Box>
              <Heading lineHeight="1.33" as="h5" size="lg">
                {slide.name}
              </Heading>
              <span
                style={{
                  fontWeight: 800,
                  color: "#087CDD",
                  lineHeight: 1.66,
                  letterSpacing: "0.03333em",
                  fontSize: "0.75em",
                }}
              >
                {slide.posting}
              </span>
            </Box>
            <Box
              //   border="1px solid blue"
              height="auto"
              width="60%"
              textAlign="left"
              margin="auto"
              color="#666"
              padding="5px"
              fontSize="14px"
              fontStyle="italic"
              lineHeight="20px"
            >
              {slide.description}
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
