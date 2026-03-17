"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Window from "./Window";
import { motion } from "framer-motion";
import Link from "./Link";
import WinButton from "./WinButton";
import Shell from "./../assets/images/shell.png"

const Desktop = ({ WindowsList, setWindowsList, linkList, Active, setActive }) => {
  function isWinActive(cur, id) {
    if (cur == id) return true;
    else false;
  }

  function emptyClick() {
    // console.log("huh", Active);
    setFocusedIcon(-1);
    setActive(-1);
  }

  function mouseClick(id) {
    setFocusedIcon(id);
  }

  function CloseWin(id) {
    var copyList = [...WindowsList]
    var indexFound = copyList.findIndex(element => element[0] == id)
    copyList[indexFound][4] = false
    setWindowsList(copyList)    
  }

  function openImageWindows(ImageName = "", Path = "C:/FuckedYourMom", imgName = "Bliss") {
     
    var copyList = [...WindowsList]
    var indexFound = copyList.findIndex(element => element[8] == "size-win-image")
    // console.log(indexFound, copyList[indexFound])
    if (WindowsList[indexFound][4]) {
        setActive(indexFound)
    }
    setImageName(imgName)
    copyList[indexFound][4] = true
    copyList[indexFound][1] = ImageName + " | Просмотр изображений NikitaNik_OS"
    copyList[indexFound][6] = Path
    setWindowsList(copyList)
  }

  function OpenWin(id) {
    var copyList = [...WindowsList]
    var indexFound = copyList.findIndex(item => item[0] == id)
    // console.log(indexFound, id, copyList)
    copyList[indexFound][4] = true
    if (WindowsList[indexFound][4]) {
        setActive(indexFound)
    }
    setWindowsList(copyList)    
  }

  function LinkClicked(id, type, param) {
    if (type == "win") {
        OpenWin(param)
    }
    if (type == "link") {
        window.open(param)
    }
    if (type == "page") {
        router.push("/" + param)
    }
    
  }

  const constraintsRef = useRef(null);
  const [FocusedIcon, setFocusedIcon] = useState(-1);
  const [imageName, setImageName] = useState("")
  const router = useRouter();

  return (
    <motion.div
      onClickCapture={emptyClick}
      ref={constraintsRef}
      id="desktop"
      className="flex flex-col bg-transparent relative w-full min-h-full grow items-center"
    >
      <div className="left-1 top-2 absolute self-start grid grid-rows-[repeat(auto-fill,85px)] grid-cols-[repeat(auto-fill,85px)] grid-flow-col gap-1 w-full h-full">
        {linkList.map((item, index) => {
          return (
            <Link
              key={item[0]}
              dragConstraints={constraintsRef}
              onClick={() => {
                mouseClick(item[0]);
              }}
              onDoubleClick={() => {
                  LinkClicked(item[0], item[3], item[4]);
              }}
              isfocused={FocusedIcon == item[0] ? true : false}
              LinkIcon={(item[2] != null) ? item[2] : Shell}
              LinkName={item[1]}
              id={item[0]}
            ></Link>
          );
        })}
      </div>


      <div className="grow flex justify-center w-full h-0 ">
        {WindowsList.map((wind, i) => (
          <Window
            classNameContent="flex items-start p-1 space-x-2"
            dragConstraints={constraintsRef}
            openImageWindows={openImageWindows}
            winID = {wind[0]}
            img={wind[2]}
            key={i}
            isWinFocused={isWinActive(Active, wind[0])}
            titleName={wind[1]}
            onClick={() => {setActive(wind[0])}}
            className={wind[4] ? (" absolute " + wind[5]) : "  hidden"}
            closeWin={CloseWin}
            footer={wind[6]}
            footer2={wind[7]}
            size={wind[8]}
            imgViewer={imageName}
          >
            <WinButton onClick={() => {CloseWin(wind[0])}}>Hello</WinButton>
            <WinButton>OK</WinButton>
            <WinButton state="disabled">Hello</WinButton>
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
