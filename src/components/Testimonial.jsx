import React, { useState } from "react";
import { Box,Image,Stack,Text,Heading,useBreakpointValue } from "@chakra-ui/react";
import image2 from './images/shayla.jpg'
import testImage from './images/testimonial.jpg'
import adebiyi from './images/adebiyi.png'
import shayla from './images/shayla.png'


function Testimonials() {
  const testimonialsArray = [
    {
      id: 1,
      name: "Adebiyi Abiola",
      title: "Good COmpany",
      description:
        "“I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!.”",
      image: testImage,
      image2: testImage,
      passport: adebiyi,
      jobDesc: "Full-stack developer, Stealth®"
    },
    {
      id: 2,
      name: "Shayla Nico",
      title: "Good CO",
      description:
        "“I can't thank the Career Growth enough for the incredible impact it's had on my career. With the help of their mentorship program and weekly sessions, I gained the skills and confidence I needed to succeed in interviews and land my dream job. Not only that, but the program also helped me negotiate a higher salary than I ever thought possible. I highly recommend the Career Growth community to anyone looking to take their tech career to the next level!.”",
      image: image2,
      image2: testImage,
      passport: shayla,
      jobDesc: "Data Analyst, Luta®"
    },
    // {
    //   id: 3,
    //   name: "Kuti Ola",
    //   title: "foood COmpany",
    //   description:
    //     "lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum ",
    //   image: "http://placehold.it/",
    // },
    // {
    //   id: 4,
    //   name: "Abiola Babatunde",
    //   title: "Good COmpany",
    //   description:
    //     "lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum lorem Ipsum is Lorem Ipsum ",
    //   image: "http://placehold.it/",
    // },
  ];
  const [testimonialBody, setTestimonialBody] = useState(testimonialsArray[0]);

  return (
   <Box align='center'>
       <Box  maxWidth={'100%'}  paddingBottom={{md:'30px', lg:'129px'}} >
      
      {/* active testimonial */}
      <Box>
          <Text
            width={{base:'355.74px', md:'1120px'}}
            display={{base:'none', md:'block'}}
            color={'#01E7FF'}
            fontSize={'14px'}
            letterSpacing={'1.25px'}
            textAlign={{base:'center', md:'left'}}
            fontWeight={'500'}
            fontFamily='Epilogue'
            paddingTop={{base:'38.63px',md:'57px'}}
            paddingBottom={{base:'16px',md:'16px'}}
            >
            TESTIMONIALS
          </Text>

          <Heading
          
          display={{base:'none', md:'block'}}
          fontSize={{ base: '28px', md: '48px', lg: '48px' }}
          width={{base:'355.74px', md:'1120px'}}
          height={{md:'120px'}}
          textAlign={{base:'center', md:'left'}}
          lineHeight={{base:'29px', md:'60px'}}
          marginLeft={{base:'27.13px', md:'0'}}
          >
            <Text
              fontFamily='Epilogue'
              fontWeight={'600'}
              color={'#001F42'}
              lineHeight={{base:'29px', md:'60px'}}
              fontStyle={'normal'}
              as={'span'}
              position={'relative'}
             
              >
             Hear from 
            </Text>
            <Text color={'#0077FE'} as={'span'}>
            {' '}  our members
            </Text>{' '}{' '}
          </Heading>
      </Box>


    {/*This is the testimonial for mobile section  */}
      <Box
        width={{base:'405px', md:'1120px'}}
        height={{base:'753px', md:'500px'}}
        display={{base: 'column',md:'flex'}}
        backgroundColor={'#EBEBF4'}
        borderRadius={'16px'}
        
        // marginTop={{base:'0px',md:'px'}}
        // borderRadius={'20px'}  
      >
           <Text color={'#01E7FF'}
              display={{base:'block', md:'none'}}
              fontSize={'14px'}
              letterSpacing={'1.25px'}
              textAlign={{base:'center', md:'left'}}
              fontWeight={'500'}
              fontFamily='Epilogue'
              paddingTop={{base:'38.63px',md:'57px'}}
              paddingBottom={{base:'16px',md:'16px'}}
          >
             TESTIMONIALS </Text>

          <Heading
            display={{base:'block', md:'none'}}
            fontSize={{ base: '28px', md: '48px', lg: '48px' }}
            width={{base:'355.74px', md:'606.07px'}}
            height={{md:'120px'}}
            textAlign={{base:'center', md:'left'}}
            lineHeight={{base:'29px', md:'60px'}}
            marginLeft={{base:'27.13px', md:'0'}}
            marginBottom={'24px'}
          >
            <Text
              fontFamily='Epilogue'
              fontWeight={'600'}
              color={'#001F42'}
              lineHeight={{base:'29px', md:'60px'}}
              fontStyle={'normal'}
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                
                // left: 0,
              }}>
             Hear from 
            </Text>
            <Text color={'#0077FE'} as={'span'}>
            {' '}  our members
            </Text>{' '}{' '}
          </Heading>
        <Image 
          src={ testimonialBody.image}
          fit={'cover'}
          height={{base:'253.9px', md:'500px'}}
          width={{base:'70%', md:'100%'}}
          marginLeft={{base:'null', md:'85px'}}
          // paddingTop={{base:'24px', md:''}}
          borderRadius={'16px'}
          display={{base:'block', md:'none'}}

          />
           <Text
            align={'justify'}
            width={{base:'', md:'582.29px'}}
            display={{base:'block', md:'none'}}
            height={{base:'220px', md:'248px'}}
            fontSize={{base:'16px', md:'22px'}}
            fontFamily={'Satoshi'}
            fontStyle={'normal'}
            lineHeight={{base:'26px', md:'140%'}}
            color={'#001F42'}
            paddingTop={'48.84px'}
            // paddingBottom={'95.18px'}
            paddingLeft={'30px'}
            paddingRight={'34px'}
            

          >{testimonialBody.description}</Text>

          {/* large screen testimonial div/Box */}

        <Box>
          
          <Text
            align={'left'}
            className="textBody"
            width={{base:'341.6px', md:'580.29px'}}
            display={{base:'none', md:'block'}}
            height={{base:'220px', md:'248px'}}
            fontSize={{base:'16px', md:'22px'}}
            fontFamily={'Satoshi'}
            fontStyle={'normal'}
            lineHeight={{base:'22px', md:'140%'}}
            color={'#001F42'}
            paddingTop={'156px'}
            paddingBottom={'95.18px'}
            paddingLeft={'60px'}
            animation={'ease-in'}

          >{testimonialBody.description}</Text>
         </Box>
        
          <Image 
            className={'passPort'}
          src={ testimonialBody.image}
          height={'500px'} width={'454px'}
          marginLeft={{base:'', md:'85px'}}
          fit={'cover'}
          display={{base:'none', md:'block'}}
          borderBottomRightRadius={'16px'}
          borderTopRightRadius={'16px'}
          // color={'gray'}
          // opacity={'0.8'}
          />
        
        </Box>


      {/* testimonial small card list */}
    
    <Box
      
      align='start'
      display={{base:'flex', md:'flex'}} 
      className="flex"
      marginTop={'60px'}
      paddingLeft={{base:'2px',md:'11px'}}
      width={{base:'479px', md:'1100px'}}
      overflow={{base:'hidden', md:'visible'}}
     
      >
      {testimonialsArray.map((item, idx) => (
        <div
          className={` ${item.id===testimonialBody.id?'active':'inActive'} smallCard`}
          key={idx}
          onClick={() => {
            // console.log(item)
            setTestimonialBody(item);
          }}
        >
          <Image 
          src={item.passport}
          marginRight={{base:'0px',md:'20px'}}
          width={'60px'} height={'70px'}
          paddingBottom={'21px'}   />
          <Box width={{base:'250px', md:'250px'}} overflow={'hidden'} paddingLeft={{base:'12px', md:'0px'}}  >
            <Text
              paddingTop={'6px'}
              className="userName"
              fontFamily={'Epilogue'}
              fontWeight={'500'}
              color={'#001630'}
              fontSize={{base:'14px', md:'18px'}} 
              lineHeight={'140%'}
            >{item.name}</Text>
            <Text
              fontFamily={'Satoshi'}
              fontWeight={'500'}
              fontSize={{base:'12px', md:'14px'}} 
              lineHeight={'140%'}
            >{item.jobDesc}</Text>
          </Box>
         
        </div>
      ))}
    </Box>
  </Box>
   </Box>
    
  );
}

export default Testimonials;