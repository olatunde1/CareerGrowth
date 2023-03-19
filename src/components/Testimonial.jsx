import React, { useState } from "react";
import { Box,Image,Text } from "@chakra-ui/react";
import image1 from './images/testimonial.png'

function Testimonials() {
  const testimonialsArray = [
    {
      id: 1,
      name: "Adebiyi Abiola",
      title: "Good COmpany",
      description:
        "“I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!.”",
      image: image1,
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
    <Box margin={'0 auto'}>
      
        {/* //active testimonial */}
      
      
        <Box
          width={{base:'374px', md:'1120px'}}
          height={'500px'}
          display={{base: 'column',md:'flex'}}
          backgroundColor={'#EBEBF4'}
          marginTop={'188px'}
          borderRadius={'20px'}  
        >
          <Box>
            
            <Text
              // width={{base:'341.6px', md:'580.29px'}}
              height={{base:'220px', md:'248px'}}
              fontSize={{base:'16px', md:'22px'}}
              fontFamily={'Satoshi'}
              fontStyle={'normal'}
              lineHeight={{base:'22px', md:'140%'}}
              color={'#001F42'}
              paddingTop={'156px'}
              paddingBottom={'95.18px'}
              paddingLeft={'60px'}

            >{testimonialBody.description}</Text>
          </Box>
          
            <Image src={ testimonialBody.image} height={'500px'} width={'100%'} marginLeft={'85px'} objectFit={'fill'} />
          
        </Box>
        
  

      
        {/* testimonial list */}
      

      <Box className="flex"  marginTop={'60px'}>
        {testimonialsArray.map((item, idx) => (
          <div
          className="smallCard"
            key={idx}
            onClick={() => {
              // console.log(item)
              setTestimonialBody(item);
            }}
          >
            <Box>
              <p>{testimonialBody.name}</p>
              <p>Name and title</p>
            </Box>
           
          </div>
        ))}
      </Box>
    </Box>
    
  );
}

export default Testimonials;