import {
    Heading,
    Stack,
    Text,
    Button,
    Container,
    Box,
    Image
  } from '@chakra-ui/react';
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
  import {faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons'
  import 'animate.css';


  export default function CallToActionWithIllustration() {
   ;
    return (
        <Box>
           <Container maxW='container.xl'>
           <Stack
          // width={'100vw'}
          textAlign={'center'}
          align={{sm:'center', base:'center', md:'center'}}
          spacing={{ base: 8, md: 10 }}
          py={{ base: '4px', md: 32 }}
          >
          
            <Heading
            className='animate__animated animate__bounceIn'
              width={{base:'360.56px', md:'1074px'}}
              fontWeight={{base:'500', md:'700'}}
              fontFamily='Epilogue'
              fontSize={{ base: '38px', md: '84px' }}
              lineHeight={{base:'96.18%', md:'86px'}}
              letterSpacing={{base:'0.01em', md:'0px'}}
              >
              
            Land your dream job in Tech &
              <Text as={'span'} color={'#0077FE'}>
              10x your income.
              </Text>
            </Heading>
          
        
          <Text
          
          paddingBottom={{base:'72px', md:'48px'}}
          width= {{base:'345.49px', md:'693px'}}
          height={'56px'}
          fontFamily={'Satoshi'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={{base:'16px', md:'20px'}}
          lineHeight={'24px'}
         
          textAlign={'center'}
          letterSpacing={'-0.18px'}
          color={'#001F42'}>
          Get the skills and support you need to land your dream job in tech and multiply your income with our Career Accelerator.
          </Text>
        
          
          <Stack spacing={6} direction={'row'}>
            <Button
                fontFamily='Epilogue'
                px={{base:'48px', md:'88px'}}
                fontSize={'16px'}
                fontWeight={'600'}
                color={'#ffffff'}
                colorScheme={'#0077FE'}
                bg={'#0077FE'}
                _hover={{ bg: '#0d72e5', color: '#ffff' }}>
              Join Now
            </Button>
            <Button 
                fontFamily='Epilogue'
                fontSize={'16px'}
                fontWeight={'600'}
                color={'#0077FE'}
                colorScheme={'#0077FE'}
                bg={'#EEF6FF'}
                 _hover={{ bg: '#0077FE', color: '#ffff' }}>
              Contact Us &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className='icon' icon={faArrowUpRightDots} />
            </Button>
          </Stack>
        </Stack>
           </Container>
       
      </Box>
      
    );
  }
  
