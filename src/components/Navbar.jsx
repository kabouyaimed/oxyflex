import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
  } from "@chakra-ui/react"

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                {props.text} {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem>Notification 1</MenuItem>
                <MenuItem>Notification 2</MenuItem>
                <MenuItem>Notification 3</MenuItem>
            </MenuList>
        </Menu>
    )
  }
  export default Navbar;