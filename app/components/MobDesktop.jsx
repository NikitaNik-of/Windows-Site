"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Window from "./Window";
import { motion } from "framer-motion";
import Link from "./Link";
import WinButton from "./WinButton";
import Shell from "./../assets/images/shell.png"

const MobDesktop = ({ WindowsList, setWindowsList, Active, setActive }) => {
  function isWinActive(cur, id) {
    if (cur == id) return true;
    else false;
  }

  function emptyClick() {
    // console.log("empty", Active);
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

  function openImageWindows(imgIndex = 0, imgCollection = "", imageName = "", path = "") {
     
    var copyList = [...WindowsList]
    var indexFound = copyList.findIndex(element => element[8] == "size-win-image")
    //console.log(indexFound, copyList[indexFound])
    setImageData([imgIndex, imgCollection])
    copyList[indexFound][4] = true
    copyList[indexFound][1] = imageName + " | Просмотр изображений NikitaNik_OS"
    copyList[indexFound][6] = path + "/" + imageName
    if (WindowsList[indexFound][4]) {
        setActive(copyList[indexFound][0])
    }
    setWindowsList(copyList)
  }

  function OpenWin(id) {
    var copyList = [...WindowsList]
    var indexFound = copyList.findIndex(item => item[0] == id)
    // console.log(indexFound, id, copyList)
    copyList[indexFound][4] = true
    if (WindowsList[indexFound][4]) {
        setActive(copyList[indexFound][0])
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
  const [imageData, setImageData] = useState([0, ""])
  const router = useRouter();

  return (
    <div
      onClick={(e) => {if (e.target.parentElement.id == "desktop") emptyClick()}}
      id="desktop"
      className="md:hidden flex flex-col bg-transparent relative w-full min-h-full grow items-center"
    >
      <div className="grow grid grid-rows-[190px_4fr_5fr] justify-between w-full h-0">
        {WindowsList.map((wind, i) => (
          <Window
            classNameContent="flex items-start p-1 space-x-2 text-[12px]"
            navButtons={[0, 0, 0]}
            drag={false}
            winID = {wind[0]}
            img={wind[2]}
            key={i}
            isWinFocused={isWinActive(Active, wind[0])}
            titleName={wind[1]}
            onClick={(e) => {setActive(wind[0])}}
            className={wind[5]}
            footer={wind[6]}
            footer2={wind[7]}
            size={"h-0"}
          />
        ))}
      </div>

      {/* <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 0)} onTapStart={() => setActive(0)} className=""></Window>
            <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 1)} onTapStart={() => setActive(1)} className=""></Window>
            <Window dragConstraints={constraintsRef} isWinFocused={isWinActive(Active, 2)} onTapStart={() => setActive(2)} className=""></Window> */}
    </div>
  );
};

export default MobDesktop;
