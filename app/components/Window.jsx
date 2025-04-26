import WinButton from "./WinButton";
import { motion } from "framer-motion";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";
import Image from "next/image";

const Window = ({isWinFocused, img, onClick, titleName = "Приложение", className, classNameContent, children, ...props}) => {

    function WindowHead(foc) {
        if (foc) {
            return "from-[#000080] to-[#0884CE]"
        }
        else
            return "from-[#7b7b7b] to-[#adadad]"
    }

    return (
        <motion.div {...props} onTapStart={onClick} onTap={onClick} drag dragMomentum={false} className={(isWinFocused ? "z-10" : "z-0") + " cursor-pointer " + className}>
            
            <div className="bg-[#c2c2c2] w-96 h-96 shadow-w98-def">
                <div className="h-full w-full p-[2px] flex flex-col justify-between ">
                    <div id="Window-Header" className={"h-6 bg-linear-to-r flex items-center justify-end space-x-[2px] p-1 pr-[2px] " + WindowHead(isWinFocused)}>
                        <Image src={img} height={20}/>
                        <text className="text-white flex-1">{titleName}</text>
                        <div className="flex">
                            <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square"><FaRegWindowMinimize className="h-full m-auto" /></WinButton>
                            <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square"><RxSquare className="h-full m-auto"/></WinButton>
                        </div>
                        <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square"><RxCross1 className="h-full m-auto"/></WinButton>
                    </div>
                    <div className={classNameContent + " grow"}>
                        {children}
                    </div>
                </div>
            </div>


        </motion.div>
    );
}

export default Window;