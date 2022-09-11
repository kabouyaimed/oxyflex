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
    Box,FormLabel,Textarea,Select,Input,InputLeftAddon,InputGroup,InputRightAddon,
    useDisclosure

  } from '@chakra-ui/react'
  import {AddIcon} from "@chakra-ui/icons"
function AddService({text}) {
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
    const service = React.useRef()
    const nbBottle=React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <div><button onClick={onOpen} className=" px-2 py-2 rounded text-xl bg-[#2d62ec] text-[#fff]">{text}</button></div>

        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={service}
          onClose={onClose}
          size='sm'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Nouveau Service
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box>
                  <FormLabel htmlFor='service'>Service</FormLabel>
                  <Input
                    ref={service}
                    id='service'
                    placeholder='nom du service'
                  />
                </Box>
  
  
                <Box>
                <FormLabel htmlFor='Agent'>Agent responsable</FormLabel>
                  <Select id='Agent' defaultValue={Agents[0].name}>
                  {Agents.map((agent,index)=>{
                      return   <option value={index}>{agent.name}</option>
                  })}
                  </Select>
                </Box>
  
                <Box>
                <FormLabel htmlFor='nbBottle'>Nombre de bouteilles</FormLabel>
                  <Input
                    ref={nbBottle}
                    id='nbBottle'
                    placeholder='0'
                    type='number'
                  />
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Annuler
              </Button>
              <Button backgroundColor='#2d62ec' color="#fff">Ajouter</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default AddService;