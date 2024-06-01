"use client"
import WinButton from "./components/WinButton";
import Image from "next/image";
import { useState } from "react";
import Desktop from "./components/Desktop";




export default function Home() {
    let time  = new Date().toLocaleTimeString()

    const [ctime,setTime] = useState(time)
    const UpdateTime=()=>{
      time =  new Date().toLocaleTimeString()
      setTime(time)
    }
  
  setInterval(UpdateTime)


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#008080]">
      <Desktop/>
      <div className="bg-[#c2c2c2] shadow-w98-w w-full flex p-1 z-50">
        <WinButton state="default" className="font-bold subpixel-antialiased">Пуск</WinButton>
        <div className="w-[2px] mx-1 bg-[#999999]"/>
        <div className="flex-1 flex">
          <WinButton state="default" className="w-52">Приложение</WinButton>
        </div>
        <WinButton state="in" className="w-24 " ><div className="text-sm grow my-auto text-right">{ctime}</div></WinButton>
      </div>
    </main>
  );
}
