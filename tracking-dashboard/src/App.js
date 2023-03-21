import React from "react";
import { useState } from "react";
import data_all from "./data.json"
import Box from "./components/box";

function App (){

    const [work,setWork] = useState(
        {
            current_hour : 0,
            previous_time:0,
            time: " ",
        }
    )



    const [play,setPlay] = useState(
        {
            current_hour : 0,
            previous_time:0,
            time: "day",
        }
    )

    const [study,setStudy] = useState(
        {
            current_hour : 0,
            previous_time:0,
            time: " ",
        }
    )

    const [exercise,setExercise] = useState(
        {
            current_hour : 0,
            previous_time:0,
            time: " ",
        }
    )
    const [social,setSocial] = useState(
        {
            current_hour : 0,
            previous_time:0,
            time: " ",
        }
    )

    const [self_care,setSelf_care] = useState(
        {
            current_hour : 0,
            previous_time:0,
            time: " ",
        }
    )

    const design_box = [
        {
            title : "Work",
            color : "bg-work",
            img : "/images/icon-work.svg",
            data : work
        },
        {
            title : "Play",
            color : "bg-play",
            img : "/images/icon-play.svg",
            data: play
        },
        {
            title : "Study",
            color : "bg-study",
            img : "/images/icon-study.svg",
            data:  study
        },
        {
            title : "Exercise",
            color : "bg-exercise",
            img : "/images/icon-exercise.svg",
            data: exercise
        },
        {
            title : "Social",
            color : "bg-social",
            img : "/images/icon-social.svg",
            data: social
        },
        {
            title : "Self care",
            color : "bg-self-care",
            img : "/images/icon-self-care.svg",
            data: self_care,
        },
    ]

    const handle_Daily_Info = (e) => {
        let daily_work = data_all[0].timeframes.daily

        let time = "day"
        
        setWork({
            current_hour : daily_work.current,
            previous_time : daily_work.previous,
            time: time
        })

        let daily_play = data_all[1].timeframes.daily

        setPlay({
            current_hour : daily_play.current,
            previous_time : daily_play.previous,
            time: time
        })

        let daily_study = data_all[2].timeframes.daily

        setStudy({
            current_hour : daily_study.current,
            previous_time : daily_study.previous,
            time: time
        })

        let daily_exercise = data_all[3].timeframes.daily

        setExercise({
            current_hour : daily_exercise.current,
            previous_time : daily_exercise.previous,
            time: time
        })

        let daily_social = data_all[4].timeframes.daily

        setSocial({
            current_hour : daily_social.current,
            previous_time : daily_social.previous,
            time: time
        })

        let daily_self_care = data_all[4].timeframes.daily

        setSelf_care({
            current_hour : daily_self_care.current,
            previous_time : daily_self_care.previous,
            time: time
        })
    }

    const handle_Weekly_Info = (e) => {
        let weekly_work = data_all[0].timeframes.weekly

        let time = "weekly"
        
        setWork({
            current_hour : weekly_work.current,
            previous_time : weekly_work.previous,
            time: time
        })

        let weekly_play = data_all[1].timeframes.weekly

        setPlay({
            current_hour : weekly_play.current,
            previous_time : weekly_play.previous,
            time: time
        })

        let weekly_study = data_all[2].timeframes.weekly

        setStudy({
            current_hour : weekly_study.current,
            previous_time : weekly_study.previous,
            time: time
        })

        let weekly_exercise = data_all[3].timeframes.weekly

        setExercise({
            current_hour : weekly_exercise.current,
            previous_time : weekly_exercise.previous,
            time: time
        })

        let weekly_social = data_all[4].timeframes.weekly

        setSocial({
            current_hour : weekly_social.current,
            previous_time : weekly_social.previous,
            time: time
        })

        let weekly_self_care = data_all[4].timeframes.weekly

        setSelf_care({
            current_hour : weekly_self_care.current,
            previous_time : weekly_self_care.previous,
            time: time
        })
    }

    const handle_monthly_Info = (e) => {
        let monthly_work = data_all[0].timeframes.monthly

        let time = "day"
        
        setWork({
            current_hour : monthly_work.current,
            previous_time : monthly_work.previous,
            time: time
        })

        let monthly_play = data_all[1].timeframes.monthly

        setPlay({
            current_hour : monthly_play.current,
            previous_time : monthly_play.previous,
            time: time
        })

        let monthly_study = data_all[2].timeframes.monthly

        setStudy({
            current_hour :monthly_study.current,
            previous_time : monthly_study.previous,
            time: time
        })

        let monthly_exercise = data_all[3].timeframes.monthly

        setExercise({
            current_hour : monthly_exercise.current,
            previous_time : monthly_exercise.previous,
            time: time
        })

        let monthly_social = data_all[4].timeframes.monthly

        setSocial({
            current_hour : monthly_social.current,
            previous_time : monthly_social.previous,
            time: time
        })

        let monthly_self_care = data_all[4].timeframes.monthly

        setSelf_care({
            current_hour : monthly_self_care.current,
            previous_time : monthly_self_care.previous,
            time: time
        })
    }

    

    return(
        <section className=" max-w-7xl font-rubik grid lg:grid-cols-4 sm:grid-cols-1 gap-6 w-[80%] mx-auto my-[80px]">
            <div className=" bg-dark-blue lg:row-span-2 text-2xl sm:h-[250px] lg:h-auto rounded-2xl flex flex-col gap-6 ">
                <div className="person-info lg:h-[360px] sm:h-[180px]  sm:flex lg:flex-col  sm: justify-center lg:justify-start lg:gap-5 sm:py-6 bg-blue rounded-2xl lg:pl-4">
                    <div className=" w-[35%] my-5">
                        <div className=" mt-3 mx-auto lg:w-[100px] sm:w-[70px] border-[4px] rounded-full border-[#ffffff]">
                            <img src="/images/image-jeremy.png" alt="dp" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className=" sm:text-base lg:text-xl text-[#f5e9e9]">Report for</p>
                        <p className=" font-rubik font-light text-[#ffffff]   sm: text-xl lg:text-4xl">Jeremy Robson</p>
                    </div>
                </div>
                <div className=" lg:ml-6 btn-box sm:flex lg:flex-col sm:gap-6 lg:gap-2 sm:justify-center text-start sm:text-xl lg:text-lg pb-3">
                    <button className="  lg:text-start text-[#6368a4] hover:text-[#f0f3ff] active:text-[#f0f3ff] duration-300" onClick={handle_Daily_Info}>Daily</button>
                    <button className="  lg:text-start text-[#6368a4] active:text-[#f0f3ff] hover:text-[#f0f3ff] duration-300" onClick={handle_Weekly_Info}>Weekly</button>
                    <button className="  lg:text-start text-[#6368a4] active:text-[#f0f3ff] hover:text-[#f0f3ff] duration-300" onClick={handle_monthly_Info}>Monthly</button>
                </div>
            </div>
            {design_box.map((item,index) => {
                return (
                    <div className=" sm:h-[160px] lg:h-[225px]" key={index}><Box title = {item.title} color={item.color} img={item.img} data = {item.data}/></div>
                )
            })}
        </section>
    )
}

export default App 