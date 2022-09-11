import {AiFillSetting} from "react-icons/ai"
import AddService from "../../components/AddService";
import ChangePassword from "../../components/ChangePassword";
import SuiviService from "../../components/SuiviService";
function Parametres(){
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
    ];
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="shadow-xl w-2/3 font-bold text-3xl bg-[#fff] rounded flex items-center justify-between">
                <div className="flex items-center justify-center">
                <div className="mr-5 bg-[#2d62ec] text-[#fff] text-5xl p-2 rounded-l"><AiFillSetting/></div>
                <h1 >Paramètres</h1>
                </div>
            </div>
            <div className="shadow-xl flex flex-col items-center justify-between bg-[#fff] rounded-xl w-1/3 h-fit py-5 mt-16 border-t-8 border-[#2d62ec]">
              <div className="w-full flex items-center justify-between px-10 my-2 text-xl font-bold">
                  <h1>Catégorie de la bouteille</h1>
                  <button className="bg-[#2d62ec] px-2 py-2 text-[#fff] rounded">Ajouter</button>
              </div>
              <div className="w-full flex items-center justify-between px-10 my-2 text-xl font-bold">
                  <h1>Service</h1>
                  <AddService text="Ajouter"/>
              </div>
              <div className="w-full flex items-center justify-between px-10 my-2 text-xl font-bold">
                  <h1>Role</h1>
                  <button className="bg-[#2d62ec] px-2 py-2 text-[#fff] rounded">Ajouter</button>
              </div>
              <div className="w-full flex items-center justify-between px-10 my-2 text-xl font-bold">
                  <h1>Utilisateur</h1>
                  <button className="bg-[#2d62ec] px-2 py-2 text-[#fff] rounded">Ajouter</button>
              </div>
              <div className="w-full flex items-center justify-between px-10 my-2 text-xl font-bold">
                  <h1>Mot de passe</h1>
                  <ChangePassword/>
              </div>
                
            </div>
        </div>
    )
}
export default Parametres;