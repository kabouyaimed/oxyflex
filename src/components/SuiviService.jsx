import {AiFillDelete,AiFillEdit} from "react-icons/ai"
import DeleteService from "./DeleteService"
function SuiviService({index,service,emplacement,nombreBouteilles}){
    return (
        <div className={`${index%2===0? 'bg-[#fff]':'bg-[#f7faff]'}  border-2 border-[#d8e2eb] grid grid-cols-4  text-lg py-2 rounded-xl mx-2 my-1 pl-5`}>
        <div>{service}</div>
        <div>{emplacement}</div>
        <div>{nombreBouteilles}</div>
        <div className="flex items-center justify-center text-3xl text-[#8e9195] ">
            <button className="mr-3 hover:text-[#000]"><DeleteService/></button>
            <button className="ml-3 hover:text-[#000]"><AiFillEdit/></button>
        </div>
    </div>
    )
}
export default SuiviService;