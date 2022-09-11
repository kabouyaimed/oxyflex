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
    Box,FormLabel,Textarea,Select,Input,InputLeftAddon,InputGroup,InputRightAddon

  } from '@chakra-ui/react'
  import {AddIcon} from "@chakra-ui/icons"
  function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${date}${separator}${month<10?`0${month}`:`${month}`}${separator}${year}`
    }
function AddCommande({isOpen,onOpen,onClose}) {
   const Fournisseurs=[
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
    const firstField = React.useRef()
    const quantity = React.useRef()
    const HT=1000
    const TVA=1000
    const Livraison=1000
      return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          size='sm'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              <h1>Commande № 00001234</h1>
              <h2 className="opacity-60">{getCurrentDate('/')}</h2>
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                {/* <Box>
                  <FormLabel htmlFor='username'>Name</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user name'
                  />
                </Box> */}
  
                {/* <Box>
                  <FormLabel htmlFor='url'>Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>http://</InputLeftAddon>
                    <Input
                      type='url'
                      id='url'
                      placeholder='Please enter domain'
                    />
                    <InputRightAddon>.com</InputRightAddon>
                  </InputGroup>
                </Box> */}
  
                <Box display='flex flex-col'>
                <div className="flex-1 mt-2">
                  <FormLabel htmlFor='Fournisseur'>Fournisseur</FormLabel>
                  <Select id='Fournisseur' defaultValue={Fournisseurs[0].name}>
                  {Fournisseurs.map((fournisseur,index)=>{
                      return   <option value={index}>{fournisseur.name}</option>
                  })}
                  </Select>
                  </div>
                  <div className="flex-1 mt-2">
                  <FormLabel htmlFor='capacity'>Bouteille d'oxygène</FormLabel>
                  <Select id='capacity' defaultValue='25L'>
                    <option value='25L'>25L</option>
                    <option value='30L'>30L</option>
                    <option value='75L'>75L</option>
                    <option value='90L'>90L</option>
                  </Select>
                  </div>
                  <div className="flex-1 mt-2">
                  <FormLabel htmlFor='quantity'>Quantité</FormLabel>
                  <Input
                    ref={quantity}
                    id='quantity'
                    placeholder='0'
                    type='number'
                  />
                  </div>
                  
                </Box>
               
                <Box position="reltive">
                  <div className="w-fit absolute right-4">
                 <div className="my-2  font-bold flex items-center justify-between w-full"><h1>Total HT</h1><h2 className="bg-[#2d62ec] p-2 text-[#fff] rounded ml-5">{HT} DA</h2></div>
                 <div className="my-2 font-bold flex items-center justify-between w-full"><h1>Total TVA</h1><h2 className="bg-[#2d62ec] p-2 text-[#fff] rounded ml-5">{TVA} DA</h2></div>
                 <div className="my-2 font-bold flex items-center justify-between  w-full"><h1>Livraison</h1><h2 className="bg-[#2d62ec] p-2 text-[#fff] rounded ml-5">{Livraison} DA</h2></div>
                <div className="my-2 font-bold flex items-center justify-between  w-full"><h1>Prix total</h1><h2 className="bg-[#2d62ec] p-2 text-[#fff] rounded ml-5">{HT+TVA+Livraison} DA</h2></div>
                 </div>
                </Box>
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Annuler
              </Button>
              <Button backgroundColor='#2d62ec' color="#fff">Passer La Commande</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default AddCommande;