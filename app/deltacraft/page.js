"use client";
import WinButton from "../components/WinButton";
import Image from "next/image";
import { useState } from "react";
import Desktop from "../components/Desktop";
// import Clock from "react-live-clock";
import { IoMdArrowDropright } from "react-icons/io";
import settings from "./../assets/api/settings.json";

// images windows
import dirIm from "./../assets/images/dir_md.png";
import dirIm_sm from "./../assets/images/dir_sm.png";
import globeBook from "./../assets/images/globe_book.png";
import User from "./../assets/images/user.png";

// images links
import keys from "./../assets/images/keys_sm.png";
import link from "./../assets/images/link_book.png";
import StartMenu from "../components/StartMenu";
// import user from "./../public/user.png";

export default function Home() {
  const [WindowsList, setWindowsList] = useState([
    [10, "О сервере", User, User, false, "-translate-x-[250px] translate-y-[70px]", "© 2022-2026 NikitaNik_of", "Версия сайта: v" + settings.version, "size-win-about"],
    [11, "Игроки", globeBook, link, false, "translate-x-[0px] translate-y-[50px]", "Всего игроков: " + settings.playerTotal + " (Активных: " + settings.playersActive + ")", null, "size-win-dc-players"],
  ]);
  const [linkList, setLinkList] = useState([
    [0, "О сервере", User, "win", 10],
    [1, "Игроки", link, "win", 11],
    [2, "Login Screen", keys, "page", ""]
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
