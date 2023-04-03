import { Box,Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Heading,
    } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
    <>
    <Container maxW='container.xl' backgroundColor={{base:'#EEF6FF;', md:'#ffffff'}}>
    <Box  display={'flex'} flexDirection={{ base: 'column', md:'row' }} marginLeft={{base:'null', md:'60px'}} >

            <Box marginRight={'42px'} >
                <Text 
                     display={{base:'none', md:'block'}}
                     paddingTop={'120px'}
                     paddingBottom={'16px'}
                     color={'#01E7FF'}
                     fontWeight={'500'}
                     fontFamily='Epilogue'
                >FAQ’S</Text>
                <Heading
                    width={{base:'310px'}}
                    display={{base:'block', md:'none'}}
                    paddingTop={{ base: '44px', md: '0px' }}
                    fontSize={{ base: '24px', md: '48px' }}
                    fontWeight={'600'}
                    marginRight={'64px'}
                    lineHeight={'24.6px'}
                    fontFamily='Epilogue'
                    paddingLeft={'12.08px'}
                    
                    >
                    <Text color={'#001F42'} fontWeight={'700'}                   
                        >Frequently  {' '}<Text color={'#0077FE'} as={'span'}>
                        Asked
                        </Text></Text>
                        <Text fontWeight={'700'} color={'#0077FE'} as={'span'}>
                        Questions
                        </Text>{' '}
             </Heading>
             <Heading
             display={{base:'none', md:'block'}}
             paddingTop={{ base: '44px', md: '0px' }}
             fontSize={{ base: '24px', md: '48px' }}
             fontWeight={'600'}
             marginRight={'64px'}
             lineHeight={'60px'}
             fontFamily='Epilogue'
             paddingBottom={{ base: '', md:'190px' }}
             
             >
             <Text color={'#001F42'}                    
                >Frequently Asked </Text>{' '}{' '}
                <Text color={'#0077FE'} as={'span'}>
               Questions
                </Text>{' '}
             </Heading>
               <Box  display={{ base: 'none', md:'block' }}>
               <Text
                    fontSize={'14px'}
                    width={'342px'}
                    marginBottom={'8px'}
                    lineHeight={'24px'}
                    fontFamily='Inter'
                >Couldn’t find what you were looking for? <br /> write to us at</Text>
                <Text
                     fontSize={'16px'}
                     color={'#0077FE'}
                     lineHeight={'28px'}
                     fontWeight={'400'}
                     textDecoration={'underline'}
                     fontFamily='Inter'
                > <a href="hi@careergrowth.com">hi@careergrowth.com</a></Text>
               </Box>
            </Box>
            <Box
               
                width={{base:'440px', md:'580px'}}
                paddingTop={{base:'15.5px', md:'130px'}}
                paddingBottom={{md:'116px'}}
            >
            <Accordion allowToggle>
                <AccordionItem
                 _hover={{
                    bg: '#F6F7F9'
                  }}
                >
                    <h2>
                    <AccordionButton paddingTop={'32px'} pb={'16px'}>
                        <Box as="span" flex='1' textAlign='left' color={'#001F42'}
                        fontSize={{ base: '16px', md: '22px'}}
                        fontFamily={'Satoshi'}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                        lineHeight={'140%'}
                        transition='ease-in-out'
                        
                        >
                         What makes your program different from <br /> other career coaching services?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel
                        pt={'16px'}
                        pb={'32px'}
                        fontFamily={'Satoshi'}
                        fontSize={{ base: '14px', md: '16px'}}
                        width={'640px'}
                        textAlign={'justify'}
                        
                    >
                    Career growth is typical of its name, being a career accelerator community, 
                    our model is to help you garner as much work experiences to help you advance 
                    in your chosen career while other coaching services basically train you and that's all to it.
                    Career growth community creates a platform to advance your career within the Tech space.

                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    _hover={{
                        bg: '#F6F7F9'
                      }}
                >
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'16px'}>
                        <Box as="span" flex='1' textAlign='left'
                            color={'#001F42'}
                            fontSize={{ base: '16px', md: '22px'}}
                            fontFamily={'Satoshi'}
                            fontWeight={'500'}
                            fontStyle={'normal'}
                            lineHeight={'140%'}
                        >
                        How much time do I need to commit to the <br /> program each month?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton  >
                    </h2>
                    <AccordionPanel
                        pt={'16px'}
                        pb={'32px'}
                        fontFamily={'Satoshi'}
                        fontSize={{ base: '14px', md: '16px'}}
                        width={'640px'}
                        textAlign={'justify'}
                    >
                    A minimum of 60hr every month
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    _hover={{
                        bg: '#F6F7F9'
                      }}
                >
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'32px'}>
                        <Box as="span" flex='1' textAlign='left'
                             color={'#001F42'}
                             fontSize={{ base: '16px', md: '22px'}}
                             fontWeight={'500'}
                             fontFamily={'Satoshi'}
                             fontStyle={'normal'}
                             lineHeight={'140%'}
                        >
                            What if I don't have any experience in tech?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel
                        pt={'16px'}
                        pb={'32px'}
                        fontFamily={'Satoshi'}
                        fontSize={{ base: '14px', md: '16px'}}
                        width={'640px'}
                        textAlign={'justify'}
                    >
                    You can join although we require that applicants should have some 
                    background knowledge already in their chosen skill set or career path.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                    _hover={{
                        bg: '#F6F7F9'
                      }}
                >
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'32px'}>
                        <Box as="span" flex='1' textAlign='left'
                             color={'#001F42'}
                             fontSize={{ base: '16px', md: '22px'}}
                             fontWeight={'500'}
                             fontStyle={'normal'}
                             lineHeight={'140%'}
                             fontFamily={'Satoshi'}
                        >
                        Can I cancel my subscription at any time?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel
                        pt={'16px'}
                        pb={'32px'}
                        fontFamily={'Satoshi'}
                        fontSize={{ base: '14px', md: '16px'}}
                        width={'640px'}
                        textAlign={'justify'}
                    >
                    Yes you can cancel your subscription at anytime.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            
            </Box>
            </Box> 
    </Container>
          
            <Box
                
               
                textAlign={'center'}
                display={{ base: 'block', md:'none' }}
                backgroundColor={'#001F42'} color={'#ffffff'}>
                 <Text
                    paddingTop={'14px'}
                    paddingLeft={'64px'}
                    fontSize={'14px'}
                    width={'342px'}
                    marginBottom={'8px'}
                    lineHeight={'24px'}
                    fontFamily='Inter'
                >Couldn’t find what you were looking for? <br /> write to us at</Text>
                <Text
                     fontSize={'16px'}
                     color={'#0077FE'}
                     lineHeight={'28px'}
                     fontWeight={'400'}
                     textDecoration={'underline'}
                     fontFamily='Inter'
                     paddingBottom={'14px'}
                > <a href="hi@careergrowth.com">hi@careergrowth.com</a></Text>
            </Box>
    </>
    
  )
}

export default Faq