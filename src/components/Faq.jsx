import { Box,Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Container, } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
   
        <Container maxW={'container'}>
            <Box display={'flex'} flexDirection={{ base: 'column', md:'row' }}>
            <Box marginRight={'42px'} >
                <Text 
                     paddingTop={'120px'}
                     paddingBottom={'16px'}
                     color={'#01E7FF'}
                     fontWeight={'500'}
                     fontFamily='Epilogue'
                >FAQ’S</Text>
             <Heading
             fontSize={'48px'}
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
               
                width={{base:'1100px', md:'640px'}}
                paddingTop={'130px'}
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
                        fontSize={'22px'}
                        fontFamily={'Satoshi'}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                        lineHeight={'140%'}
                        
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
                        fontSize={'16px'}
                        width={'640px'}
                        textAlign={'justify'}
                        
                    >
                    Our program is specifically designed for bootcamp graduates
                    looking to advance their tech careers. We provide practical
                    skills training, mentorship, career guidance, and a 
                    supportive community to help our participants land their 
                    dream job in tech and increase their income.
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
                            fontSize={'22px'}
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
                        fontSize={'16px'}
                        width={'640px'}
                        textAlign={'justify'}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
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
                             fontSize={'22px'}
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
                        fontSize={'16px'}
                        width={'640px'}
                        textAlign={'justify'}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
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
                             fontSize={'22px'}
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
                        fontSize={'16px'}
                        width={'640px'}
                        textAlign={'justify'}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            
            </Box>
            <Box marginTop={'44px'} textAlign={'center'} display={{ base: 'block', md:'none' }}   backgroundColor={'#001F42'} color={'#ffffff'}>
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
        </Container>
  
  )
}

export default Faq