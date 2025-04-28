import { motion } from "framer-motion";
import Image from "next/image";
import WinHeaderButtons from "./WinHeaderButtons";
import Desktop from "./Desktop";

const Window = ({closeFunc, key, isWinFocused, img, onClick, titleName = "Приложение", className, classNameContent, children, ...props}) => {

    function WindowHead(foc) {
        if (foc) {
            return "from-[#000080] to-[#0884CE]"
        }
        else
            return "from-[#7b7b7b] to-[#adadad]"
    }

    return (
        <motion.div {...props} onTapStart={onClick} onTap={onClick} drag dragMomentum={false} className={(isWinFocused ? "z-10" : "z-0") + " cursor-default " + className}>
            
            <div className="bg-[#c2c2c2] w-96 h-96 shadow-w98-def">
                <div className="h-full w-full p-[2px]">
                    <div id="Window-Header" className={"h-6 bg-linear-to-r flex items-center justify-end space-x-1 p-0.5 pl-1 mr-[1px] " + WindowHead(isWinFocused)}>
                        <Image src={img} height={20}/>
                        <text className="text-white flex-1">{titleName}</text>
                        <WinHeaderButtons closeFunc={Desktop.closeFunc} id={key}/>
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