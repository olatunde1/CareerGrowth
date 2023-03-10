import {
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Grid, GridItem
  } from '@chakra-ui/react';
  import join from './images/join.png'
  import career from './images/career.png'
  import job from './images/job.png'
  import mentorship from './images/mentorship.png'
  import supportive from './images/supportive.png'

  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} marginLeft={'160px'} marginRight={'160px'}>
         <Flex flex={1}>
          <Image
            alt={'Join Image'}
            objectFit={'contain'}
            width={'100%'}
            height={'440px'}
            src={join}
          />
        </Flex>
        <Flex paddingLeft={'96px'} flex={1}  textAlign={'justify'} >
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Text color={'#01E7FF'}
            fontSize={'14px'}
            fontWeight={'500'}>
                ABOUT</Text>
            <Heading fontSize={{ base: '3xl', md: '48px', lg: '48px' }}
            width={{md:'478px'}}
            height={{md:'120px'}}
            lineHeight={'60px'}>
              <Text
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
              </Text><br />{' '}{' '}
              <Text color={'#0077FE'} as={'span'}>
              our community
              </Text>{' '}
            </Heading>
            
            <Grid templateColumns='repeat(2, 1fr)' paddingTop={'35.15px'} gap={4}>
            <GridItem w='100%' h='116.85px'  >
                <Image src={career}/>
                <Text
                    paddingTop={'16px'}
                    paddingLeft={'31.59px'}
                    fontFamily={'Satoshi'}
                    fontSize={'20px'}
                    fontWeight={'500'}
                    lineHeight={'28px'}
                    letterSpacing={'-0.18px'}
                >Career Guidance</Text>
            </GridItem>
            <GridItem w='100%' h='116.85px'  >
                <Image src={supportive}/>
                <Text
                paddingTop={'16px'}
                paddingLeft={'31.59px'}
                fontFamily={'Satoshi'}
                fontSize={'20px'}
                fontWeight={'500'}
                lineHeight={'28px'}
                letterSpacing={'-0.18px'}>Supportive Network</Text>
            </GridItem>
            <GridItem w='100%' h='116.85px'  >
                <Image src={job}/>
                <Text 
                    paddingTop={'16px'}
                    paddingLeft={'31.59px'}
                    fontFamily={'Satoshi'}
                    fontSize={'20px'}
                    fontWeight={'500'}
                    lineHeight={'28px'}
                    letterSpacing={'-0.18px'}>Job Opportunity</Text>
            </GridItem>
            <GridItem w='100%' h='116.85px'  >
                <Image src={mentorship}/>
                <Text
                    paddingTop={'16px'}
                    paddingLeft={'31.59px'}
                    fontFamily={'Satoshi'}
                    fontSize={'20px'}
                    fontWeight={'500'}
                    lineHeight={'28px'}
                    letterSpacing={'-0.18px'}>Mentorship</Text>
            </GridItem>
            </Grid>
          </Stack>
        </Flex>
       
      </Stack>
    );
  }