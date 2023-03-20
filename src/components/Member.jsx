import {
    Container,
    Heading,
    Stack,
    Text,
    Box,
    Image,
    Button,
    Card, CardHeader, SimpleGrid
  } from '@chakra-ui/react';
  import { Fade,Zoom} from 'react-awesome-reveal';

  import Group1 from './images/Group1.png'
  import Group2 from './images/Group2.png'
  import Group3 from './images/Group3.png'
  import GroupVector from './images/GroupVector.png'
  import GroupVector2 from './images/GroupVector2.png'
  
  
  
  export default function CallToActionWithIllustration() {
    return (
      <Box paddingBottom={'100.5px'} backgroundColor={'#F6F7F9'} >
        <Stack
          textAlign={'center'}
          align={{base:'center', md:'center'}}
          spacing={{ base: 8, md: 1 }}
          py={{ base: 20, md: 24 }}
          >
        
          <Heading
            width={{base:'333.95px', md:'700px'}}
            fontWeight={600}
            paddingBottom={{base:'4px', md:'24px'}}
            fontFamily='Epilogue'
            fontSize={{ base: '28px', sm: '4xl', md: '3rem' }}
            lineHeight={{base:'29px', md:'24px'}}>
            How to become a member ?
          </Heading>
          <Text
          paddingBottom={{base:'16px', md:'24px'}}
          width={{base:'333.95px', md:'693px'}}
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
                fontFamily='Epilogue'
                px={{base:'74px', md:'88px'}}
                fontSize={'16px'}
                color={'#ffffff'}
                colorScheme={'#0077FE'}
                bg={'#0077FE'}
                _hover={{ bg: '#0077FE', color: '#ffff' }}>
              Join Now
            </Button>
          </Stack>
        </Stack>
        <Stack direction={{ base: 'column', md:'row' }} width={{base:'375px', md:'1400px'}} margin={'0 auto'} paddingLeft={{base:'0px', md:'164px'}} >
         
          <Card backgroundColor={'transparent'} paddingRight={{base:'0px',md:''}} border='none' variant={'unstyled'} align={{base:'center', md:'start'}} >
           
            <CardHeader>
          
            <Fade left right duration={1000} delay={1000}>
             <Image src={Group1} Width={'130px'} height={'100%'}/></Fade> </CardHeader>
             
            <Text
              fontFamily='Epilogue'
              fontWeight={'600'}
              paddingTop={'36px'}
              paddingBottom={'30px'}
              textAlign={{base:'center', md:'justify'}}
              fontSize={'30px'}
              lineHeight={'31px'}
            >Sign Up</Text> 
              <Zoom left cascade>
            <Text
              fontFamily={'Satoshi'}
              textAlign={{base:'center', md:'start'}}
              fontSize={{base:'16px', md:'20px'}}
              fontWeight={'400'}
              width={{base:'303px', md:'240px'}}
              lineHeight={'150%'}
            >Sign up for the Career Growth subscription program.</Text></Zoom>

          </Card>   
          <Image src={GroupVector} paddingTop={'42px'} Width={'130px'} height={'100%'} display={{base:'none', md:'flex'}}/>
          <Card backgroundColor={'transparent'} paddingLeft={{base:'0px',md:'72px'}}  paddingRight={{base:'0px',md:'0px'}} border='none' variant={'unstyled'} align={{base:'center', md:'start'}} >
          <CardHeader> 
            <Fade duration={1000} delay={1000}>
              <Image src={Group2} Width={'130px'} height={'100%'} />  
            </Fade>  </CardHeader>
            <Zoom right cascade>
              <Text
                fontFamily='Epilogue'
                fontWeight={'600'}
                paddingTop={'42px'}
                paddingBottom={'30px'}
                textAlign={{base:'center', md:'justify'}}
                fontSize={'30px'}
                lineHeight={'31px'}
              >Gain Access</Text>
              <Text
                fontFamily={'Satoshi'}
                textAlign={{base:'center', md:'start'}}
                fontSize={{base:'16px', md:'20px'}}
                fontWeight={'400'}
                width={{base:'303px', md:'240px'}}
                lineHeight={'150%'}
              >Gain access to practical skills training, career guidance, mentorship, and a supportive community of like-minded individuals.</Text></Zoom>
      
          </Card>
          <Image src={GroupVector2} paddingTop={'42px'} Width={'130px'} height={'100%'} display={{base:'none', md:'flex'}}/>
          <Card backgroundColor={'transparent'}  paddingLeft={{base:'opx',md:'63px'}} border='none' variant={'unstyled'} align={{base:'center', md:'start'}} >
          <CardHeader> <Image src={Group3}  Width={'130px'} height={'100%'} /></CardHeader>
          <Zoom down cascade>
              <Text
                fontFamily='Epilogue'
                fontWeight={'600'}
                paddingTop={'47px'}
                paddingBottom={'30px'}
                textAlign={{base:'center', md:'justify'}}
                fontSize={'30px'}  
                lineHeight={'31px'}       
              >Fast-track</Text>
              <Text
                fontFamily={'Satoshi'}
                textAlign={{base:'center', md:'start'}}
                fontSize={{base:'16px', md:'20px'}}
                fontWeight={'400'}
                lineHeight={'150%'}
                width={{base:'303px', md:'240px'}}
              >Fast-track your career in tech and land your dream job.</Text></Zoom>
          </Card>
        </Stack>
      </Box>
    );
  }
  
