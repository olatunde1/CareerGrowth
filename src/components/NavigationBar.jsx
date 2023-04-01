import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Container,
  useColorModeValue,
  useDisclosure,
  useColorMode,

} from '@chakra-ui/react';
// import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
  
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from './images/logo.svg'


export default function WithSubnavigation() {
  
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onToggle } = useDisclosure();

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
            </Stack>
        </Flex>
        
    </Box>
  
    </Container>
  
    
  );
}
