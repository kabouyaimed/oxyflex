import React, { Component } from 'react'


// import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ParticlesBg from 'particles-bg'

import './App.css';
// import ParticlesBg from 'particles-bg'
// function App() {
 
  
//   return (
    <>
    {/* <BrowserRouter>
    <div className="absolute z-90"> */}
    {/* <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} /> */}
    {/* </div> */}
    {/* <div className="App w-screen h-screen z-30 "> 
    <Layout/>
  
     </div>
   
   </BrowserRouter> */}
 
   </>
//   );
// }

// export default App;



class App extends Component {
  render () {
    return (
      <>
        <BrowserRouter>
        <div className="App block lg:hidden h-screen w-screen flex items-center justify-center">
        <ParticlesBg type="cobweb" color="#2d62ec" bg={{
  position: "absolute",
  zIndex: 1,
  width: '100%',
  right: 0,
  top:0,
  opacity: '70%'
}} />
          <div className="bg-[#2d62ec] shadow-xl text-xl mx-5 text-[#fff] font-bold relative z-30 rounded-xl p-5 w-fit h-fit">
          Veuillez passer à l'ordinateur pour une meilleure expérience
          </div>
        </div>
        <div className="App lg:block hidden w-screen h-screen z-50 "> 
       <Layout/>
    
     </div>
        </BrowserRouter>
      
      </>
    )
  }
}
export default App;

