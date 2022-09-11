import {VscFileSymlinkFile} from "react-icons/vsc"
import AddCommande from "../../components/AddCommande";
import Commande from "../../components/Commande";
import SuiviBouteille from "../../components/SuiviBouteille";
import SuiviService from "../../components/SuiviService";
import {useDisclosure} from "@chakra-ui/react"
function Commandes(){
    const data=[
        {
           numCmd: "000000012",
           hc: 100,
           ttc: 22,
           ajoutePar:"david david",
           dateDeCreation:"19/09/2022",
           etat:"Reçue"
        },
        {
            numCmd: "000000013",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Validée"
         },
         {
            numCmd: "000000014",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"En Attente"
         },
         {
            numCmd: "000000015",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Validée"
         },
         {
            numCmd: "000000016",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Reçue"
         },
         {
            numCmd: "000000015",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Validée"
         },
         {
            numCmd: "000000016",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Reçue"
         },
         {
            numCmd: "000000015",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Validée"
         },
         {
            numCmd: "000000016",
            hc: 100,
            ttc: 22,
            ajoutePar:"david david",
            dateDeCreation:"19/09/2022",
            etat:"Reçue"
         },
    ];

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
                <div className="flex items-center justify-center">
                <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l"><VscFileSymlinkFile/></div>
                <h1 >Commande</h1>
                </div>
                <div><button onClick={onOpen} className="mx-3 px-3 py-2 rounded text-xl bg-[#2d62ec] text-[#fff]">+ Nouvelle commande</button></div>
                {isOpen &&
             <div className="fixed  flex top-0  w-full z-30 ">
  <AddCommande onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>             </div>}
              
            </div>
            <div className="shadow-xl w-2/3 pb-3  flex flex-col items-center justify-between bg-[#fff] rounded-xl h-5/6 mt-5">
                <div className="w-full bg-[#2d62ec] text-[#fff] grid grid-cols-6 font-bold text-lg py-3 rounded-t-xl px-5">
                    <div>N commande</div>
                    <div>Date de création</div>
                    <div>HT</div>
                    <div>TTC</div>
                    <div className="pr-3">Etat</div>
                    <div>Ajouté par</div>
                </div>
                <div className="w-full h-full py-3 self-center overflow-y-scroll">
                    {
                        data.map((record,index)=>{
                            return (
                                <Commande index={index}  numCmd={record.numCmd} dateDeCreation={record.dateDeCreation} hc={record.hc} ttc={record.ttc} etat={record.etat} ajoutePar={record.ajoutePar}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Commandes;