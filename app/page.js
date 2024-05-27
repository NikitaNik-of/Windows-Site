"use client"
import Image from "next/image";
import WinButton from "./components/WinButton";
import Window from "./components/Window";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "./components/Link";

function time() {
  var today = new Date;
  var h = today.getHours(), m = today.getMinutes(), s = today.getSeconds();
  h < 10 ? h = ("0" + today.getHours().toString()) : h = today.getHours().toString();
  m < 10 ? m = ("0" + today.getMinutes().toString()) : m = today.getMinutes().toString();
  s < 10 ? s = ("0" + today.getSeconds().toString()) : s = today.getSeconds().toString();
  var text = `${h}:${m}:${s}`
  return text
}

function isWinActive(cur, id) {
  if (cur == id) return true
  else false
}


export default function Home() {
  const constraintsRef = useRef(null);

  const [Active, setActive] = useState(0)
  const [LastActive, setLastActive] = useState([0, 1, 2])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#008080]">
      <motion.div ref={constraintsRef} id="desktop" className="bg-transparent flex w-full h-full items-center">
        <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 0)} onTapStart={() => setActive(0)} className=""></Window>
        <Link></Link>
      </motion.div>
      <div className="bg-[#c2c2c2] shadow-w98-w w-full flex p-1">
        <WinButton state="default" className="font-bold">Пуск</WinButton>
        <div className="w-[2px] mx-1 bg-[#999999]"/>
        <div className="flex-1 flex">
          <WinButton state="default" className="w-52">Приложение</WinButton>
        </div>
        <WinButton state="in" className="w-24" ><div className="mx-auto text-center">{time()}</div></WinButton>
      </div>
    </main>
  );
}
