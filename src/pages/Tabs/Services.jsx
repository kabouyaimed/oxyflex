import {MdMiscellaneousServices} from "react-icons/md"
import SuiviService from "../../components/SuiviService";
import {useDisclosure} from "@chakra-ui/react"
import AddService from "../../components/AddService";

function Services(){
    const data=[
        {
           service: "service1",
           emplacement: "emplacement",
           nombreBouteilles: 22
        },
        {
            service: "service2",
            emplacement: "emplacement",
            nombreBouteilles: 223
         },
         {
            service: "service3",
            emplacement: "emplacement",
            nombreBouteilles: 2
         },
         {
            service: "service4",
            emplacement: "emplacement",
            nombreBouteilles: 23
         },
         {
            service: "service5",
            emplacement: "emplacement",
            nombreBouteilles: 12
         },
         {
            service: "service4",
            emplacement: "emplacement",
            nombreBouteilles: 23
         },
         {
            service: "service5",
            emplacement: "emplacement",
            nombreBouteilles: 12
         },
         {
            service: "service4",
            emplacement: "emplacement",
            nombreBouteilles: 23
         },
         {
            service: "service5",
            emplacement: "emplacement",
            nombreBouteilles: 12
         },
         {
            service: "service4",
            emplacement: "emplacement",
            nombreBouteilles: 23
         },
         {
            service: "service5",
            emplacement: "emplacement",
            nombreBouteilles: 12
         },
         {
            service: "service4",
            emplacement: "emplacement",
            nombreBouteilles: 23
         },
         {
            service: "service5",
            emplacement: "emplacement",
            nombreBouteilles: 12
         },
         
    ];
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between pr-4">
                <div className="flex items-center justify-center">
                <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l"><MdMiscellaneousServices/></div>
                <h1 >Suivi des services</h1>
                </div>
                {/* <div><button onClick={onOpen} className="mx-3 px-3 py-2 rounded text-xl bg-[#2d62ec] text-[#fff]">Ajouter un service</button></div>
                {isOpen &&
             <div className="fixed  flex top-0  w-full z-30 ">
  <AddService onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>             </div>} */}
            <AddService text="Ajouter un service"/>
            </div>
            <div className="shadow-xl pb-3  flex flex-col items-center justify-between bg-[#fff] rounded-xl h-5/6 mt-5">
                <div className="bg-[#2d62ec] text-[#fff] grid grid-cols-4 font-bold text-lg py-3 rounded-t-xl px-5">
                    <div>Service</div>
                    <div>Emplacement</div>
                    <div>Nombre de bouteilles</div>
                    <div></div>
                </div>
                <div className="w-full h-full py-3 self-center overflow-y-scroll">
                    {
                        data.map((record,index)=>{
                            return (
                                <SuiviService index={index} service={record.service} emplacement={record.emplacement} nombreBouteilles={record.nombreBouteilles}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Services;