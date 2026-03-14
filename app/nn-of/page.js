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
import Net_sm from "./../assets/images/net_sm.png"
import Note_sm from "./../assets/images/note_sm.png"
import Internet_sm from "./../assets/images/internet_sm.png"
import Art_sm from "./../assets/images/paint_sm.png"

// images links
import Shell from "./../assets/images/shell.png"
import keys from "./../assets/images/keys_sm.png";
import LinkBook from "./../assets/images/link_book.png";
import StartMenu from "../components/StartMenu";
import Net from "./../assets/images/net.png"
import Note from "./../assets/images/note.png"
import WebPage from "./../assets/images/web_file.png"
import Internet from "./../assets/images/internet.png"
import Art from "./../assets/images/paint.png"

// import user from "./../public/user.png";

export default function Home() {
  const [WindowsList, setWindowsList] = useState([
    [0, "Обо мне", User, User, false, "-translate-x-[250px] translate-y-[70px]", "© 2022-2026 NikitaNik_of", "Версия сайта: v" + settings.version, "size-win-about"],
    [1, "Ссылки", Net, Net, false, "translate-x-[300px] translate-y-[150px]", null, null, "size-win-links"],
    [2, "Now | Я сейчас...", Note, Note_sm, false, "-translate-x-[350px] translate-y-[200px]", "Обновлено " + settings.dateUpdate, null, "size-win-now"],
    [3, "Интернет-кнопки", Internet_sm, Internet_sm, false, "translate-x-[100px] translate-y-[300px]", null, null, "size-win-buttons"],
    [4, "Арт-галерея", Art_sm, Art_sm, false, "-translate-x-[200px] translate-y-[100px]", "3 objects", "Мой сайт", "size-win-arts"],
  ]);
  const [linkList, setLinkList] = useState([
    [0, "Обо мне", User, "win", 0],
    [1, "Ссылки", LinkBook, "win", 1],
    [2, "Я сейчас...", Note, "win", 2],
    [3, "Интернет-кнопки", Internet, "win", 3],
    [4, "Арт-галерея", Art, "win", 4],
    [9, "Прошлый сайт", WebPage, "link", "https://nn-of.ru/"],
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
      <title>NikitaNik_OS | User: nn_of</title>
      <Desktop WindowsList={WindowsList} setWindowsList={setWindowsList} linkList={linkList} Active={Active} setActive={setActive}/>
      <StartMenu startActive={startActive} setStartActive={setStartActive} WindowsList={WindowsList} Active={Active} setActive={setActive}/>
    </main>
  );
}
