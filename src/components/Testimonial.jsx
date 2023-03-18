import React, { useState } from "react";
import { Box,Image } from "@chakra-ui/react";
import image1 from './images/testimonial.png'

function Testimonials() {
  const testimonialsArray = [
    {
      id: 1,
      name: "Abiola Babatunde",
      title: "Good COmpany",
      description:
        "“I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!.”",
      image: "image1",
    },
    {
      id: 2,
      name: "Afoo seun",
      title: "Good CO",
      description:
        "lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum ",
      image: "http://placehold.it/",
    },
    {
      id: 3,
      name: "Kuti Ola",
      title: "foood COmpany",
      description:
        "lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum ",
      image: "http://placehold.it/",
    },
    {
      id: 4,
      name: "Abiola Babatunde",
      title: "Good COmpany",
      description:
        "lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum ",
      image: "http://placehold.it/",
    },
  ];
  const [testimonialBody, setTestimonialBody] = useState(testimonialsArray[0]);

  return (
    <div>
      {
        //active testimonial
      }
      
        <Box
          width={{base:'374px', md:'1120px'}}
          display={{base: 'column',md:'flex'}}
        
        >
          <Box>
            {/* <Box>{testimonialBody.name}</Box>
            <Box>{testimonialBody.title}</Box> */}
            <Box
              width={{base:'341.6px', md:'580.29px'}}
              height={{base:'220px', md:'248px'}}
              fontSize={{base:'16px', md:'22px'}}
              fontFamily={'Satoshi'}
              fontStyle={'normal'}
              lineHeight={{base:'22px', md:'140%'}}
              color={'#001F42'}

            >{testimonialBody.description}</Box>
          </Box>
          <Box>
            <Image src={testimonialBody.image} height={'50px'} />
          </Box>
        </Box>
        
  

      {
        //testimonial list
      }

      <div className="flex">
        {testimonialsArray.map((item, idx) => (
          <div
          className="smallCard"
            key={idx}
            onClick={() => {
              // console.log(item)
              setTestimonialBody(item);
            }}
          >
            <div>image</div>
            <div>Name and title</div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default Testimonials;