import React from "react";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";
import WinButton from "./WinButton";

const WinHeaderButtons = ({navButtons, closeWin, winID}) => {
  return (
    <div className="flex text-center space-x-0.5">
      {(navButtons[0] == 2) ? 
      <div className="flex">
        <WinButton state="WindowTop" className="text-[14px] aspect-square ">
         –
        </WinButton>
        <WinButton state="WindowTop" className="text-[14px] aspect-square ">
          O
        </WinButton>
      </div>
      : null}
      {(navButtons[0] == 1) ? 
      <div className="flex">
        <WinButton state="WindowTopDis" className="text-[14px] aspect-square ">
          –
        </WinButton>
        <WinButton state="WindowTopDis" className="text-[14px] aspect-square ">
          O
        </WinButton>
      </div>
      : null}
      {(navButtons[2] == 2) ? 
      <WinButton onClick={() => {closeWin(winID)}} state="WindowTop" className="text-[14px] aspect-square ">
        X
      </WinButton>
      : null}
    </div>
  );
};

export default WinHeaderButtons;
