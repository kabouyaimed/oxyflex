import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,Stack,
    Box,FormLabel,Textarea,Select,Input,InputLeftAddon,InputGroup,InputRightAddon, useDisclosure

  } from '@chakra-ui/react'
  import {AddIcon} from "@chakra-ui/icons"
function ChangePassword() {
    const Agents=[
        {
          name: 'imed kabouya',
        },
        {
          name: 'nidhal chenni'
        },
        {
         name: 'chemsou berkane'
       },
      ]
    const newPassword = React.useRef()
    const confirmPassword=React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>
        <button onClick={onOpen} className="bg-[#2d62ec] px-2 py-2 text-[#fff] rounded">Modifier</button>
      {isOpen && <Drawer
          isOpen={isOpen}
          placement='right'
       
          onClose={onClose}
          size='sm'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Nouveau mot de passe
            </DrawerHeader>
  
            <DrawerBody marginTop={10}>
              <Stack spacing='24px'>
              
  
               <Box>
                <FormLabel htmlFor='newPassword'>Nouveau mot de passe</FormLabel>
                  <Input
                    ref={newPassword}
                    id='newPassword'
                    placeholder='xxxx'
                    type='password'
                  />
                </Box>
  
                <Box>
                <FormLabel htmlFor='confirmPassword'>Confirmer mot de passe</FormLabel>
                  <Input
                    ref={confirmPassword}
                    id='confirmPassword'
                    placeholder='xxxx'
                    type='password'
                  />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Annuler
              </Button>
              <Button backgroundColor='#2d62ec' color="#fff">
              Mise à jour
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
}
      </>
    )
  }
  export default ChangePassword;