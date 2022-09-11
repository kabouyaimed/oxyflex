import {AiFillDelete,AiFillEdit} from "react-icons/ai"
function Bouteille({index,reference,service,utilisateur,capacite,reste}){
    return (
        <div className={`${index%2===0? 'bg-[#fff]':'bg-[#f7faff]'}  border-2 border-[#d8e2eb] grid grid-cols-5  text-lg py-2 rounded-xl mx-2 my-1 pl-3`}>
        <div>{reference}</div>
        <div>{service}</div>
        <div>{utilisateur}</div>
        <div>{capacite}</div>
        <div className={`${reste<30? 'bg-[#f00]': reste<50? 'bg-[#ff7800]':'bg-[#1bc167]'} rounded-full text-[#fff] font-bold px-5 py-1 w-fit m-auto`}>{reste}%</div>
       
        </div>
    )
}
export default Bouteille;