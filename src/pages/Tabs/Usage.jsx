import {CgCarousel} from "react-icons/cg"
import {useState,useRef} from "react"
import {useDisclosure,Select,FormLabel,Button} from "@chakra-ui/react"
import Bouteille from "../../components/Bouteille"
function Usage(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const data=[
        {
            service:"nidhal",
            reference:"B922/333",
            utilisateur:"nidhal chenni",
            capacite:"50L",
            reste:53,
        },
        {
            service:"service2",
            reference:"B912/333",
            utilisateur:"nidhal chenni",
            capacite:"50L",
            reste:33,
         },
         {
            service:"service3",
            reference:"B932/333",
            utilisateur:"nidhal chenni",
            capacite:"75L",
            reste:88,
         },
         {
            service:"service2",
            reference:"B912/333",
            utilisateur:"nidhal chenni",
            capacite:"50L",
            reste:33,
         },
         {
            service:"service3",
            reference:"B932/333",
            utilisateur:"nidhal chenni",
            capacite:"75L",
            reste:88,
         },
         {
            service:"service2",
            reference:"B912/333",
            utilisateur:"nidhal chenni",
            capacite:"50L",
            reste:33,
         },
         {
            service:"cardiologie",
            reference:"B932/333",
            utilisateur:"nidhal chenni",
            capacite:"75L",
            reste:88,
         },
         {
            service:"Psychologie",
            reference:"B912/333",
            utilisateur:"nidhal chenni",
            capacite:"90L",
            reste:33,
         },
         {
            service:"cardiologie",
            reference:"B932/333",
            utilisateur:"nidhal chenni",
            capacite:"75L",
            reste:88,
         },
         {
            service:"cardiologie",
            reference:"B992/333",
            utilisateur:"nidhal chenni",
            capacite:"25L",
            reste:10,
         },
        ]
    const serviceRef=useRef()
    const capaciteRef=useRef()
    const [filter,setFilter]=useState({service:"",capacite:'',reste:''})
    const [r,setR]=useState("0")
    const [s,setS]=useState("0")
    const [c,setC]=useState("0")
    const handleChangeReste=(e)=>{
        setR(e.target.value);
    }
    const handleChangeCapacite=(e)=>{
        setC(e.target.value);
    }
    const handleChangeService=(e)=>{
        setS(e.target.value);
    }
    const handleFilter=()=>{
        setFilter({service:s,capacite:c,reste:r})
        // console.log(filter)
    }
    const [oneAtLeast,setOneAtLeast]=useState(false)
    return (
        <div className="h-full w-full flex flex-col items-center justify-center ">
            <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
                <div className="flex items-center justify-center">
                <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l"><CgCarousel/></div>
                <h1 >Suivi des bouteilles en cours d'utilisation</h1>
                </div>
                {/* <div><button onClick={onOpen} className="mx-3 px-3 py-2 rounded text-xl bg-[#2d62ec] text-[#fff]">+ Nouvelle commande</button></div> */}
                {/* {isOpen &&
             <div className="fixed  flex top-0  w-full z-30 ">
  <AddCommande onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>             </div>}
               */}
            </div>
            <div className="flex w-11/12 justify-between mt-5 h-5/6">
                <div className="shadow-xl w-1/4 h-fit rounded-xl ">
                <div className="flex items-center justify-center  w-full bg-[#2d62ec] text-[#fff] font-bold text-lg py-3 rounded-t-xl px-5">
                    <div>Filtre</div>
                    
                </div>
                <div className="bg-[#fff] w-full h-full py-3 self-center pb-5 rounded-b-xl">
                <div className="mx-3 mt-2">
                  <FormLabel htmlFor='service'>Service</FormLabel>
                  <Select id='service' defaultValue='none' onChange={handleChangeService}>
                    <option value='0'>None</option>
                    <option value='cardiologie'>cardiologie</option>
                    <option value='Psychologie'>Psychologie</option>
                    <option value='Anesthesiologie'>Anesthesiologie</option>
                  </Select>
                  </div>
                  <div className="mx-3 mt-2">
                  <FormLabel htmlFor='capacity'>Capacité</FormLabel>
                  <Select id='capacity' defaultValue='none' onChange={handleChangeCapacite}>
                    <option value='0'>None</option>
                    <option value='25L'>25L</option>
                    <option value='30L'>30L</option>
                    <option value='75L'>75L</option>
                    <option value='90L'>90L</option>
                  </Select>
                  </div>
                  <div className="mx-3 mt-2">
                  <FormLabel htmlFor='resteQuantity'>Reste Quantité</FormLabel>
                  <Select id='resteQuantity' defaultValue='none' onChange={handleChangeReste}>
                    <option value='0'>None</option>
                    <option value='1'>0%~30%</option>
                    <option value='2'>31%~60%</option>
                    <option value='3'>61%~100%</option>
                  </Select>
                  </div>
                  <Button marginTop={5} backgroundColor='#2d62ec' color="#fff" onClick={()=>handleFilter()}>Appliquer</Button>
                </div>
                </div>
            <div className="shadow-xl w-2/3 pb-3  flex flex-col items-center justify-between bg-[#fff] rounded-xl h-full ">
                <div className="w-full bg-[#2d62ec] text-[#fff] grid grid-cols-5 font-bold text-lg py-3 rounded-t-xl px-5">
                    <div>Référence</div>
                    <div>Service</div>
                    <div>Utilisateur</div>
                    <div>Capacité</div>
                    <div>Reste Quantité</div>
                </div>
                <div className="w-full h-full py-3 self-center overflow-y-scroll">
                    {
                        data.map((record,index)=>{
                            if ((filter.service==="" || filter.service=="0" || record.service==filter.service)&&(filter.capacite=="" || filter.capacite=="0" || record.capacite===filter.capacite)&&(filter.reste=="" || filter.reste=="0" || ((filter.reste=='1' && record.reste<30)||(filter.reste=='3' && record.reste>60) || (filter.reste=='2' && record.reste>30 && record.reste<60)))){
                                return (
                                <Bouteille index={index}  reference={record.reference} service={record.service} reste={record.reste} utilisateur={record.utilisateur} capacite={record.capacite} />
                            )
                            }
                        })
                    }
                </div>
            </div>
            </div>
        </div>
        
    )
}
export default Usage;