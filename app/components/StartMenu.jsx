import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
import Image from 'next/image'
import { Router } from 'next/router';
import Link from 'next/link';

import WinButton from './WinButton'

import ToolsGear from "./../assets/images/tools_gear-0.png";
import dirIm from "./../assets/images/dir_md.png";
import keys from "./../assets/images/keys.png"
import Shutdown from '../assets/images/shutdown.png';


Router

const StartMenu = ({startActive, setStartActive, WindowsList, Active, setActive}) => {

  return (
    <div className="bg-[#c2c2c2] shadow-w98-w w-full flex p-1 z-50 relative">
        <WinButton state={startActive == 0 ? "startbtn" : "startbtnIn"} onClick={() => setStartActive(Math.abs(startActive - 1))} className="font-bold subpixel-antialiased">
          Пуск
        </WinButton>
        {startActive == 1 && (
          <div onClickCapture={() => setStartActive(1)} className="absolute bg-[#c2c2c2] bottom-8.5 left-0 flex cursor-default shadow-w98-def">
            <WinButton state="start"/>
            <div className="py-0.5 pr-0.5 flex-col flex justify-end">
              {/* <div className="py-2 px-3 flex items-center hover:bg-blue-900 hover:text-white justify-between gap-2">
                <Image className="shrink-0 aspect-square" height={22} src={dirIm} alt="" />
                <span className="grow">Folder</span>
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
              </div> */}
              <div className="py-2 px-3 flex">
                {/* <Image className="mr-2" height={22} src={dirIm} alt="" /> */}
                <span className='italic text-sm'>Кнопки снизу работают!</span>
              </div>
              <div className="m-1">
                <div className="h-px bg-neutral-500"></div>
                <div className="h-px bg-white"></div>
              </div>
              <Link className="py-2 px-3 flex hover:bg-blue-900 hover:text-white cursor-pointer " href="/">
                <Image className="mr-2" height={22} src={keys} alt="" />
                <span>Выйти из системы</span>
              </Link>
              <Link className="py-2 px-3 flex hover:bg-blue-900 hover:text-white cursor-pointer " href="/shutdown">
                <Image className="mr-2" height={22} src={Shutdown} alt="" />
                <span className="">Выключить сайт</span>
              </Link>
            </div>
          </div>
        )}

        <div className="w-0.5 mx-1 bg-[#999999]" />
        <div className="flex-1 flex space-x-1">
          {WindowsList.map((wind, i) => (
            <WinButton key={i} img={wind[3]} state={Active == wind[0] ? "barIn" : "bar"} onClick={() => setActive(wind[0])} className={(wind[4] ? " " : "hidden ") + " w-52"}>
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
            {/* <Clock format={"HH:mm:ss"} style={{ fontSize: "1em" }} ticking={true} noSsr /> */}
          </div>
        </WinButton>
      </div>
  )
}

export default StartMenu