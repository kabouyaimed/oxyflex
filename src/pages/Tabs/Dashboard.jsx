import React from "react"
import { Stack, HStack, VStack ,Icon,Box} from '@chakra-ui/react'
import {TbVaccineBottle} from "react-icons/tb"
import {ImUser} from "react-icons/im"
import LineChart from "../../components/LineChart"
import {AiFillPieChart} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"
import ProgressBar from "@ramonak/react-progress-bar";
import {IoIosArrowDown} from "react-icons/io"
function Dashboard({setOpenTab}){
  const Data1 = [
    {
      id: 0,
      year: 0,
      vo2: 0,
     
    },
    {
      id: 1,
      year: 2,
      vo2: 10,
   
    },
    {
      id: 2,
      year: 4,
      vo2: 45,
     
    },
    {
      id: 3,
      year: 6,
      vo2: 25,
      
    },
    {
      id: 4,
      year: 8,
      vo2: 50,
    },
    {
      id: 5,
      year: 10,
      vo2: 15,
     
    },
    {
      id: 6,
      year: 12,
      vo2: 80,
      
    },
    {
      id: 6,
      year: 14,
      vo2: 80,
      
    },
    {
      id: 6,
      year: 16,
      vo2: 80,
      
    },
    {
      id: 6,
      year: 18,
      vo2: 80,
      
    },
  
  ];
  const options1 = {
    responsive: true,
    interaction: {
      mode: 'index' ,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: '',
      },
    },
    scales: {
      y: {
        type: 'linear' ,
        display: false,
        position: 'left' ,
      },
      y1: {
        type: 'linear' ,
        display: false,
        position: 'right' ,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };


  const Data2 = [
    {
      id: 0,
      year: ``,
      vo2: 0,
     
    },
    {
      id: 1,
      year: `Oct`,
      vo2: 10,
   
    },
    {
      id: 2,
      year: `Nov`,
      vo2: 45,
     
    },
    {
      id: 3,
      year: `Dec`,
      vo2: 25,
      
    },
    {
      id: 4,
      year: `Jan`,
      vo2: 50,
    },
    {
      id: 5,
      year: `Fev`,
      vo2: 15,
     
    },
    {
      id: 6,
      year: `Mar`,
      vo2: 80,
      
    },
  
  ];
  const options2 = {
    responsive: true,
    interaction: {
      mode: 'index' ,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: '',
      },
    },
    scales: {
      y: {
        type: 'linear' ,
        display: false,
        position: 'left' ,
      },
      y1: {
        type: 'linear' ,
        display: false,
        position: 'right' ,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  
  const [userData1, setUserData1] = React.useState({
    labels: Data1.map((data) => data.year),
    datasets: [
      {
        tension:0.1,
          label: " ",
          data: Data1.map((data) => data.vo2),
          borderColor: "#0005dd",
          Color: "#fff",
          borderWidth: 3,
          
      },
    ],
  });
  const [userData2, setUserData2] = React.useState({
    labels: Data2.map((data) => data.year),
    datasets: [
      {
        tension:0.6,
          label: " ",
          data: Data2.map((data) => data.vo2),
          borderColor: "#6ce2f1",
          Color: "#fff",
          borderWidth: 6,
          
      },
    ],
  });
    return (
        <div className="w-full h-full flex flex-col items-center justify-between">
           <div className="h-fit w-full flex lg:flex-row flex-col items-center justify-center ">
                        <div  className="cursor-pointer m-2 bg-[#6ce2f1] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full px-5 py-3  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl"><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Estimation <br/>[0-7] fevrier</div>
                            <div className="text-xl ">90</div>
                        </div>
                  
                        <div onClick={()=>setOpenTab(2)} className="cursor-pointer m-2 bg-[#00b7da] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full px-5 py-3  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl "><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Bouteilles<br/>dans stock</div>
                            <div className="text-xl ">90</div>
                        </div>
                        <div onClick={()=>setOpenTab(3)}  className="cursor-pointer m-2 bg-[#4b78ec] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full px-5 py-3  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl  text-[#f00]"><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Bouteilles<br/>utilisées</div>
                            <div className="text-xl ">90</div>
                        </div>
                        <div  onClick={()=>setOpenTab(3)} className="cursor-pointer m-2 bg-[#096b9c] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full px-5 py-3  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl  text-[#ff7800]"><Icon as={TbVaccineBottle}/></div>
                            <div className="text-lg font-normal mx-5">Consommation<br/>d'aujourd'hui</div>
                            <div className="text-xl ">90</div>
                        </div>
                        <div onClick={()=>setOpenTab(7)} className="cursor-pointer m-2 bg-[#00055d] text-[#fff] font-bold lg:w-1/5 md:w-2/3 w-full h-full px-5 py-3  rounded-xl shadow-xl flex items-center justify-between ">
                            <div className="text-5xl"><Icon as={ImUser}/></div>
                            <div className="text-lg font-normal mx-5">Utilisateurs</div>
                            <div className="text-xl ">90</div>
                        </div>
            </div>
            <div className="flex items-center justify-evenly w-full  my-3  ">
            {/* <div className="w-1/5 flex flex-col items-center justify-center  bg-[#fff] shadow-xl rounded-xl p-5 h-full ">
                <h1 className="font-bold text-xl w-full border-b-2 border-[#8e9195] flex items-center justify-start">Utilisateurs</h1>
              </div> */}
              <div className="w-1/4 flex flex-col items-center justify-center bg-[#fff] shadow-xl rounded-xl p-3 h-full  ">
                <h1 className="font-bold text-xl w-full border-b-2 border-[#8e9195] flex items-center justify-start mb-2">Services</h1>
                <div>
                  <div className="w-full my-1 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between">
                      <h1>Service 1</h1>
                      <h1 className="font-bold">64%</h1>
                    </div>
                    <ProgressBar completed={64} height={8} width={'250px'} customLabel=" " bgColor="#6ce2f1" margin={2}/>
                </div>
                <div className="w-full my-1 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between">
                      <h1>Service 2</h1>
                      <h1 className="font-bold">74%</h1>
                    </div>
                <ProgressBar completed={74} height={8} width={'250px'} customLabel=" " bgColor="#4b78ec" margin={2}/>
                </div>
                <div className="w-full mt-1 mb-3 flex flex-col items-center">
                    <div className="w-full flex items-center justify-between">
                      <h1>Service 3</h1>
                      <h1 className="font-bold">80%</h1>
                    </div>
                <ProgressBar completed={80} height={8} width={'250px'} customLabel=" " bgColor="#00055d" margin={2}/>
                </div>
                </div>
                <div className="w-full flex items-center justify-center text-lg ">
                    <button  onClick={()=>setOpenTab(8)} ><IoIosArrowDown className="animate-bounce"/></button>
                </div>
              </div>
              <div className="w-1/4 flex flex-col items-center justify-center bg-[#fff] shadow-xl rounded-xl px-3 pt-3 h-full  ">
                <h1 className="font-bold text-lg w-full border-b-2 border-[#8e9195] flex items-center justify-start">Les bouteilles sur le point de s'épuiser </h1>
                <div>
                  <div className="w-full my-1 flex flex-col items-center">
                  <div className="flex items-center justify-end">
                    <div className="text-4xl  text-[#00f]"><Icon as={TbVaccineBottle}/></div>
                    <div>
                    <div className="w-full flex items-center justify-between">
                      <h1>Service 1</h1>
                      <h1 className="font-bold">25L (35%)</h1>
                    </div>
                        <ProgressBar completed={35} height={8} width={'250px'} customLabel=" " bgColor="#f00" margin={2}/>
                        </div></div>
                </div>
                <div className="w-full my-1 flex flex-col items-center">
                <div className="flex items-center justify-end">
                    <div className="text-4xl  text-[#00f]"><Icon as={TbVaccineBottle}/></div>
                    <div>
                    <div className="w-full flex items-center justify-between">
                      <h1>Service 2</h1>
                      <h1 className="font-bold">35L (98%)</h1>
                    </div>
                <ProgressBar completed={98} height={8} width={'250px'} customLabel=" " bgColor="#ff7800" margin={2}/>
                </div></div>
                </div>
                <div className="w-full my-1 flex flex-col items-center">
                <div className="flex items-center justify-end">
                    <div className="text-4xl  text-[#00f]"><Icon as={TbVaccineBottle}/></div>
                    <div>
                    <div className="w-full flex items-center justify-between">
                      <h1>Service 3</h1>
                      <h1 className="font-bold">50L (25%)</h1>
                    </div>
                <ProgressBar completed={25} height={8} width={'250px'} customLabel=" " bgColor="#1bc167" margin={2}/>
                </div></div>
                </div>
                </div>
                <div className="w-full flex items-center justify-center text-lg">
                    <button onClick={()=>setOpenTab(8)} ><IoIosArrowDown className="animate-bounce"/></button>
                </div>
              </div>
              <div className="w-1/4 flex flex-col items-center justify-center ">
                <div className="mb-2 relative flex items-center justify-center bg-[#fff] shadow-xl rounded-xl p-5 pr-10">
                  <h1 className="text-5xl text-[#00f] mr-5 "><AiFillPieChart/></h1>
                  <h1 className="text-lg font-bold">Total usage <br/> aujourd'hui</h1>
                  <h1 className="font-bold text-[#f00] text-3xl ml-5">80L</h1>
                  <button className="absolute top-2 right-2 text-xl"><BsThreeDotsVertical/></button>
                </div>
                <div className="mt-2 relative flex items-center justify-center bg-[#fff] shadow-xl rounded-xl p-5 pr-10">
                  <h1 className="text-5xl text-[#8e9195] mr-5 "><AiFillPieChart/></h1>
                  <h1 className="text-lg font-bold">Total usage <br/> hier</h1>
                  <h1 className="font-bold text-[#8e9195] text-3xl ml-5">77L</h1>
                  <button className="absolute top-2 right-2 text-xl"><BsThreeDotsVertical/></button>
                </div>
              </div>
            

            </div>
            <div className="flex items-center justify-center w-full  mb-5  ">
              <div className="relative bg-white w-5/12 h-full shadow-xl rounded-xl mr-10 pr-12 pl-5">
                   <h1 className="absolute top-2 left-5 font-bold text-lg">Consommation en temps réel</h1>
                   <h1 className="absolute top-10 left-3  text-md">VO2(L)</h1>
                   <h1 className="absolute bottom-4 right-2  text-md">Tmp(h)</h1>

                   <LineChart options={options1} chartData={userData1}/>
                </div>
              <div className="relative bg-white w-5/12 h-full shadow-xl rounded-xl ml-10 pr-12 pl-5">
                   <h1 className="absolute top-2 left-5 font-bold text-lg">Consommation globale</h1>
                   <h1 className="absolute top-10 left-3  text-md">VO2(L)</h1>
                   <h1 className="absolute bottom-4 right-2  text-md">Mois</h1>
                   <LineChart options={options2} chartData={userData2}/>
              </div>
            </div>
        </div>
    )
}
export default Dashboard;