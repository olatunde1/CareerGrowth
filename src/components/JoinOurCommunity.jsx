import React from "react"
import { Box, Image,Text,Button,Container } from '@chakra-ui/react'
import join from './images/Image.png'
const JoinOurCommunity = () => {
  return (
    <Container maxW={'container'}>
        <Box 
      width={{base:'', md:'full'}}
      height={{base:'', md:'509px'}}
      display={'flex'}
      backgroundColor={'#001630'}
      color={'#ffffff'}
      flexDirection={{ base: 'column', md:'row' }}
      overflow='hidden'
      variant='outline'
      padding={'0 auto'}

    >
      <Box
        fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
        lineHeight={'60px'}
      >
        <Box>
              <Text
                width={{ base: '514.08px', md: '740px'}}
                paddingLeft={'160px'}
                fontFamily='Epilogue'
                fontStyle={'normal'}
                fontWeight={'600'}
                fontSize={{ base: '24px', md: '44px'}}
                lineHeight={'60px'}
                letterSpacing={'-0.98px'}
                paddingTop='131.5px'>
                Join our community today to<Text color={'#0077FE'} as={'span'}>
                      {' '} fast-track</Text>{' '}your<Text color={'#0077FE'} as={'span'}  > tech  career
              </Text>
              </Text>
              <Button
                 marginTop={'18px'}
                fontFamily='Epilogue'
                variant='solid'
                colorScheme='blue'
                marginLeft={'160px'}
                color={'#ffffff'}
                px={'92px'}
                backgroundColor={'#01E7FF'}
                _hover={{ bg: '#01E7FF', color: '#ffff' }}>
                Join Now
              </Button>
        </Box>

      </Box>
      <Box 
        // marginLeft={'90.14px'}
        marginRight={'115.19px'}
      >
        <Image
            objectFit='contain'
            maxWidth={{ base: '100%', md: '100%' }}
            height={'509px'}
            src={join}
            alt='Caffe Latte'
          />
      </Box>

    </Box>
    </Container>
  )
}

export default JoinOurCommunity

