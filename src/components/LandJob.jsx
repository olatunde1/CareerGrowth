import {
    Container,
    Heading,
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react';
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW={'5xl'} marginBottom={'100.5px'}>
        <Stack
        
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          >
        
          <Heading
            width={{md:'700px'}}
            fontWeight={700}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
           Land your dream job in Tech &{' '}
            <Text as={'span'} color={'#0077FE'}>
            10x your income.
            </Text>
          </Heading>
          <Text
          paddingBottom={{base:'120px', md:'48px'}}
          width= {{md:'693px'}}
          height={'56px'}
          fontFamily={'Satoshi'}
          fontStyle={'normal'}
          fontWeight={'400'}
          fontSize={'20px'}
          lineHeight={'28px'}
          textAlign={{md:"center", base:'center'}}
          letterSpacing={'-0.18px'}
          color={'#001F42'}>
          Get the skills and support you need to land your dream job in tech and multiply <br /> your income with our Career Accelerator.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
                px={'88px'}
                color={'#0077FE'}
                colorScheme={'#0077FE'}
                bg={'#EEF6FF'}
                _hover={{ bg: '#0077FE', color: '#ffff' }}>
              Join Now
            </Button>
            <Button 
               px={'88px'}
                color={'#0077FE'}
                colorScheme={'#0077FE'}
                bg={'#EEF6FF'}
                 _hover={{ bg: '#0077FE', color: '#ffff' }}>
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    );
  }
  
