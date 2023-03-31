import React from "react";

function Box ({color , img , title , data , testing}){

    const {current_hour, previous_time , time} = data



    return(
        <div className={` font-rubik ${color}  h-full rounded-2xl relative`}>
            <div className={`rounded-2xl ${color} flex justify-end 
            overflow-hidden `}>
                <img className="mr-3" src={img} alt="" />
            </div>
            <div className={`absolute top-10 left-0 right-0 bottom-0 bg-dark-blue lg:h-[190px] sm:h-28 rounded-2xl `}>
                <div className="info-container w-[85%] mx-auto flex flex-col justify-center gap-4 mt-8">
                    <div className={`top flex justify-between items-center text-[#ffffff]`}>
                        <p>{title}</p>
                        <div className=" hover:brightness-125 duration-300 cursor-pointer">
                            <img className=" " src=" \images\icon-ellipsis.svg" alt="" />
                        </div>
                    </div>
                    <div className={`bottom flex lg:flex-col justify-between sm:items-center lg:items-start lg:gap-5`}>
                        <p className=" sm:text-3xl lg:text-5xl text-[#ffffff] font-rubik font-light">{current_hour}hrs</p>
                        <p className=" text-pale-blue">Last {time} - {previous_time}hrs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box;