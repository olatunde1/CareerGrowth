import React from "react"
import { Box, Image,Text,Button,Container } from '@chakra-ui/react'
import join from './images/Image.png'
import join2 from './images/mobileTestimonial.svg'
const JoinOurCommunity = () => {
  return (
    // <Container maxW={'container'}>
  <Box
    className="join"
    align='center'
    // width={{base:'', md:'100%'}}
    height={{base:'', md:'509px'}}
    display={'flex'}
    backgroundColor={'#001630'}
    color={'#ffffff'}
    flexDirection={{ base: 'column', md:'row' }}
    overflow='hidden'
    variant='outline' >

    <Container maxW='container.xl'>
      <Box display={{base:'column',md:'flex'}}>
      <Box
        width={{ base: '360.86px', md: '740px'}}
        fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
        lineHeight={'60px'}
      >

          
        <Text
          
          // margin={'0 auto'}
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
        
          <Box align='left'>
          <Button
            
            width={'256px'}
            marginTop={'18px'}
            fontFamily='Epilogue'
            variant='solid'
            colorScheme='blue'
            marginLeft={{ base: '50px', md:'64px'}}
            color={'#ffffff'}
            px={'92px'}
            backgroundColor={'#01E7FF'}
            _hover={{ bg: '#01E7FF', color: '#ffff' }}>
            Join Now
          </Button>
          </Box>

      </Box>


      {/* Mobile view for Join Our community section */}
      <Box 
        borderRadius={'24px'}
        display={{base:'block', md:'none'}}
        // marginRight={'115.19px'}
      >
        <Image
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
         borderRadius={'24px'}
        display={{base:'none', md:'block'}}
        // marginRight={'115.19px'}
      >
    
        <Image
       
            objectFit='contain'
            width={{ md: '100%' }}
            height={{ base: '421px', md: '577.4px' }}
            src={join}
            alt='Caffe Latte'
          />
      </Box>
      </Box>
    </Container>
</Box>
   
  )
}

export default JoinOurCommunity

