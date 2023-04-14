import React, {useEffect} from "react"
import { Box, Image,Text,Button,Container,Stack,Link } from '@chakra-ui/react'
import join from './images/newJoin.svg'
import join2 from './images/mobileTestimonial.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const JoinOurCommunity = () => {
  useEffect(()=> {
    AOS.init({
      duration:2000,
      once:true
    
    });
  }, [])

  return (
    // <Container maxW={'container'}>
   <Box

   className="JoinOurCommunity"
   height={{base:'', md:'470px'}}
    // maxWidth='100%'
    // display={'flex'}
    backgroundColor={'#001630'}
    color={'#ffffff'}
    // flexDirection={{ base: 'column', md:'row' }}
    
   
    // overflowY='visible'
    // overflowX='hidden'
    // zIndex='-1'
    // variant='outline'
     >

    <Container maxW='container.xl'>
      <Stack display={{base:'none', md:'block'}}>
        <Box 
        display={{base:'column',md:'row'}}
        height={{base:'', md:'470px'}}
        position='relative'
        width={{base:'', md:'1200px'}} 
        // backgroundColor='yellow.400'
      
        
        >
        <Box
          width={{ base: '360.86px', md: '740px'}}
          fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
          lineHeight={'60px'}
          paddingLeft='30px'
                   
        >

            
          <Text
            
            // data-aos="fade-left"
            // data-aos-easing="linear"
            // data-aos-duration="1500"

            
            textAlign={{md:'left'}}
            width={{ base: '380.86px', md: '600px'}}
            fontFamily='Epilogue'
            fontStyle={'normal'}
            fontWeight={'600'}
            fontSize={{ base: '24px', md: '44px'}}
            lineHeight={'60px'}
            letterSpacing={'-0.98px'}
            paddingTop={{base:'45px', md:'131.5px'}}>
            Join our community today to<Text color={'#0077FE'} as={'span'}>
                  {' '} fast-track</Text>{' '}your<Text color={'#0077FE'} as={'span'}  > tech  career
          </Text>
          </Text>
          
            {/* Desktop text button */}
            <Link href='https://api.whatsapp.com/send?phone=+2349128700116&text=Hello, I will like to make an enquiry' style={{textDecoration:'none'}}>
            <Button
              display={{base:'none', md:'block'}}
              width={'256px'}
              marginTop={'18px'}
              fontFamily='Epilogue'
              variant='solid'
              colorScheme='blue'
              color={'#ffffff'}
              px={'92px'}
              backgroundColor={'#01E7FF'}
              _hover={{ bg: '#01E7FF', color: '#ffff' }}>
              Apply Now 
            </Button>
            </Link>

            {/* mobile text button */}
            <Link href='https://api.whatsapp.com/send?phone=+2349128700116&text=Hello, I will like to make an enquiry' style={{textDecoration:'none'}}>
            <Button
              display={{base:'block', md:'none'}}
              width={'256px'}
              marginTop={'18px'}
              fontFamily='Epilogue'
              variant='solid'
              colorScheme='blue'
              color={'#ffffff'}
              px={'92px'}
              backgroundColor={'#01E7FF'}
              _hover={{ bg: '#01E7FF', color: '#ffff' }}>
              Join Now
            </Button>
            </Link>

        </Box>


        {/* Mobile view for Join Our community section */}
        <Box 
          borderRadius={'24px'}
          display={{base:'block', md:'none'}}
         
        >
          <Image
              // data-aos="fade-down"
              // data-aos-easing="linear"
              // data-aos-duration="1500"

              marginTop={'29px'}
              objectFit='contain'
              width={{ base: '432.43px' }}
              height={{ base: '421px', md: '577.4px' }}
              src={join2}
              alt='Caffe Latte'
            />
        </Box>

        {/* Image Desktop view for Join Our community section  */}
          <Box 
            className="big"
            borderRadius={'24px'}
            display={{base:'none', md:'block'}}
            // marginLeft={'100.19px'}
            // marginLeft='300px'
            // overflowX='hidden'
            // marginRight={'1105.19px'}
          >
        
            <Image

              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            
              top='-90px'
              left='390px'
              position='absolute'
              objectFit='contain'
              width={{ md: '100%', base:'null' }}
              height={{ base: '421px', md: '677.4px' }}
              src={join}
              alt='Caffe Latte'
              />
          </Box>
        </Box>
      </Stack>






     
      {/******** ****Mobile section code for Join our community today********/}



      <Stack align='center' display={{base:'block', md:'none'}}>
      <Box 
      align='center'
      display={{base:'column',md:'row'}}
      height={{base:'', md:'65.8vh'}}
      position='relative'
      // width={{base:'', md:'100%'}} 
     
      
      >
      <Box
        width={{ base: '360.86px', md: '740px'}}
        fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
        lineHeight={'60px'}
        
      >

          
        <Text
          
          // data-aos="fade-left"
          // data-aos-easing="linear"
          // data-aos-duration="1500"

          
          textAlign={{md:'left'}}
          width={{ base: '380.86px', md: '600px'}}
          fontFamily='Epilogue'
          fontStyle={'normal'}
          fontWeight={'600'}
          fontSize={{ base: '24px', md: '44px'}}
          lineHeight={'60px'}
          letterSpacing={'-0.98px'}
          paddingTop={{base:'45px', md:'131.5px'}}>
          Join our community today to<Text color={'#0077FE'} as={'span'}>
                {' '} fast-track</Text>{' '}your<Text color={'#0077FE'} as={'span'}  > tech  career
        </Text>
        </Text>
        
          {/* Desktop text button */}
          <Link href='https://api.whatsapp.com/send?phone=+2349128700116&text=Hello, I will like to make an enquiry' style={{textDecoration:'none'}}>
          <Button
             display={{base:'none', md:'block'}}
            width={'256px'}
            marginTop={'18px'}
            fontFamily='Epilogue'
            variant='solid'
            colorScheme='blue'
            color={'#ffffff'}
            px={'92px'}
            backgroundColor={'#01E7FF'}
            _hover={{ bg: '#01E7FF', color: '#ffff' }}>
            Join Now
          </Button>
          </Link>

          {/* mobile text button */}
          <Link href='https://api.whatsapp.com/send?phone=+2349128700116&text=Hello, I will like to make an enquiry' style={{textDecoration:'none'}}>
          <Button
            display={{base:'block', md:'none'}}
            width={'256px'}
            marginTop={'18px'}
            fontFamily='Epilogue'
            variant='solid'
            colorScheme='blue'
            color={'#ffffff'}
            px={'92px'}
            backgroundColor={'#01E7FF'}
            _hover={{ bg: '#01E7FF', color: '#ffff' }}>
            Join Now
          </Button>
          </Link>
        
        

      </Box>


      {/* Mobile view for Join Our community section */}
      <Box 
        borderRadius={'24px'}
        display={{base:'block', md:'none'}}
        // marginRight={'115.19px'}
      >
        <Image
            // data-aos="zoom-out"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"

            marginTop={'29px'}
            objectFit='contain'
            width={{ base: '432.43px' }}
            height={{ base: '421px', md: '577.4px' }}
            src={join2}
            alt='Caffe Latte'
          />
      </Box>

      {/* Image Desktop view for Join Our community section  */}
        <Box 
        className="big"
          borderRadius={'24px'}
          display={{base:'none', md:'block'}}
          marginLeft='300px'
          // overflowX='hidden'
          // marginRight={'1105.19px'}
        >
      
          <Image

            // data-aos="zoom-out"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="2000"
            
           
            top='-90px'
            // left='290px'
            position='absolute'
            objectFit='contain'
            width={{ md: '100%', base:'null' }}
            height={{ base: '421px', md: '677.4px' }}
            src={join}
            alt='Caffe Latte'
            />
        </Box>
      </Box>
      </Stack>
    </Container>
</Box>


   
  )
}

export default JoinOurCommunity

