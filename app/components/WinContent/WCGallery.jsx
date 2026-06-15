import React from "react";
import Link from "../Link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import ImageFile from "@/app/assets/images/image_file.png";
import ArtBucket from "@/app/assets/images/art_bucket.png";


const WCGallery = ({ openImageWindows }) => {
  function mouseClick(id) {
    setFocusedIcon(id);
  }

  const constraintsRef = useRef(null);
  const [FocusedIcon, setFocusedIcon] = useState(-1);

  return (
    <div className="p-0.5 w-full h-full flex flex-col gap-1">
      <div className="p-1 shadow-w98-border flex items-center">
        <div className="px-1 select-none">Адрес</div>
        <div className="grow shadow-w98-pressed bg-white p-0.5 mr-1">C:/Users/nn_of/Pictures/Arts</div>
      </div>
      <div
        className="p-0.5 shadow-w98-pressed grow bg-white grid grid-cols-[200px_1fr]"
        onClickCapture={() => {
          mouseClick(-1);
        }}
      >
        <div className="">
          <Image src={ArtBucket} width={40} alt="" className="ml-4 mt-10 select-none" />
          <div className="ml-4 text-2xl font-bold">Арты</div>
          <div className="h-px bg-gray-500 mr-10" />
          <div className="italic text-[12px] px-2 my-4">Выберите объект и откройте его двойным кликом мыши</div>
        </div>

        <motion.div ref={constraintsRef}
          className={"justify-center grid grid-rows-[repeat(auto-fill,85px)] grid-cols-[repeat(auto-fill,65px)] grid-flow-row gap-1 "
              + " overflow-y-scroll"
          }
          >
          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <Link
                LinkIcon={ImageFile}
                dragConstraints={constraintsRef}
                key={item}
                id={item}
                textClassName="text-black"
                isfocused={FocusedIcon == item}
                onClick={() => {
                  mouseClick(item);
                }}
                onDoubleClick={() => {
                  openImageWindows("Art_" + (item + 1) + ".png", );
                }}
                LinkName={"Art_"+ (item + 1) + ".png"}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default WCGallery;
