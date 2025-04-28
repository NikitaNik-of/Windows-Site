import React from "react";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";
import WinButton from "./WinButton";

const WinHeaderButtons = ({type = "def", exit = true}) => {
  return (
    <div className="flex text-center space-x-0.5">
      {type == "def" ? 
      <div className="flex">
        <WinButton state="WindowTop" className="text-[14px] aspect-square ">
         –
        </WinButton>
        <WinButton state="WindowTop" className="text-[14px] aspect-square ">
          O
        </WinButton>
      </div>
      : null}
      {type == "disabled" ? 
      <div className="flex">
        <WinButton state="WindowTopDis" className="text-[14px] aspect-square ">
          –
        </WinButton>
        <WinButton state="WindowTopDis" className="text-[14px] aspect-square ">
          O
        </WinButton>
      </div>
      : null}
      {exit ? 
      <WinButton state="WindowTop" className="text-[14px] aspect-square ">
        X
      </WinButton>
      : null}
    </div>
  );
};

export default WinHeaderButtons;
