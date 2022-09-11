import SideNavbar from "../components/sideNavbar";
import {useState} from "react"
import Dashboard from "./Tabs/Dashboard";
import Usage from "./Tabs/Usage";
import Stock from "./Tabs/Stock";
import Notifications from "./Tabs/Notifications";
import Fournisseurs from "./Tabs/Fournisseurs";
import Utilisateurs from "./Tabs/Utilisateurs";
import Services from "./Tabs/Services";
import Apropos from "./Tabs/Apropos";
import Commandes from "./Tabs/Commandes";
import Historique from "./Tabs/Historique";
import Parametres from "./Tabs/Parametres";
import ParticlesBg from 'particles-bg'
import {IoIosArrowDown} from "react-icons/io"

  import { ReactNode } from 'react';
  import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Icon,
    NavLink
  } from '@chakra-ui/react';

  import { HamburgerIcon, CloseIcon ,InfoIcon,EmailIcon,BellIcon} from '@chakra-ui/icons';

const { default: TopNavbar } = require("../components/TopNavbar");


function Main(){
    const [showSidebar,setShowSidebar]=useState(false)
    const [openTab,setOpenTab]=useState(1)
    const [section,setSection]=useState("3")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const Links = ['Dashboard', 'Projects', 'Team'];

    return(
        <div className="bg-[#eef5f9] lg:h-screen h-full w-screen relative z-90 ">
      <Box bg={useColorModeValue('#2d62ec', '#2d62ec')} px={4} height="50px" boxShadow='xl'>
       <div className="relative z-30 ">
        <Flex h={12} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            backgroundColor={'#2d62ec'}
            color={'#fff'}
            size={'md'}
            icon={isOpen ? <CloseIcon boxSize={6}/> : <HamburgerIcon boxSize={6}/>}
            aria-label={'Open Menu'}
            display={{ md: 'block' }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{boxShadow:'2xl',backgroundColor:'#2d62ec'}}

          />
          <Flex alignItems={'center'}>
            <Menu>
           
             <HStack>
             <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
                >
             <div className="relative h-fit w-fit">
           
             <IconButton
            backgroundColor={'#2d62ec'}
            color={'#fff'}
            size={'md'}
            icon={  <BellIcon  boxSize={8}  marginRight={5}/>}
            aria-label={'Open Menu'}
            display={{ md: 'block' }}
            onClick={isOpen ? onClose : onOpen}
           
          />   
       
          <span className="absolute top-1 right-5 rounded-full h-3 w-3 text-sm bg-[#f00] font-bold text-[#fff]  z-50"></span>

          </div>
          </MenuButton>
          <div className="relative h-fit w-fit z-90">
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                  
                />
                <span className="absolute top-0 -right-1 rounded-full h-3 w-3 bg-[#0f0] z-50"></span>
                </div>
              </HStack>
              
              <MenuList>
                <div className="h-[300px] w-[350px] bg-white rounded overflow-y-scroll mb-3 font-bold">
                <MenuItem width="100%"><div className="w-full flex items-center justify-between">Stock atteint 29% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider />
                <MenuItem width="100%"><div className="w-full flex items-center justify-between">Stock atteint 29% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider /><MenuItem width="100%"><div className="w-full flex items-center justify-between">Bouteille B943/004 atteint 19% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider /><MenuItem width="100%"><div className="w-full flex items-center justify-between">Stock atteint 29% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider />
                <MenuItem width="100%"><div className="w-full flex items-center justify-between">Stock atteint 29% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider />
                <MenuItem width="100%"><div className="w-full flex items-center justify-between">Stock atteint 29% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider />
                <MenuItem width="100%"><div className="w-full flex items-center justify-between">Stock atteint 29% <span className="relative z-50 rounded-full h-3 w-3 bg-[#fd4e71]"> </span></div></MenuItem>
                <MenuDivider />
                </div>
                <button  onClick={()=>setOpenTab(4)} ><IoIosArrowDown className="animate-bounce"/></button>
              </MenuList>
            </Menu>

          </Flex>
        </Flex>
       
        </div>
  
      </Box>
      <ParticlesBg type="cobweb" color="#2d62ec" bg={{
  position: "absolute",
  zIndex: 1,
  width: '100%',
  right: 0,
  top:0,
  opacity: '70%'
}} />
<div className="h-full lg:h-[calc(100vh-50px)] ">
      <Box p={4} height='100%'>
 <div className="relative z-10 h-full">
                {openTab==1 && <Dashboard setOpenTab={setOpenTab}/> }
                {openTab==2 && <Stock/>}
                {openTab==3 && <Usage/>}
                {openTab==4 && <Notifications/>}
                {openTab==5 && <Commandes/>}
                {openTab==6 && <Fournisseurs/>}
                {openTab==7 && <Utilisateurs/>}
                {openTab==8 && <Services/>}
                {openTab==9 && <Historique/>}
                {openTab==10 && <Parametres/>}
                {openTab==11 && <Apropos/>}
                </div>
      </Box>
      </div>
    

            {isOpen &&
             <div className="fixed  flex top-0  w-full z-30 ">
                 <SideNavbar openTab={openTab} setOpenTab={setOpenTab} setSection={setSection}  onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
             </div>}
                 {/* <div className="w-3/4 z-50 bg-[#000] opacity-30" onClick={onClose}>
                 </div> /}
            {/* </div>
            } */}
            {/* <div className="h-[calc(100vh-70px)]">
                {openTab==1 && <Dashboard/> }
                {openTab==2 && <Stock/>}
                {openTab==3 && <Usage/>}
                {openTab==4 && <Notifications/>}
                {openTab==5 && <Commandes/>}
                {openTab==6 && <Fournisseurs/>}
                {openTab==7 && <Utilisateurs/>}
                {openTab==8 && <Services/>}
                {openTab==9 && <Historique/>}
                {openTab==10 && <Parametres/>}
                {openTab==11 && <Apropos/>}
            </div> */}
            
            
        </div>
    )
}

export default Main;