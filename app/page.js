"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Window from "./components/Window";
import WinList from "./components/WinList";
import WinButton from "./components/WinButton";

const Login = () => {
  const [Active, setActive] = useState(0);

  function isWinActive(cur, id) {
    if (cur == id) return true;
    else false;
  }

  function emptyClick() {
    console.log(FocusedItem)
    setActive(-1);
    FocusedItem > 0 && setFocusedItem(-1 * FocusedItem);
    setFocusedList(-1);
  }

  function goTo(setFocusedD, userList, FocusedItem) {
    setFocusedD(true);
    var linkTo = userList[Math.abs(FocusedItem) - 1]
    router.push("/" + linkTo)
  }
  
  const constraintsRef = useRef(null);
  const [FocusedList, setFocusedList] = useState(false);
  const [FocusedItem, setFocusedItem] = useState(0);
  const [FocusedD, setFocusedD] = useState(false);
  const router = useRouter();
  const [userList, setUserList] = useState(["nn-of", "deltacraft"])

  return (
    <div className="bg-[#088] h-screen w-full">
      <motion.div
        onClickCapture={() => {
          emptyClick();
        }}
        ref={constraintsRef}
        id="login"
        className="bg-transparent w-full min-h-full items-center flex justify-center"
      >
        <Window
          dragConstraints={constraintsRef}
          img={NaN}
          key={0}
          isWinFocused={isWinActive(Active, 0)}
          titleName={"Добро пожаловать в NikitaNik_OS 98"}
          onClickCapture={() => setActive(0)}
          classNameContent={"flex-col p-4 flex justify-between"}
        >
          <div className=" space-y-1">
            <text>Выберите пользователя системы:</text>
            <WinList className="h-20" list={userList} focusedItem={FocusedItem} setFocusedItem={setFocusedItem}/>
            <text>Выбран: {userList[Math.abs(FocusedItem) - 1]}, {FocusedItem}</text>
          </div>
          <div className="flex justify-end">
            <WinButton id="TestToD" onClick={() => {FocusedItem == 0 ? null : goTo(setFocusedD, userList, FocusedItem)}} state={FocusedItem == 0 ? "disabled" : "default"}>Войти</WinButton>
          </div>
        </Window>
      </motion.div>
    </div>
  );
};

export default Login;
