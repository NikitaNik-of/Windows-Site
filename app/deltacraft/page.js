"use client";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
// import Clock from "react-live-clock";

import Desktop from "../components/Desktop";
import StartMenu from "../components/StartMenu";
import WinButton from "../components/WinButton";
import settings from "./../assets/api/settings.json";

// images windows
import dirIm from "./../assets/images/dir_md.png";
import dirIm_sm from "./../assets/images/dir_sm.png";
import globeBook from "./../assets/images/globe_book.png";
import User from "./../assets/images/user.png";

// images links
import Shell from "./../assets/images/shell.png"
import Users from "./../assets/images/users.png"
import Server from "./../assets/images/server.png"

export default function Home() {
  const [WindowsList, setWindowsList] = useState([
    [10, "О сервере", Server, Server, true, "-translate-x-[250px] translate-y-[70px]", null, null, "size-win-dc-about"],
    [11, "Игроки", Users, Users, false, "translate-x-[0px] translate-y-[50px]", "Всего игроков: " + settings.playerTotal + " (Активных: " + settings.playersActive + ")", null, "size-win-dc-players"],
  ]);
  const [linkList, setLinkList] = useState([
    [0, "О сервере", Server, "win", 10],
    [1, "Игроки", Users, "win", 11]
  ]);
  const [Active, setActive] = useState(0);
  const [startActive, setStartActive] = useState(0);

  return (
    <main
      className=" select-none flex min-h-screen flex-col items-center justify-between bg-[#00a143]"
      onClickCapture={() => {
        setStartActive(0);
      }}
    >
      <Desktop WindowsList={WindowsList} setWindowsList={setWindowsList} linkList={linkList} Active={Active} setActive={setActive}/>
      <StartMenu startActive={startActive} setStartActive={setStartActive} WindowsList={WindowsList} Active={Active} setActive={setActive}/>
    </main>
  );
}
