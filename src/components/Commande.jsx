import {AiFillDelete,AiFillEdit} from "react-icons/ai"
function Commande({index,numCmd,ttc,hc,etat,dateDeCreation,ajoutePar}){
    return (
        <div className={`${index%2===0? 'bg-[#fff]':'bg-[#f7faff]'} items-center border-2 border-[#d8e2eb] grid grid-cols-6  text-lg py-2 rounded-xl mx-2 my-1 pl-3`}>
        <div>{numCmd}</div>
        <div>{dateDeCreation}</div>
        <div className="pl-3">{hc}</div>
        <div className="pl-3">{ttc}</div>
        <div className={`${etat=="En Attente"? 'bg-[#ff674e]':etat=="Validée"? 'bg-[#25e27c]':'bg-[#0079b6]'} py-1 rounded text-[#fff]`}>{etat}</div>
        <div className="pl-5">{ajoutePar}</div>
     
    </div>
    )
}
export default Commande;