import {React,useRef,useState} from "react"
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import ParticlesBg from 'particles-bg'
import bgAuth from "../assets/bgAuth.jpg"
function Auth(){
    // Declarations
    const [visible,setVisible]=useState(false)
    const passwordRef=useRef()
    const usernameRef=useRef()

    // Function
    const hundleSubmit=(e)=>{
      e.preventDefault()
      const user={
          userName:usernameRef.current.value,
          password:passwordRef.current.value,
      }
      console.log(user)
    }

    // STYLES
    const fieldContainer=" relative md:w-2/3 w-11/12 mb-1"
    const inputTitleStyle="font-bold text-md text-start md:w-2/3 w-11/12 mt-3"
    const inputField=" rounded  w-full outline-none border-2 border-[#C4C4C4] p-2 "
    const submitBtnStyle="cursor-pointer mt-5 md:w-2/3 w-11/12 rounded p-2 bg-[#4b78ec] text-[#fff] font-bold"
    const rightSection="relative z-50 lg:w-1/2 w-full h-full flex flex-col items-center justify-center "
    const leftSection="relative z-30 md:w-1/2 w-11/12 h-full  hidden lg:block  shadow-xl bg-[#333] rounded-r-xl"
    const mainSection="h-full flex items-center justify-center m-0 p-0"
    const rightSection_="relative z-50 lg:w-1/2 w-full h-full flex flex-col items-center justify-center "

    const [showPassPage,setShowPassPage]=useState(false)
    return(
        <div className={mainSection}>
            {showPassPage && <div className={rightSection_}>
               
               <h1 className="flex items-center justify-center font-bold text-xl">
                 
                   <p>Mot de passe oublié</p>
               </h1>
               <form  className="w-2/3 flex flex-col items-center justify-center" action="" onSubmit={hundleSubmit}>
               <h2 className={inputTitleStyle}>Nouveau Mot de passe</h2>
                   <div className={fieldContainer}>
                       <input className={inputField +"pr-12"} type={visible? "text":"password"} placeholder="mot de passe" ref={passwordRef}/>
                       <button className=" absolute right-4 top-2 text-[#c4c4c4] text-3xl" onClick={(e)=>{
                           e.preventDefault()
                           setVisible(!visible)}
                           }>{visible? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button>
                   </div>
                   <br/>
                   <h2 className={inputTitleStyle}>Confirmer Mot de passe</h2>
                   <div className={fieldContainer}>
                       <input className={inputField +"pr-12"} type={visible? "text":"password"} placeholder="mot de passe" ref={passwordRef}/>
                       <button className=" absolute right-4 top-2 text-[#c4c4c4] text-3xl" onClick={(e)=>{
                           e.preventDefault()
                           setVisible(!visible)}
                           }>{visible? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button>
                   </div>
                   <p className="cursor-pointer underline text-[#4b78ec] text-md text-end md:w-2/3 w-11/12"><a onClick={()=>setShowPassPage(!showPassPage)} href="#">Se connecter</a></p>
                 

                   <input className={submitBtnStyle} type="submit" name="" id="" value="Confirmer"/>

               </form>
           </div>}
            <div className={leftSection} id="pot">
              <img src={bgAuth} alt="" className=" w-full h-full object-fit rotate-180 opacity-70  shadow-xl"/>
            </div>
            <ParticlesBg type="cobweb" color="#2d62ec" bg={{
  position: "absolute",
  zIndex: 10,
  width: '70%',
  right: 0,
  top:0,
  opacity: '40%'
}} />
 <ParticlesBg type="cobweb" color="#2d62ec" bg={{
  position: "absolute",
  zIndex: 10,
  width: '70%',
  left: 0,
  top:0,
  opacity: '40%'
}} />
          {!showPassPage &&  <div className={rightSection}>
               
                <h1 className="flex items-center justify-center font-bold text-xl">
                    <p className="bg-[#03f] px-3 py-2 rounded-3xl mr-3">L</p>
                    <p>OXY<span>FLEX</span></p>
                </h1>
                <form  className="w-2/3 flex flex-col items-center justify-center" action="" onSubmit={hundleSubmit}>
                    <h2 className={inputTitleStyle}>Identifiant</h2>
                    <div className={fieldContainer}>
                     <input className={inputField} type="text" placeholder="example@xxx.yy" ref={usernameRef}/>
                    </div>
                    <br/>
                    <h2 className={inputTitleStyle}>Mot de passe</h2>
                    <div className={fieldContainer}>
                        <input className={inputField +"pr-12"} type={visible? "text":"password"} placeholder="mot de passe" ref={passwordRef}/>
                        <button className=" absolute right-4 top-2 text-[#c4c4c4] text-3xl" onClick={(e)=>{
                            e.preventDefault()
                            setVisible(!visible)}
                            }>{visible? <AiOutlineEye/>:<AiOutlineEyeInvisible/>}</button>
                    </div>
                    <p className="cursor-pointer underline text-[#4b78ec] text-md text-end md:w-2/3 w-11/12"><a onClick={()=>setShowPassPage(!showPassPage)} href="#">mot de passe oublié</a></p>
                    <div className="flex items-center mt-5 md:w-2/3 w-11/12 text-start">
                        <input className="cursor-pointer w-5 h-5" type="checkbox" name="stayConnected" id="stayConnected"/>
                        <label className="ml-2" htmlFor="stayConnected">Gardez-moi connecté</label>
                    </div>

                    <input className={submitBtnStyle} type="submit" name="" id="" value="Se connecter"/>

                </form>
            </div>}
        </div>
    )
}

export default Auth;