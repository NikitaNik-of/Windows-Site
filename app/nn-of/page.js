"use client";
import WinButton from "./../components/WinButton";
import Image from "next/image";
import { useState } from "react";
import Desktop from "./../components/Desktop";
// import Clock from "react-live-clock";
import { IoMdArrowDropright } from "react-icons/io";

// import api;
import settings from "./../assets/api/settings.json";

// images windows
import dirIm from "./../assets/images/dir_md.png";
import dirIm_sm from "./../assets/images/dir_sm.png";
import globeBook from "./../assets/images/globe_book.png";
import User from "./../assets/images/user.png";

// images links
import Shell from "./../assets/images/shell.png"
import keys from "./../assets/images/keys_sm.png";
import link from "./../assets/images/link_book.png";
import StartMenu from "../components/StartMenu";
// import user from "./../public/user.png";

export default function Home() {
  const [WindowsList, setWindowsList] = useState([
    [0, "Обо мне", User, User, false, "-translate-x-[250px] translate-y-[70px]", "© 2022-2026 NikitaNik_of", "Версия сайта: v" + settings.version, "size-win-about"],
    [1, "Ссылки", globeBook, link, false, "translate-x-[300px] translate-y-[150px]", null, null, "size-win-links"],
    [2, "Now | Я сейчас...", User, User, false, "-translate-x-[350px] translate-y-[200px]", "Обновлено " + settings.dateUpdate, null, "size-win-now"],
  ]);
  const [linkList, setLinkList] = useState([
    [0, "Обо мне", User, "win", 0],
    [1, "Ссылки", link, "win", 1],
    [2, "Я сейчас...", User, "win", 2],
    [3, "Login Screen", keys, "page", ""],
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
      <Desktop WindowsList={WindowsList} setWindowsList={setWindowsList} linkList={linkList} Active={Active} setActive={setActive}/>
      <StartMenu startActive={startActive} setStartActive={setStartActive} WindowsList={WindowsList} Active={Active} setActive={setActive}/>
    </main>
  );
}
