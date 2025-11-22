"use client";
import WinButton from "./../components/WinButton";
import Image from "next/image";
import { useState } from "react";
import Desktop from "./../components/Desktop";
import dirIm from "./../public/dir.png";
import dirIm_sm from "./../public/dir_sm.png";
import ToolsGear from "./../public/tools_gear-0.png";
import Clock from "react-live-clock";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  const [WindowsList, setWindowsList] = useState([
    [0, "Обо мне", dirIm, dirIm_sm, true, "top-32 right-16"],
    [1, "Ссылки", dirIm, dirIm_sm, false, ""],
    [2, "TitleName2", dirIm, dirIm_sm, true, ""],
  ]);
  const [Active, setActive] = useState(0);
  const [startActive, setStartActive] = useState(0);

  return (
    <main
      className=" select-none flex min-h-screen flex-col items-center justify-between bg-[#008080]"
      onClickCapture={() => {
        setStartActive(0);
      }}
    >
      <Desktop WindowsList={WindowsList} setWindowsList={setWindowsList} Active={Active} setActive={setActive} />
      <div className="bg-[#c2c2c2] shadow-w98-w w-full flex p-1 z-50 relative">
        <WinButton state={startActive == 0 ? "startbtn" : "startbtnIn"} onClickCapture={() => setStartActive(Math.abs(startActive - 1))} className="font-bold subpixel-antialiased">
          Пуск
        </WinButton>
        {startActive == 1 && (
          <div onClickCapture={() => setStartActive(1)} className="absolute bg-[#c2c2c2] bottom-[34px] left-0 flex cursor-default shadow-w98-def">
            <WinButton state="start"/>
            <div className="py-0.5 pr-0.5">
              <div className="py-2 px-3 flex items-center hover:bg-blue-900 hover:text-white justify-between gap-2">
                <Image className="shrink-0 aspect-square" height={22} src={dirIm} alt="" />
                <span className="grow">Ебучий Folder</span>
                <IoMdArrowDropright className="shrink-0 my-auto" />
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span>Menu Option</span>
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span>Menu Option</span>
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span>Menu Option</span>
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span>Menu Option</span>
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span>Menu Option</span>
              </div>
              <div className="m-1">
                <div className="h-px bg-neutral-500"></div>
                <div className="h-px bg-white"></div>
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span>Кнопка нахуй</span>
              </div>
              <div className="py-2 px-3 flex hover:bg-blue-900 hover:text-white">
                <Image className="mr-2" height={22} src={dirIm} alt="" />
                <span className="">Жоповая кнопка кнопка кнопка кнопка</span>
              </div>
            </div>
          </div>
        )}

        <div className="w-[2px] mx-1 bg-[#999999]" />
        <div className="flex-1 flex space-x-1">
          {WindowsList.map((wind, i) => (
            <WinButton key={i} img={wind[3]} state={Active == i ? "barIn" : "bar"} onClick={() => setActive(wind[0])} className={(wind[4] ? "" : "hidden ") + " w-52"}>
              {wind[1]}
            </WinButton>
          ))}
        </div>

        <WinButton state="in" className="w-auto space-x-0.5">
          <Image alt="" className="" title="Bitchass" src={ToolsGear} height={20}/>
          <Image alt="2" src={ToolsGear} height={20}/>
          <Image alt="3" src={ToolsGear} height={20}/>
          <Image alt="balls" src={ToolsGear} height={20}/>
          <div className="ml-2 w-14 text-sm grow my-auto text-center">
            <Clock format={"HH:mm:ss"} style={{ fontSize: "1em" }} ticking={true} noSsr />
          </div>
        </WinButton>
      </div>
    </main>
  );
}
