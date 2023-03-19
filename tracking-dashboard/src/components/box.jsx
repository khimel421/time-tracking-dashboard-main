import React from "react";

function Box ({num}){

    return(
        <div className={` font-rubikbg-work h-full rounded-2xl relative`}>
            <div className={`rounded-2xl bg-work flex justify-end 
            overflow-hidden `}>
                <img className="mr-3" src="/images/icon-work.svg" alt="" />
            </div>
            <div className={`absolute top-10 left-0 right-0 bg-dark-blue lg:h-[203px] sm:h-28 rounded-2xl flex justify-around items-center`}>
                <div className="left text-[#f2f5f3]">
                    <p>Work</p>
                    <p className=" text-2xl">32hrs</p>
                </div>
                <div className="right flex flex-col gap-4 justify-end items-end text-pale-blue ">
                    <div className="hover:text-[#ffffff] hover:brightness-125 cursor-pointer">
                        <img className=" " src=" \images\icon-ellipsis.svg" alt="" />
                    </div>
                    <p className="" >Last week - 8hrs</p>
                </div>
            </div>
        </div>
    )
}

export default Box;