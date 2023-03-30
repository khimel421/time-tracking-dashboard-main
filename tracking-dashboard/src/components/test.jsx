import React from "react";

function Input ( ){
    return (
        <div  className="w-1/2 h-60 bg-play mx-auto flex gap-2 justify-evenly">
            <button className=" w-1/4 h-[100px] py-1 text-2xl bg-exercise">
                1
            </button>
            <button className=" w-1/4 py-1 text-2xl bg-exercise">
                2
            </button>
            <button className=" w-1/4 py-1 text-2xl bg-exercise">
                3
            </button>
        </div>
    )
}

export default Input;