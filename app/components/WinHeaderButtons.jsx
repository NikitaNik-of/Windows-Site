import React from "react";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";
import WinButton from "./WinButton";

const WinHeaderButtons = () => {
  return (
    <div className="flex space-x-0.5">
      <div className="flex">
        <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square">
          <FaRegWindowMinimize className="h-full m-auto" />
        </WinButton>
        <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square">
          <RxSquare className="h-full m-auto" />
        </WinButton>
      </div>
      <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square">
        <RxCross1 className="h-full m-auto" />
      </WinButton>
    </div>
  );
};

export default WinHeaderButtons;
