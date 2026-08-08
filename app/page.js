"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Window from "./components/Window";
import WinList from "./components/WinList";
import WinButton from "./components/WinButton";

import settings from "./assets/api/settings.json";

import keys from "./assets/images/keys_sm.png";
import nomobile from "./assets/badges/mobiles.gif";

const Login = () => {
  const [Active, setActive] = useState(0);

  function isWinActive(cur, id) {
    if (cur == id) return true;
    else false;
  }

  function emptyClick() {
    console.log(FocusedItem);
    setActive(-1);
    FocusedItem > 0 && setFocusedItem(-1 * FocusedItem);
    setFocusedList(-1);
  }

  function goTo(setFocusedD, userList, FocusedItem) {
    setFocusedD(true);
    var linkTo = userList[Math.abs(FocusedItem) - 1];
    router.push("/" + linkTo);
  }

  const constraintsRef = useRef(null);
  const [FocusedList, setFocusedList] = useState(false);
  const [FocusedItem, setFocusedItem] = useState(0);
  const [FocusedD, setFocusedD] = useState(false);
  const router = useRouter();
  const [userList, setUserList] = useState(["nn-of", "deltacraft"]);

  return (
    <div className="bg-[#088] h-screen w-full">
      <title>NikitaNik_OS | Login Screen</title>
      <motion.div
        onClickCapture={() => {
          emptyClick();
        }}
        ref={constraintsRef}
        id="login"
        className="bg-transparent w-full min-h-full items-center hidden md:flex justify-center"
      >
        <Window
          dragConstraints={constraintsRef}
          img={keys}
          key={0}
          isWinFocused={isWinActive(Active, 0)}
          titleName={"Добро пожаловать в NikitaNik_OS 98"}
          onClick={() => setActive(0)}
          classNameContent={"flex-col p-4 flex justify-between"}
          navButtons={[0, 0, 0]}
          size="size-win-login"
          footer={"Версия сайта: v" + settings.version}
        >
          <div className=" space-y-1">
            <div>Выберите пользователя системы:</div>
            <WinList className="h-20" list={userList} focusedItem={FocusedItem} setFocusedItem={setFocusedItem} />
            {/* <div>
              Выбран: {userList[Math.abs(FocusedItem) - 1]}, {FocusedItem}
            </div> */}
          </div>
          <div className="text-[12px] italic">
            Просьба используйте нормальный браузер, в мобильной версии обрезано содержание.
          </div>
          <div className="flex justify-between">
            <Image src={nomobile} alt="" />
            <WinButton
              id="TestToD"
              onClick={() => {
                FocusedItem == 0 ? null : goTo(setFocusedD, userList, FocusedItem);
              }}
              state={FocusedItem == 0 ? "disabled" : "default"}
            >
              Войти
            </WinButton>
          </div>
        </Window>
      </motion.div>

      <div className="bg-transparent w-full min-h-full items-center flex md:hidden justify-center">
        <Window
          dragConstraints={constraintsRef}
          img={keys}
          key={0}
          drag={false}
          isWinFocused={isWinActive(Active, 0)}
          titleName={"Добро пожаловать в NikitaNik_OS 98"}
          onClick={() => setActive(0)}
          className={"text-sm"}
          classNameContent={"flex-col p-4 flex justify-between"}
          navButtons={[0, 0, 0]}
          size=" h-85 "
          footer={"Версия сайта: v" + settings.version}
        >
          <div className="space-y-2">
            <div className=" space-y-1">
              <div>Выберите пользователя системы:</div>
              <WinList className="h-20" list={userList} focusedItem={FocusedItem} setFocusedItem={setFocusedItem} />
            </div>
            <div className="text-[12px] italic">
              Данный сайт не адаптирован для мобильных устройств, просьба используйте нормальный браузер.
            </div>
            <div className="text-[12px] italic">
              В мобильной версии доступна половина исходного содержимого.
            </div>
          </div>
          <div className="flex justify-between">
            <Image src={nomobile} alt="" />
            <WinButton
              id="TestToD"
              onClick={() => {
                FocusedItem == 0 ? null : goTo(setFocusedD, userList, FocusedItem);
              }}
              state={FocusedItem == 0 ? "disabled" : "default"}
            >
              Войти
            </WinButton>
          </div>
        </Window>
      </div>
    </div>
  );
};

export default Login;
