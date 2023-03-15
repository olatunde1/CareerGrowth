import React from "react"
import { Box, Image,Text,Heading,Button } from '@chakra-ui/react'
import join from './images/Image.png'
const JoinOurCommunity = () => {
  return (
    <Box 
      display={'flex'}
      backgroundColor={'#001630'}
      color={'#ffffff'}
      direction={{ base: 'column', sm: 'row', md:'row' }}
      overflow='hidden'
      variant='outline'

    >
      <Box>
          <Heading fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
                    width={{md:'478px'}}
                    height={{md:'120px'}}
                    lineHeight={'60px'}>
              <Text
                textAlign={'justify'}
                width={'940px'}
                paddingLeft={'160px'}
                // fontFamily={'Satoshi'}
                fontStyle={'normal'}
                fontWeight={'600'}
                fontSize={'44px'}
                lineHeight={'60px'}
                // letterSpacing={'-0.98px'}
              
              py='2'>
                Join our community today <br /> to<Text color={'#0077FE'} as={'span'}>
                      {' '} fast-track</Text>{' '}your<Text color={'#0077FE'} as={'span'}  > tech <br /> career
              </Text>
              </Text>
            </Heading>
            <Button variant='solid' colorScheme='blue'>
                Join Now
              </Button>


      </Box>
      <Box 
        marginLeft={'500.14px'}
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

