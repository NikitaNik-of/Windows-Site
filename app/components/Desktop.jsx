"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Window from "./Window";
import { motion } from "framer-motion";
import Link from "./Link";
import WinButton from "./WinButton";

const Desktop = ({ WindowsList, setWindowsList, Active, setActive }) => {
  function isWinActive(cur, id) {
    if (cur == id) return true;
    else false;
  }

  function emptyClick() {
    console.log("huh", Active);
    setFocusedIcon(-1);
    setActive(-1);
  }

  function mouseClick(id) {
    setFocusedIcon(id);
  }

  function CloseWin(id) {
    var copyList = [...WindowsList]
    copyList[id][4] = false
    setWindowsList(copyList)    
  }

  function OpenWin(id) {
    var copyList = [...WindowsList]
    copyList[id][4] = true
    if (WindowsList[id][4]) {
        setActive(id)
    }
    setWindowsList(copyList)    
  }

  const constraintsRef = useRef(null);
  const [FocusedIcon, setFocusedIcon] = useState(-1);
  const router = useRouter();

  return (
    <motion.div

      ref={constraintsRef}
      id="desktop"
      className="bg-transparent w-full min-h-full grow items-center"
    >
      <Link
        dragConstraints={constraintsRef}
        onClick={() => {
          mouseClick(0);
        }}
        onDoubleClick={() => {
            OpenWin(0);
        }}
        isfocused={FocusedIcon == 0 ? true : false}
        LinkIcon="About"
        LinkName="Обо мне"
        id={0}
      ></Link>

      <Link
        dragConstraints={constraintsRef}
        onClick={() => {
          mouseClick(1);
        }}
        onDoubleClick={() => {
            OpenWin(1);
        }}
        isfocused={FocusedIcon == 1 ? true : false}
        LinkIcon="Links"
        LinkName="Ссылки"
        id={1}
      ></Link>

      <Link
        dragConstraints={constraintsRef}
        onDoubleClick={() => router.push("/")}
        onClick={() => {
          mouseClick(2);
        }}
        isfocused={FocusedIcon == 2 ? true : false}
        LinkIcon=""
        LinkName="Login Screen"
        id={2}
      ></Link>

      <Link
        dragConstraints={constraintsRef}
        onDoubleClick={() => router.push("/404")}
        onClick={() => {
          mouseClick(3);
        }}
        isfocused={FocusedIcon == 3 ? true : false}
        LinkIcon=""
        LinkName="Crash System"
        id={3}
      ></Link>

      <div className="flex justify-center w-full h-full ">
        {WindowsList.map((wind, i) => (
          <Window
            classNameContent="flex items-start grow-0 p-1"
            dragConstraints={constraintsRef}
            img={wind[2]}
            key={i}
            isWinFocused={isWinActive(Active, wind[0])}
            titleName={wind[1]}
            onClick={() => {setActive(wind[0])}}
            className={wind[4] ? " absolute " : "  hidden"}
          >
            <WinButton onClick={() => {CloseWin(i)}}>Hello</WinButton>
            <WinButton>OK</WinButton>
            <WinButton>Hello</WinButton>
          </Window>
        ))}
      </div>

      {/* <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 0)} onTapStart={() => setActive(0)} className=""></Window>
            <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 1)} onTapStart={() => setActive(1)} className=""></Window>
            <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 2)} onTapStart={() => setActive(2)} className=""></Window> */}
    </motion.div>
  );
};

export default Desktop;
