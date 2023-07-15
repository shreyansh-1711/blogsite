import React from 'react';
import CounterUp from '../CounterUp/';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box w={['100%', '100%', '800px', '1000px']} mx="auto">


    
<Box bg="gray.700" h="100" w="500">
  <Box m={1}>
    <Wrap align="center" ml={{ base: 2, md: 10 }} color="yellow">
      <WrapItem>
        <Heading
          as="h1"
          mt={{ base: 2, md: 3 }}
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        >
          +
        </Heading>
      </WrapItem>
      <WrapItem>
        <Heading
          as="h1"
          mt={{ base: 2, md: 3 }}
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        >
          <CounterUp end={1000} />
        </Heading>
      </WrapItem>
      <WrapItem>
        <Heading
          as="h1"
          mt={{ base: 2, md: 3 }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          ml={{ base: 0, md: 5 }}
        >
          BENEFICIARIES
        </Heading>
      </WrapItem>
      <Box
         w={{ base: "100%", md: "0.5" }}
         mt={2}  // Set top margin to 2
         mb={2}  // Set bottom margin to 2
         ml={{ base: 0, md: 10 }}
         mr={{ base: 0, md: 10 }}
         h={{ base: "0.5", md: "20" }}
         bg="blue"
      ></Box>
      <WrapItem>
        <Heading
          as="h1"
          mt={{ base: -3.5, md: 3 }}
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        >
          +
        </Heading>
      </WrapItem>
      <WrapItem>
        <Heading
          as="h1"
          mt={{ base: -4, md: 3 }}
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        >
          <CounterUp end={140} />
        </Heading>
      </WrapItem>
      <WrapItem>
        <Heading
          as="h1"
          mt={{ base: -4, md: 3 }}
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          ml={{ base: 0, md: 5 }}
        >
          ACTIVIST
        </Heading>
      </WrapItem>
    </Wrap>
  </Box>
</Box>


      <Container maxW="container.xl" py={8} sm={24}>
        <VStack spacing={5} align="center">
          <Box
            w="11/12"
            sm="1/4"
            lg="flex"
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            mb={5}
          >
            <Heading
              as="h1"
              fontSize={['2xl', '3xl', '4xl', '5xl', '6xl']}
              textAlign="center"
              color="green.800"
              fontWeight="black"
              lineHeight={['7', '10']}
            >
              Educate! Learn! Explore!
            </Heading>
            <Text
              as="h1"
              fontSize={['2xl', '3xl', '4xl', '5xl', '6xl']}
              textAlign="center"
              color="green.400"
              mt={[0, 4, 6, 8]}
              fontWeight="black"
              lineHeight={['7', '10']}
            >
              Skill upliftment
            </Text>

            <Text
              mt={[5, 10]}
              textAlign="center"
              color="gray.400"
              lineHeight={['7', '10']}
              fontWeight="normal"
              fontSize={['sm', 'md', 'lg', 'xl']}
              maxW="11/12"
            >
              Team HNM wants support of you guys in making up numerous souls lie
              down with full stomachs. There is nothing greater than love
              invested in helping to feed the impoverished living in hunger.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
