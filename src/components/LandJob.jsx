import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Box,
    Image
  } from '@chakra-ui/react';
  import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
  import {faArrowUpRightDots} from '@fortawesome/free-solid-svg-icons'
  
  export default function CallToActionWithIllustration() {
    return (
      <Box>
          <Container maxW={'container.lg'} marginBottom={'100.5px'} >
        <Stack
          width={{ md:'5xl'}}
          textAlign={'center'}
          align={{base:'start', md:'center'}}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 32 }}
          >
        
          <Heading
            width={{base:'350.56px', md:'1074px'}}
            fontWeight={{base:'500', md:'700'}}
            fontFamily='Epilogue'
            fontSize={{ base: '36px', sm: '4xl', md: '5.25rem' }}
            lineHeight={'96.18%'}
            textAlign={'center'}
            >
            
           Land your dream job in Tech &{' '}
            <Text as={'span'} color={'#0077FE'}>
            10x your income.
            </Text>
          </Heading>
          <Text
          paddingBottom={{base:'72px', md:'48px'}}
          width= {{base:'305.49px', md:'693px'}}
          height={'56px'}
          fontFamily={'Satoshi'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={{base:'16px', md:'20px'}}
          lineHeight={'24px'}
          // textAlign={{base:'center', md:"center"}}
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
                color={'#0077FE'}
                colorScheme={'#0077FE'}
                bg={'#EEF6FF'}
                _hover={{ bg: '#0077FE', color: '#ffff' }}>
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
  
