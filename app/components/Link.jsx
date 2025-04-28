import WinButton from "./WinButton";
import { motion } from "framer-motion";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";
import Image from "next/image";
import Globe from "./../public/Globe.png"
import Shell from "./../public/shell.png"
import Overlay from "./../public/overlay_shortcut.png"
import { useState } from "react";

const Link = ({LinkIcon = "", onDoubleClick, isfocused=false, LinkName = "", id, ...props}) => {

    const [locID, _] = useState([id])
    const [clN, setClN] = useState("")

    function initPos(id = locID){
        if (id == 0) return "top-[10px]"
        else if (id == 1) return "top-[98px]"
        else if (id == 2) return "top-[186px]"
        else return "top-[274px]"
    }

    function IconChooser(id = locID){
        if (id == 3) return Shell
        else return Globe
    }


    function onDC() {
        console.log(`Clicked ${locID}`) 
    }


    return (
        <motion.div {...props} drag dragMomentum={false} onDoubleClick={onDoubleClick} className={clN + " fixed aspect-square h-16 left-[5px] flex flex-col items-center text-center text-[12px] " + initPos(id)}>
            <div className={(isfocused ? " ": "") + " "}><Image src={IconChooser()} alt="" quality={100} className={(isfocused ? "opacity-90 ": "") + " p-1 pointer-events-none h-12 w-12"}/></div>
            <span className={(isfocused ? "bg-blue-900 -py-1 px-1" : "") + " text-white font-extralight"}>{LinkName}</span>
            <Image src={Overlay} alt="" quality={100} className="p-1 fixed pointer-events-none"/>
        </motion.div>
    );
}

export default Link;