import WinButton from "./WinButton";
import { motion } from "framer-motion";
import { RxCross1, RxSquare } from "react-icons/rx";
import { FaRegWindowMinimize  } from "react-icons/fa6";

const Window = ({isWinFocused, titleName = "Приложение", className, ...props}) => {

    function WindowHead(foc) {
        if (foc) {
            return "from-[#000080] to-[#0884CE]"
        }
        else
            return "from-[#7b7b7b] to-[#adadad]"
    }

    return (
        <motion.div {...props} drag dragMomentum={false} className={(isWinFocused ? "z-10" : "z-0") + " fixed top-96 left-96 cursor-pointer " + className}>
            
            <div className="bg-[#c2c2c2] w-96 h-96 shadow-w98-w">
                <div className="shadow-w98-b h-full w-full p-[2px] ">
                    <div id="Window-Header" className={"h-6 bg-gradient-to-r flex items-center justify-end space-x-[2px] p-1 pr-[2px] " + WindowHead(isWinFocused)}>
                        <text className="text-white flex-1">{titleName}</text>
                        <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square"><FaRegWindowMinimize className="h-full m-auto" /></WinButton>
                        <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square"><RxSquare className="h-full m-auto"/></WinButton>
                        <WinButton state="fit" className="text-[14px] text-gray-600  aspect-square"><RxCross1 className="h-full m-auto"/></WinButton>
                    </div>
                </div>
            </div>


        </motion.div>
    );
}

export default Window;