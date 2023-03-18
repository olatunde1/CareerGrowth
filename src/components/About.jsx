import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Grid, GridItem, Container
  } from '@chakra-ui/react';
  import join from './images/join.png'
  import career from './images/career.png'
  import job from './images/job.png'
  import mentorship from './images/mentorship.png'
  import supportive from './images/supportive.png'

  
  export default function SplitScreen() {

    return (
      <Container maxW={'container'}>
        <Stack minH={'100vh'} margin={''} width={{base:'375px', md:'full'}}  direction={{ base: 'column', md: 'row' }} paddingLeft={{base:'2px', md:'160px'}}>
         <Flex flex={1}>
          <Image
            alt={'Join Image'}
            objectFit={'contain'}
            width={'100%'}
            height={'440px'}
            src={join}
          />
        </Flex>
        <Flex paddingLeft={{md:'96px'}} flex={1}  textAlign={'justify'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text color={'#01E7FF'}
            fontSize={'14px'}
            textAlign={{base:'center', md:'left'}}
            fontWeight={'500'}
            fontFamily='Epilogue'>
                ABOUT</Text>
            <Heading fontSize={{ base: '28px', md: '48px', lg: '48px' }}
            width={{base:'335.74px', md:'478px'}}
            height={{md:'120px'}}
            textAlign={{base:'center', md:'left'}}
            lineHeight={{base:'29px', md:'60px'}}>
              <Text
                fontFamily='Epilogue'
                fontWeight={'600'}
                lineHeight={{base:'29px', md:'60px'}}
                fontStyle={'normal'}
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                }}>
               Why you should 
              </Text>
         
              <Text color={'#0077FE'} as={'span'}>
              {' '} join
              </Text>{' '}{' '}
              <Text color={'#0077FE'} as={'span'}>
              our community
              </Text>{' '}
            </Heading>
            
            <Grid templateColumns='repeat(2, 1fr)' paddingTop={'35.15px'} gap={4}>
            <GridItem w={{ md:'100%'}} h={{base:'', md:'116.85px'}}  >
                <Image src={career} width={{base:'64px', md:'104px'}}/>
                <Text
                    paddingTop={'16px'}
                    paddingLeft={'31.59px'}
                    fontFamily={'Satoshi'}
                    fontSize={{ base: '16px', md: '20px'}}
                    fontWeight={'500'}
                    lineHeight={'28px'}
                    letterSpacing={'-0.18px'}
                >Career Guidance</Text>
            </GridItem>
            <GridItem w='100%' h={{base:'', md:'116.85px'}}  >
                <Image src={supportive} width={{base:'64px', md:'104px'}}/>
                <Text
                paddingTop={'16px'}
                paddingLeft={'31.59px'}
                fontFamily={'Satoshi'}
                fontSize={{ base: '16px', md: '20px'}}
                fontWeight={'500'}
                lineHeight={'28px'}
                letterSpacing={'-0.18px'}>Supportive Network</Text>
            </GridItem>
            <GridItem w='100%'h={{base:'', md:'116.85px'}}  >
                <Image src={job} width={{base:'64px', md:'104px'}}/>
                <Text 
                    paddingTop={'16px'}
                    paddingLeft={'31.59px'}
                    fontFamily={'Satoshi'}
                    fontSize={{ base: '16px', md: '20px'}}
                    fontWeight={'500'}
                    lineHeight={'28px'}
                    letterSpacing={'-0.18px'}>Job Opportunity</Text>
            </GridItem>
            <GridItem w='100%' h={{base:'', md:'116.85px'}}  >
                <Image src={mentorship} width={{base:'64px', md:'104px'}}/>
                <Text
                    paddingTop={'16px'}
                    paddingLeft={'31.59px'}
                    fontFamily={'Satoshi'}
                    fontSize={{ base: '16px', md: '20px'}}
                    fontWeight={'500'}
                    lineHeight={'28px'}
                    letterSpacing={'-0.18px'}>Mentorship</Text>
            </GridItem>
            </Grid>
          </Stack>
        </Flex>
       
      </Stack>
      </Container>
      
    );
  }