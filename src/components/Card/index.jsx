import React from 'react';
import {
  Card as ChakraCard,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button
} from '@chakra-ui/react';

export default function Card() {
  return (
    <ChakraCard maxW="sm" w="65">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Lorem, ipsum dolor.</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, commodi maiores tenetur quia fuga incidunt ex libero ab amet repudiandae totam neque eveniet voluptatibus ducimus rem! Vel voluptatum ullam vitae.
          </Text>
         
        </Stack>
      </CardBody>
      <Divider />
    
    </ChakraCard>
  );
}
