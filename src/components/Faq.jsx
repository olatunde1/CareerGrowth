import { Container,HStack,Box,Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import React from 'react'

const Faq = () => {
  return (
   
        <HStack width={'1238px'} margin={'0 auto'}>
            <Box paddingTop={'120px'}>
                <Text>Faq’s</Text>
                <Text>Frequently Asked <br /> Questions</Text>
                <Text>Couldn’t find what you were looking for? write to us at</Text>
                <Text>hi@careergrowth.com</Text>
            </Box>
            <Box
                width={'640px'}
                paddingTop={'120px'}
            >
            <Accordion allowToggle>
                <AccordionItem
                 _hover={{
                    bg: '#F6F7F9'
                  }}
                >
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'32px'}>
                        <Box as="span" flex='1' textAlign='left' color={'#001F42'}
                        fontSize={'22px'}
                        fontWeight={'500'}
                        fontStyle={'normal'}
                        lineHeight={'140%'}
                        >
                         What makes your program different from other career coaching services?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={'34px'}>
                    Our program is specifically designed for bootcamp graduates
                    looking to advance their tech careers. We provide practical
                    skills training, mentorship, career guidance, and a 
                    supportive community to help our participants land their 
                    dream job in tech and increase their income.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'32px'}>
                        <Box as="span" flex='1' textAlign='left'
                            color={'#001F42'}
                            fontSize={'22px'}
                            fontWeight={'500'}
                            fontStyle={'normal'}
                            lineHeight={'140%'}
                        >
                        How much time do I need to commit to the program each month?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton  >
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'32px'}>
                        <Box as="span" flex='1' textAlign='left'
                             color={'#001F42'}
                             fontSize={'22px'}
                             fontWeight={'500'}
                             fontStyle={'normal'}
                             lineHeight={'140%'}
                        >
                            What if I don't have any experience in tech?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                    <AccordionButton paddingTop={'32px'}paddingBottom={'32px'}>
                        <Box as="span" flex='1' textAlign='left'
                             color={'#001F42'}
                             fontSize={'22px'}
                             fontWeight={'500'}
                             fontStyle={'normal'}
                             lineHeight={'140%'}
                        >
                        Can I cancel my subscription at any time?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            
            </Box>
        </HStack>
  
  )
}

export default Faq