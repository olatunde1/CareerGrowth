import {
    Container,
    Heading,
    Stack,
    Text,
    Image,
    Button,
    Card, CardHeader, SimpleGrid
  } from '@chakra-ui/react';
  
  import Group1 from './images/Group1.png'
  import Group2 from './images/Group2.png'
  import Group3 from './images/Group3.png'
  import GroupVector from './images/GroupVector.png'
  import GroupVector2 from './images/GroupVector2.png'
  
  
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'full'} paddingBottom={'100.5px'} backgroundColor={'#F6F7F9'} >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 1 }}
          py={{ base: 20, md: 28 }}
          >
        
          <Heading
            // width={{md:'700px'}}
            fontWeight={600}
            paddingBottom={{base:'120px', md:'24px'}}
            fontFamily='Epilogue'
            fontSize={{ base: '3xl', sm: '4xl', md: '3rem' }}
            lineHeight={'24px'}>
            How to become a member?
          </Heading>
          <Text
          paddingBottom={{base:'120px', md:'24px'}}
          width= {{md:'693px'}}
          height={'56px'}
          fontFamily={'Satoshi'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={'20px'}
          lineHeight={'24px'}
          textAlign={{md:"center", base:'center'}}
          letterSpacing={'-0.18px'}
          color={'#001F42'}>
          Simple steps to benefit for our large community
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
                px={'88px'}
                color={'#ffffff'}
                colorScheme={'#0077FE'}
                bg={'#0077FE'}
                _hover={{ bg: '#0077FE', color: '#ffff' }}>
              Join Now
            </Button>
          </Stack>
        </Stack>
        <SimpleGrid templateColumns='repeat(auto-fill, minmax(200px, 1fr))' marginLeft={'200px'} marginRight={'164.5px'}>
        
        <Card backgroundColor={'transparent'} border='none' variant={'unstyled'} >
          <CardHeader> <Image src={Group1} /></CardHeader>
         
          <Text
            fontWeight={'600'}
            paddingTop={'36px'}
            paddingBottom={'30px'}
            textAlign={'justify'}
            fontSize={'30px'}
            lineHeight={'31px'}
          >Sign Up</Text>
          <Text
            textAlign={'start'}
            fontSize={'20px'}
            fontWeight={'400'}
            width={'240px'}
          >Sign up for the Career Growth subscription program.</Text>

        </Card>     
        <Image src={GroupVector} marginTop={'62px'}/>
        <Card backgroundColor={'transparent'} border='none' variant={'unstyled'} >
        <CardHeader>  <Image src={Group2} /> </CardHeader>
           
            <Text
              fontWeight={'600'}
              paddingTop={'42px'}
              paddingBottom={'30px'}
              textAlign={'justify'}
              fontSize={'30px'}
              lineHeight={'31px'}
            >Gain Access</Text>
            <Text
              textAlign={'start'}
              fontSize={'20px'}
              fontWeight={'400'}
              width={'240px'}
            >Gain access to practical skills training, career guidance, mentorship, and a supportive community of like-minded individuals.</Text>
          
   
      
        </Card>
        <Image src={GroupVector2} marginTop={'62px'}/>
        <Card backgroundColor={'transparent'} border='none' variant={'unstyled'} >
        <CardHeader> <Image src={Group3}/></CardHeader>
            
            <Text
              fontWeight={'600'}
              paddingTop={'47px'}
              paddingBottom={'30px'}
              textAlign={'justify'}
              fontSize={'30px'}  
              lineHeight={'31px'}       
            >Fast-track</Text>
            <Text
              textAlign={'start'}
              fontSize={'20px'}
              fontWeight={'400'}
            >Fast-track your career in tech and land your dream job.</Text>
        </Card>
        </SimpleGrid>
      </Container>
    );
  }
  
