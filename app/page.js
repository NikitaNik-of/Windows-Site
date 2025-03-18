"use client"
import WinButton from "./components/WinButton";
import Image from "next/image";
import { useState } from "react";
import Desktop from "./components/Desktop";
import dirIm from "./public/dir.png"
import dirIm_sm from "./public/dir_sm.png"
import Clock from "react-live-clock";
import { IoMdArrowDropright } from "react-icons/io";




export default function Home() {

  const [WindowsList, setWindowsList] = useState([[0, "TitleName0", dirIm, dirIm_sm, true], [1, "TitleName1", dirIm, dirIm_sm, false], [2, "TitleName2", dirIm, dirIm_sm, true]])
  const [Active, setActive] = useState(0)
  const [startActive, setStartActive] = useState(0)


  return (
    <main className=" select-none flex min-h-screen flex-col items-center justify-between bg-[#008080]" onClickCapture={() => {setStartActive(0)}}>
      <Desktop WindowsList={WindowsList} setWindowsList={setWindowsList} Active={Active} setActive={setActive} />
      <div className="bg-[#c2c2c2] shadow-w98-w w-full flex p-1 z-50 relative">
        <WinButton state={startActive == 0 ? "startbtn" : "startbtnIn"} onClick={() => setStartActive(1)} className="font-bold subpixel-antialiased">Пуск</WinButton>

        <WinButton state="start" onClick={() => setStartActive(1)} active={startActive} className={startActive == 0 ? "hidden" : "absolute bg-[#c2c2c2] bottom-[34px] left-0 flex cursor-default"}>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Ебучий Folder</text><IoMdArrowDropright className="my-auto ml-auto"/></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Menu Option</text></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Menu Option</text></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Menu Option</text></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Menu Option</text></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Menu Option</text></div>
          <div className="px-1"><div className="h-px bg-neutral-500"></div><div className="h-px bg-white"></div></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text>Кнопка нахуй</text></div>
          <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white"><Image className="mr-2" height={22} src={dirIm} alt=""/><text className="">Жоповая кнопка</text></div>
        </WinButton>

        <div className="w-[2px] mx-1 bg-[#999999]" />
        <div className="flex-1 flex space-x-1">
          {WindowsList.map((wind, i) => (
            <WinButton key={i} img={wind[3]} state={Active == i ? "barIn" : "bar"} onClick={() => setActive(wind[0])} className={(wind[4] ? "" : "hidden") + " w-52"}>{wind[1]}</WinButton>
          ))}

        </div>
        <WinButton state="in" className="w-24" ><div className="text-sm grow my-auto text-right">
          <Clock

            format={'HH:mm:ss'}
            style={{ fontSize: '1em' }}
            ticking={true}
            noSsr />
        </div></WinButton>
      </div>
    </main>
  );
}
