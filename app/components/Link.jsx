import WinButton from "./WinButton";
import { motion } from "framer-motion";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";
import Image from "next/image";
import Shell from "./../assets/images/shell.png"
import Overlay from "./../assets/images/overlay_shortcut.png"
import { useState } from "react";

const Link = ({LinkIcon = Shell, onDoubleClick, isfocused=false, LinkName = "", id, textClassName, ...props}) => {

    const [locID, _] = useState([id])
    const [clN, setClN] = useState("")

    // function initPos(id = locID){
    //     if (id == 0) return "top-[10px]"
    //     if (id == 1) return "top-[98px]"
    //     if (id == 2) return "top-[186px]"
    //     if (id == 3) return "top-[274px]"
    //     if (id == 4) return "top-[362px]"
    //     if (id == 5) return "top-[450px]"
    //     if (id == 6) return "top-[538px]"
    //     if (id == 7) return "top-[626px]"
    //     if (id == 8) return "top-[714px]"
    //     if (id == 9) return "top-[802px]"
    //     return "top-[890px]"
    // }

    // function IconChooser(id = locID){
    //     if (id == 0) return user
    //     if (id == 1) return link
    //     if (id == 2) return keys
    //     if (id == 3) return Shell
    //     return LinkIcon
    // }


    function onDC() {
        console.log(`Clicked ${locID}`) 
    }


    return (
        <motion.div {...props} drag dragElastic={0} dragMomentum={false} onDoubleClick={onDoubleClick} className={"relative text-white cursor-pointer aspect-square h-16 left-1.25 flex flex-col items-center text-center text-[12px] "}>
            <div className={(isfocused ? " ": "") + " "}><Image unoptimized src={LinkIcon} alt="" quality={100} className={(isfocused ? "opacity-90 ": "") + " p-1 pointer-events-none h-12 w-12"}/></div>
            <span className={(isfocused ? "bg-blue-900 text-white -py-1 px-1 " : textClassName) + " font-extralight"}>{LinkName}</span>
            <Image src={Overlay} alt="" unoptimized quality={100} className="p-1 absolute pointer-events-none"/>
        </motion.div>
    );
}

export default Link;