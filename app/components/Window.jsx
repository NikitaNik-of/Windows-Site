import { motion, useDragControls } from "framer-motion";
import Image from "next/image";
import WinHeaderButtons from "./WinHeaderButtons";
import Links from "./WinContent/WCLinks";
import WCAbout from "./WinContent/WCAbout";
import DCPlayers from "./WinContent/DCPlayers";

const Window = ({ closeWin, size = "size-win-default", footer = null, footer2 = null, isWinFocused, img, onClick, titleName = "Приложение", className, classNameContent, children, winID, navButtons = [1, 0, 2], ...props }) => {
  function WindowHead(foc) {
    if (foc) {
      return "from-[#000080] to-[#0884CE]";
    } else return "from-[#7b7b7b] to-[#adadad]";
  }
  const dragControls = useDragControls();

  return (
    <motion.div
      {...props}
      drag
      dragControls={dragControls}
      dragListener={false}
      onMouseDown={onClick}
      onClickCapture={onClick}
      dragMomentum={false}
      className={(isWinFocused ? "z-10" : "z-0") + " cursor-default " + className}
    >
      <div className="bg-[#c2c2c2] shadow-w98-def flex-col flex">
        <div className={"grow flex flex-col w-full p-0.5 " + size}>
          <div
            onPointerDown={(e) => {
              dragControls.start(e);
            }}
            id="Window-Header"
            className={"h-6 bg-linear-to-r flex items-center justify-end space-x-1 p-0.5 pl-1 mr-px " + WindowHead(isWinFocused)}
          >
            {img != "" ? <Image src={img} alt="" height={20} /> : null}
            <span className="text-white flex-1">{titleName}</span>
            <WinHeaderButtons navButtons={navButtons} closeWin={closeWin} winID={winID} />
          </div>
          <div className={classNameContent + " grow text-sm overflow-y-auto select-text"} draggable={false}>
            {winID == 0 ? <WCAbout />
            : winID == 1 ? <Links />
            : winID == 10 ? <Links />
            : winID == 11 ? <DCPlayers/>
            : children}
          </div>
          {footer2 != null ? <div className="grid grid-cols-2">
            <div className="shadow-w98-pressed py-0.5 h-6 px-1 text-sm">
              {footer}
            </div>
            <div className="shadow-w98-pressed py-0.5 h-6 px-1 text-sm">
              {footer2}
            </div>
          </div> :
          footer != null ? <div className="shadow-w98-pressed py-0.5 h-6 px-1 text-sm">
            {footer}
          </div> : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Window;
