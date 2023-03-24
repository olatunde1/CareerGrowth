import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
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
      <Box maxWidth={'100vw'}>
        <Flex
        // bgColor={{base:'#EEF6FF', md:'gray'}}
          // bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          py={{ base: 8, md: 8 }}
          px={{ base: 1 }}
          marginRight={{base:'0px', md:'158px'}}
        >          
          <Stack flex={{ base: 'center',md:'1' }} justify={{ base: 'center',sm:'center', md: 'start' }}>
          <Box marginLeft={'80px'}>
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
                Join Now &nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className='icon' icon={faArrowRight} />
              </Button>
            </Stack>
        </Flex>
    </Box>
  
    
  );
}
