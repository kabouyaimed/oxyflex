import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Icon
  } from '@chakra-ui/react'
  import {RiHomeLine,RiStockLine,RiHistoryLine } from "react-icons/ri"
  import {MdLogout,MdOutlineMiscellaneousServices} from "react-icons/md"
  import {TbBrowser,TbTruckDelivery} from "react-icons/tb"
  import {AiFillSetting} from "react-icons/ai"
  import {VscFileSymlinkFile} from "react-icons/vsc"
  import {FiUsers} from "react-icons/fi"
  import {ImBell} from "react-icons/im"
  import {CgCarousel} from "react-icons/cg"
  function SideNavbar({onOpen,onClose,isOpen,setOpenTab,openTab}) {

    const btnRef = React.useRef()
    
          
            return (
              <>
                <Drawer
                  isOpen={isOpen}
                  placement='left'
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size='xs'
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>admin admin</DrawerHeader>
          
                    <DrawerBody>
                    <Button onClick={()=>setOpenTab(1)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==1? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==1? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={RiHomeLine} boxSize={5}  marginRight={3}  />
                          Dashboard
                    </Button>
                    <Button onClick={()=>setOpenTab(2)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==2? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==2? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={RiStockLine} boxSize={5}  marginRight={3} />
                          Stock
                    </Button>
                    <Button onClick={()=>setOpenTab(3)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==3? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==3? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={CgCarousel} boxSize={5}  marginRight={3} />
                          Usage
                    </Button>
                    <Button onClick={()=>setOpenTab(4)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==4? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==4? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={ImBell} boxSize={5}  marginRight={3} />
                          Notifications
                    </Button>
                    <Button onClick={()=>setOpenTab(5)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==5? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==5? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={VscFileSymlinkFile} boxSize={5}  marginRight={3} />
                          Commandes
                    </Button>
                    <Button onClick={()=>setOpenTab(6)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==6? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==6? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={TbTruckDelivery} boxSize={5}  marginRight={3} />
                          Fournisseurs
                    </Button>
                    <Button onClick={()=>setOpenTab(7)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==7? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==7? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={FiUsers} boxSize={5}  marginRight={3} />
                          Utilisateurs
                    </Button>
                    <Button onClick={()=>setOpenTab(8)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==8? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==8? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={MdOutlineMiscellaneousServices} boxSize={5}  marginRight={3} />
                          Services
                    </Button>
                    <Button onClick={()=>setOpenTab(9)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==9? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==9? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={RiHistoryLine} boxSize={5}  marginRight={3} />
                          Historique
                    </Button>
                    <Button onClick={()=>setOpenTab(10)} width={'100%'} marginTop={1} justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==10? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==10? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={AiFillSetting} boxSize={5}  marginRight={3} />
                          Paramètres
                    </Button>
                    <Button onClick={()=>setOpenTab(11)} width={'100%'} marginTop={1}  justifyContent="flex-start" _hover={{color:'#fff', backgroundColor:'#2d62ec'}} color={openTab==11? '#fff':'#000'} fontWeight={'Medium'} backgroundColor={openTab==11? '#2d62ec':'#fff'} variant='ghost'>
                          <Icon as={TbBrowser} boxSize={5}  marginRight={3} />
                          A propos
                    </Button>
                    
                    </DrawerBody>
          
                    <DrawerFooter width={'100%'} marginTop={1} justifyContent="flex-start"  >
                      <Button  variant='outline' mr={3} 
                    //   onClick={onClose}
                      >
                      <Icon as={MdLogout} boxSize={5}  marginRight={3} />
                       Déconnecter
                      </Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </>
            )
          }
    
  
export default SideNavbar;