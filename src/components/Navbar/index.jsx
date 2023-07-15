import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,useDisclosure ,InputGroup, InputLeftAddon, Input
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box px={4} py={3} mx="auto" maxW="2xl" md="full" lg="full">
      <Flex
        items="center"
        justify="space-between"
        spacing={16}
        display={{ base: 'none', lg: 'flex' }}
      >
        <Flex spacing={8}>
          <Button
            as="a"
            href="#donate"
            aria-label="Donate"
            title="Donate"
            mr={10}
            mt={3}
            bg="white"
            fontWeight="medium"
            color="gray.700"
            transition="color 0.2s"
            _hover={{ color: 'purple.400' }}
            styleProps={{ boxShadow: 'none', textDecoration: 'none' }}
            onClick={onOpen}
          >
            Donate
          </Button>

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>DONATE NOW</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text fontWeight="bold" mb="1rem">
        Your generous contribution can make a difference!
      </Text>
      <Text mb="1rem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum quibusdam ut adipisci assumenda cum esse, delectus similique, itaque eaque consequuntur numquam ratione corrupti facilis quidem sint, deleniti recusandae est!
      </Text>
      <Text fontWeight="bold">Choose the amount you would like to donate:</Text>
      {/* Donation amount options */}
      <Flex mt="1rem">
        <Button variant="outline" colorScheme="blue" mr="1rem">
          $10
        </Button>
        <Button variant="outline" colorScheme="blue" mr="1rem">
          $20
        </Button>
        <Button variant="outline" colorScheme="blue" mr="1rem">
          $50
        </Button>
        <Button variant="outline" colorScheme="blue" mr="1rem">
          $100
        </Button>
      </Flex>
      {/* Custom donation amount input */}
      <InputGroup mt="1rem">
        <InputLeftAddon children="$" />
        <Input placeholder="Enter custom amount" />
      </InputGroup>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Close
      </Button>
      <Button colorScheme="blue">Donate Now</Button>
    </ModalFooter>
  </ModalContent>
</Modal>

          <Link
            href="/about"
            aria-label="Our Team"
            title="Our Team"
            fontWeight="medium"
            mt={5}
            color="gray.700"
            transition="color 0.2s"
            _hover={{ color: 'purple.400' }}
          >
            About Us
          </Link>
        </Flex>
        <Link href="#" aria-label="Company" title="Company">
          <Image src="/header_logo.png" alt="" w={150} h={20} lg={14} />
        </Link>
        <Flex spacing={8}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="link"
                  mb="4"
                  fontWeight="medium"
                  color="gray.700"
                  transition="color 0.2s"
                  _hover={{ color: 'purple.400' }}
                  isActive={isOpen}
                  rightIcon={<ChevronDownIcon />}
                  styleProps={{ boxShadow: 'none', textDecoration: 'none' }}
                >
                  {isOpen ? 'One of Us' : 'One of Us'}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => alert('YAha Login aayega')}>
                    Login
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>

          <Link
            href="#about"
            aria-label="About Us"
            title="About Us"
            ml={10}
            mt={5}
            fontWeight="medium"
            color="gray.700"
            transition="color 0.2s"
            _hover={{ color: 'purple.400' }}
          >
            Contact Us
          </Link>

          {/* <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="link"
                  mb="4"
                  fontWeight="medium"
                  color="gray.700"
                  transition="color 0.2s"
                  _hover={{ color: 'purple.400' }}
                  isActive={isOpen}
                  ml="3"
                  rightIcon={<ChevronDownIcon />}
                  styleProps={{ boxShadow: 'none', textDecoration: 'none' }}
                >
                  {isOpen ? 'Conatct Us' : 'Contact Us'}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="mailto:example@example.com">Email</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="https://www.example.com">Website</Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu> */}
        </Flex>
      </Flex>
      <Flex display={{ lg: 'none' }}>
        <IconButton
          aria-label="Open Menu"
          title="Open Menu"
          p={2}
          mr={-1}
          transition="all 0.2s"
          rounded="md"
          _focus={{ outline: 'none', shadow: 'outline' }}
          _hover={{ bg: 'purple.50' }}
          onClick={() => setIsMenuOpen(true)}
          icon={<HamburgerIcon w={5} color="gray.600" />}
        />
        {isMenuOpen && (
          <Box
            pos="absolute"
            top={0}
            left={0}
            w="full"
            p={5}
            bg="white"
            rounded="md"
            shadow="sm"
            zIndex={99}
          >
            <Flex justify="space-between" mb={4} align="center">
              <Link href="#" aria-label="Company" title="Company">
                <Image src="/header_logo.png" alt="" h={12} lg={14} />
              </Link>
              <IconButton
                aria-label="Close Menu"
                title="Close Menu"
                p={2}
                mt={-2}
                mr={-2}
                transition="all 0.2s"
                rounded="md"
                _hover={{ bg: 'gray.200' }}
                _focus={{ outline: 'none', shadow: 'outline' }}
                onClick={() => setIsMenuOpen(false)}
                icon={<CloseIcon w={5} color="gray.600" />}
              />
            </Flex>
            <Flex direction="row" align="start">
              <VStack spacing={4} align="start">
                <Link
                  href="#"
                  aria-label="Our product"
                  title="Our product"
                  fontWeight="medium"
                  color="gray.700"
                  transition="color 0.2s"
                  _hover={{ color: 'purple.400' }}
                >
                  Donate
                </Link>
                <Link
                  href="#"
                  aria-label="Donate"
                  title="Donate"
                  fontWeight="medium"
                  color="gray.700"
                  transition="color 0.2s"
                  _hover={{ color: 'purple.400' }}
                >
                  About Us
                </Link>
                {/* <Link
                  href="#"
                  aria-label="Product Our Team"
                  title="Product Our Team"
                  fontWeight="medium"
                  color="gray.700"
                  transition="color 0.2s"
                  _hover={{ color: 'purple.400' }}
                >
                  One of Us
                </Link> */}

                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        as={Button}
                        variant="link"
                        fontWeight="medium"
                        color="gray.700"
                        transition="color 0.2s"
                        _hover={{ color: 'purple.400' }}
                        isActive={isOpen}
                        rightIcon={<ChevronDownIcon />}
                        styleProps={{
                          boxShadow: 'none',
                          textDecoration: 'none',
                        }}
                      >
                        {isOpen ? 'One of Us' : 'One of Us'}
                      </MenuButton>
                      <MenuList>
                        <MenuItem onClick={() => alert('YAha Login aayega')}>
                          Login
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>

                <Link
                  href="#"
                  aria-label="Statistics"
                  title="Statistics"
                  fontWeight="medium"
                  color="gray.700"
                  transition="color 0.2s"
                  _hover={{ color: 'purple.400' }}
                >
                  Contact Us
                </Link>
                
              </VStack>
            </Flex>
          </Box>
        )}
      </Flex>
    </Box>

    
  );
}
