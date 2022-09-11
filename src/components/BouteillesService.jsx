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

  } from '@chakra-ui/react'
  import {AddIcon} from "@chakra-ui/icons"
import BouteilleResume from "./BouteilleResume"
function BouteillesService({isOpen,onOpen,onClose,capacite,service,TtBouteilles,quantite}) {
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
    const serviceRef = React.useRef()
    const nbBottle=React.useRef()
  
    return (
      <>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={service}
          onClose={onClose}
          size='lg'
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
           
            <DrawerHeader borderBottomWidth='1px'>
            Les bouteilles du service {service}
              <h2 className="opacity-60">Capacité {capacite} | Quantité {quantite} B</h2>
            </DrawerHeader>
  
            <DrawerBody>
             
            <div className="shadow-xl pb-3  w-11/12 m-auto  flex flex-col items-center justify-between bg-[#fff] rounded-xl h-5/6 mt-10">
                <div className=" w-full bg-[#2d62ec] text-[#fff] grid grid-cols-3 font-bold text-lg py-3 rounded-t-xl px-5">
                    <div>Référence bouteille</div>
                    <div className="pl-6">Reste Quantité</div>
                    <div></div>
                </div>
                <div className="w-full h-full  py-3 self-center overflow-y-scroll ">
                    {
                        TtBouteilles.map((record,index)=>{
                            return (
                                <BouteilleResume index={index}  reference={record.reference} reste={record.reste}/>
                            )
                        })
                    }

                </div>
            </div>
                
            </DrawerBody>
  
            {/* <DrawerFooter borderTopWidth='1px'>
              <Button variant='outline' mr={3} onClick={onClose}>
                Annuler
              </Button>
              <Button backgroundColor='#2d62ec' color="#fff">Ajouter</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default BouteillesService;