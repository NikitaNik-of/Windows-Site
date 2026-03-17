import React from "react";
import Link from "../Link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import artData from "./../../assets/api/arts.json";

import ImageFile from "@/app/assets/images/image_file.png";
import ArtBucket from "@/app/assets/images/art_bucket.png";



const WCGallery = ({ openImageWindows }) => {
  function mouseClick(id) {
    setFocusedIcon(id);
  }

  const [artCollectionName, setArtCollectionName] = useState("artGallery");
  const constraintsRef = useRef(null);
  const [FocusedIcon, setFocusedIcon] = useState(-1);

  return (
    <div className="p-0.5 w-full h-full flex flex-col gap-1">
      <div className="p-1 shadow-w98-border flex items-center">
        <div className="px-1 select-none">Адрес</div>
        <div className="grow shadow-w98-pressed bg-white p-0.5 mr-1">{artData[artCollectionName].path}</div>
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
          {artData[artCollectionName].arts.map((item, i) => {
            return (
              <Link
                LinkIcon={ImageFile}
                dragConstraints={constraintsRef}
                key={item.fileName}
                id={item.fileName}
                textClassName="text-black"
                isfocused={FocusedIcon == item.fileName}
                onClick={() => {
                  mouseClick(item.fileName);
                }}
                onDoubleClick={() => {
                  openImageWindows(i, artCollectionName, item.fileName, artData[artCollectionName].path);
                }}
                LinkName={item.fileName}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default WCGallery;
