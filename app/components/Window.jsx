import { motion } from "framer-motion";
import Image from "next/image";
import WinHeaderButtons from "./WinHeaderButtons";
import Desktop from "./Desktop";
import Links from "./WinContent/WCLinks";
import WCAbout from "./WinContent/WCAbout";

const Window = ({closeWin, isWinFocused, img, onClick, titleName = "Приложение", className, classNameContent, children, winID, navButtons = [1, 0, 2],  ...props}) => {

    function WindowHead(foc) {
        if (foc) {
            return "from-[#000080] to-[#0884CE]"
        }
        else
            return "from-[#7b7b7b] to-[#adadad]"
    }

    return (
        <motion.div {...props} closeWin={closeWin} drag dragListener onMouseDown={onClick} onClickCapture={onClick} dragMomentum={false} className={(isWinFocused ? "z-10" : "z-0") + " cursor-default " + className}>
            
            <div className="bg-[#c2c2c2] min-w-96 min-h-64 shadow-w98-def">
                <div className="h-full w-full p-[2px]">
                    <div id="Window-Header" className={"h-6 bg-linear-to-r flex items-center justify-end space-x-1 p-0.5 pl-1 mr-[1px] " + WindowHead(isWinFocused)}>
                        {(img != "") ? <Image src={img} alt="" height={20}/> : null}
                        <span className="text-white flex-1">{titleName}</span>
                        <WinHeaderButtons navButtons={navButtons} closeWin={closeWin} winID={winID}/>
                    </div>
                    <div className={classNameContent + " grow"} draggable={false}>
                        {(winID == 0) ? <WCAbout/>
                        : ((winID == 1) ? <Links/>
                        : children)}
                    </div>
                </div>
            </div>


        </motion.div>
    );
}

export default Window;