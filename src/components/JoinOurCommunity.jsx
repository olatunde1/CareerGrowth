import React from "react"
import { Box, Image,Text,Button,Container } from '@chakra-ui/react'
import join from './images/Image.png'
import join2 from './images/join2.png'
import { Zoom,Fade,Roll,Bounce,Flip,Slide,Rotate } from 'react-reveal';
const JoinOurCommunity = () => {
  return (
    // <Container maxW={'container'}>
        <Box
          className="join"
          width={{base:'', md:''}}
          height={{base:'', md:'509px'}}
          display={'flex'}
          backgroundColor={'#001630'}
          color={'#ffffff'}
          flexDirection={{ base: 'column', md:'row' }}
          overflow='hidden'
          variant='outline'

    >
      <Box
        fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
        lineHeight={'60px'}
      >
        <Box>
          <Slide left cascade>
              <Text
                margin={'0 auto'}
                width={{ base: '360.86px', md: '740px'}}
                paddingLeft={{ base: '28px', md: '160px'}}
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
              </Text></Slide>
              <Slide right cascade>
                <Button
                  marginTop={'18px'}
                  fontFamily='Epilogue'
                  variant='solid'
                  colorScheme='blue'
                  marginLeft={{ base: '91px', md: '160px'}}
                  color={'#ffffff'}
                  px={'92px'}
                  backgroundColor={'#01E7FF'}
                  _hover={{ bg: '#01E7FF', color: '#ffff' }}>
                  Join Now
                </Button>
              </Slide>
              
        </Box>

      </Box>
      <Box 
        marginLeft={{ base: '28.28px', md: '150.14px' }}  borderRadius={'24px'}
        display={{base:'block', md:'none'}}
        // marginRight={'115.19px'}
      >
        <Image
            marginTop={'29px'}
            objectFit='contain'
            width={{ base: '432.43px', md: '100%' }}
            height={{ base: '421px', md: '577.4px' }}
            src={join2}
            alt='Caffe Latte'
          />
      </Box>
      <Box 
        marginLeft={{ base: '28.28px', md: '150.14px' }}  borderRadius={'24px'}
        display={{base:'none', md:'block'}}
        // marginRight={'115.19px'}
      >
        <Fade bottom big cascade >
        <Image
       
            objectFit='contain'
            width={{ base: '432.43px', md: '100%' }}
            height={{ base: '421px', md: '577.4px' }}
            src={join}
            alt='Caffe Latte'
          /></Fade>
      </Box>

    </Box>
    // </Container>
  )
}

export default JoinOurCommunity

