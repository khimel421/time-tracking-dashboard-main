import React from "react";
import data from "./data.json"
import Box from "./components/box";

function App (){
    // const work = data

    const ara = [0,1,2,3,4,5]

 
    

    return(
        <section className=" max-w-7xl font-rubik grid lg:grid-cols-4 sm:grid-cols-1 gap-3 w-[80%] mx-auto my-[80px]">
            <div className=" bg-dark-blue lg:row-span-2 text-2xl sm:h-[250px] lg:h-auto rounded-2xl flex flex-col gap-6 ">
                <div className="person-info lg:h-[375px] sm:h-[180px]  sm:flex lg:flex-col  sm: justify-center lg:justify-start lg:gap-8 sm:py-6 bg-blue rounded-2xl lg:pl-4">
                    <div className=" w-[35%] my-5">
                        <div className=" mt-3 mx-auto lg:w-[100px] sm:w-[70px] border-[4px] rounded-full border-[#ffffff]">
                            <img src="/images/image-jeremy.png" alt="dp" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className=" sm:text-base lg:text-xl text-[#f5e9e9]">Report for</p>
                        <p className="text-[#ffffff]   sm: text-xl lg:text-3xl">Jeremy Robson</p>
                    </div>
                </div>
                <div className=" lg:ml-3 btn-box sm:flex lg:flex-col sm:gap-6 lg:gap-2 sm:justify-center text-start sm:text-xl lg:text-lg">
                    <button className="  lg:text-start text-[#6368a4] hover:text-[#f0f3ff]">Daily</button>
                    <button className="  lg:text-start text-[#6368a4] hover:text-[#f0f3ff]">Weekly</button>
                    <button className="  lg:text-start text-[#6368a4] hover:text-[#f0f3ff]">Monthly</button>
                </div>
            </div>
            {ara.map((num,index) => {
                return (
                    <div className=" sm:h-[160px] lg:h-[225px]" key={index}><Box num = {num}/></div>
                )
            })}
        </section>
    )
}

export default App 