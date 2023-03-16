import React from "react"
import { Box, Image,Text,Heading,Button } from '@chakra-ui/react'
import join from './images/Image.png'
const JoinOurCommunity = () => {
  return (
    <Box 
      height={'509px'}
      display={'flex'}
      backgroundColor={'#001630'}
      color={'#ffffff'}
      direction={{ base: 'column', sm: 'row', md:'row' }}
      overflow='hidden'
      variant='outline'
      // margin={'0 auto'}

    >
      <Box
        fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
        lineHeight={'60px'}
      >
         
            
              <Box>
              <Text
                width={'940px'}
                paddingLeft={'160px'}
                fontFamily='Epilogue'
                fontStyle={'normal'}
                fontWeight={'600'}
                fontSize={'44px'}
                lineHeight={'60px'}
                letterSpacing={'-0.98px'}
                paddingTop='131.5px'>
                Join our community today <br /> to<Text color={'#0077FE'} as={'span'}>
                      {' '} fast-track</Text>{' '}your<Text color={'#0077FE'} as={'span'}  > tech <br /> career
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
            objectFit='cover'
            maxW={{ base: '100%', sm: '100%' }}
            height={'509px'}
            src={join}
            alt='Caffe Latte'
          />
      </Box>

    </Box>
  )
}

export default JoinOurCommunity

