import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Container,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import logo from './images/logo.svg'


export default function WithSubnavigation() {

  return (
    <Container maxW='container.xl'>
    <Box>
        
        <Flex
          color={useColorModeValue('gray.600', 'white')}
          py={{ base: 8, md: 8 }}
          px={{ base: 1 }}
          // marginRight={{base:'0px'}}
        >          
          <Stack flex={{ base: 'center',md:'1' }} margin={{base:'0 auto'}} width={'200.16px'} height='76px' >
            <Box>
              <Image src={logo} />
            </Box>
          </Stack>

          <Stack spacing={6}
          direction={'row'}
          >
            
            <Link href='https://api.whatsapp.com/send?phone=+2348074511396&text=Hello, I will like to make an enquiry' style={{textDecoration:'none'}}>
              <Button
                className='btn'
                fontFamily='Inter'
                display={{base:'none', md:'flex'}}
                px={ '32px'}
                fontSize={'14px'}
                fontWeight={'600'}
                border={'1px solid #E6E6E6 '}
                bg={'#ffffff'}
                _hover={{ bg: '#0077FE', color: '#ffff' }}>
                  
                  Contact Us
                 
                
              </Button>
              </Link>

              <Link href='https://api.whatsapp.com/send?phone=+2348074511396&text=Hello, I will like to make an enquiry' style={{textDecoration:'none'}}>
              <Button 
                //  px={'88px'}
               
                
                  display={{base:'none', md:'flex'}}
                  fontFamily='Inter'
                  fontSize={'14px'}
                  fontWeight={'600'}
                  border={'1px solid #E6E6E6 '}
                  color={'#ffffff'}
                  bg={'#0077FE'}
                  _hover={{ bg: '#0d72e5', color: '#ffff' }}>
                Apply Now &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className='icon' icon={faArrowRight} />
              </Button>
              </Link>
            </Stack>
        </Flex>
        
    </Box>
  
    </Container>
  
    
  );
}
