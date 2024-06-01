"use client"
import WinButton from "./components/WinButton";
import Image from "next/image";
import { useState } from "react";
import Desktop from "./components/Desktop";
import dirIm from "./public/dir.png"
import dirIm_sm from "./public/dir_sm.png"



export default function Home() {
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
  
  setInterval(UpdateTime)
const [WindowsList, setWindowsList] = useState([[0, "TitleName0", dirIm, dirIm_sm, true], [1, "TitleName1", dirIm, dirIm_sm, false], [2, "TitleName2", dirIm, dirIm_sm, true]])
const [Active, setActive] = useState(0)


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#008080]">
      <Desktop WindowsList={WindowsList} setWindowsList={setWindowsList} Active={Active} setActive={setActive}/>
      <div className="bg-[#c2c2c2] shadow-w98-w w-full flex p-1 z-50">
        <WinButton state="start" className="font-bold subpixel-antialiased">Пуск</WinButton>
        <div className="w-[2px] mx-1 bg-[#999999]"/>
        <div className="flex-1 flex space-x-1">
          {WindowsList.map((wind, i) => (
            <WinButton key={i} img={wind[3]} state={Active == i ? "barIn": "bar"} onClick={() => setActive(wind[0])} className={(wind[4]? "" : "hidden") + " w-52"}>{wind[1]}</WinButton>
          ))}
          
        </div>
        <WinButton state="in" className="w-24" ><div className="text-sm grow my-auto text-right">{ctime}</div></WinButton>
      </div>
    </main>
  );
}
