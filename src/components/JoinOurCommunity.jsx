import React from "react"
import { Card, Image,Stack,Text,Heading,Button, CardBody, CardFooter } from '@chakra-ui/react'
import join from './images/Image.png'
const JoinOurCommunity = () => {
  return (
    <Card
        backgroundColor={'#001630'}
        color={'#ffffff'}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
    >

  <Stack>
    <CardBody>

      <Text
        textAlign={'justify'}
        width={'740px'}
        paddingLeft={'160px'}
        // fontFamily={'Satoshi'}
        fontStyle={'normal'}
        fontWeight={'600'}
        fontSize={'44px'}
        lineHeight={'60px'}
        // letterSpacing={'-0.98px'}
       
      py='2'>
        Join our community today <br /> to fast-track your tech <br /> career
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '100%' }}
    height={'509px'}
    src={join}
    alt='Caffe Latte'
  />
</Card>
  )
}

export default JoinOurCommunity

