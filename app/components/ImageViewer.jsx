import Image from 'next/image'
import React from 'react'
import { useState } from "react";
import artData from "./../assets/api/arts.json"


import bliss from "./../assets/images/view/bliss.jpg"
import Image1 from "./../assets/images/view/Art_1.png"
import arbuz from "./../assets/images/view/arbuz.png"
import fish from "./../assets/images/view/fisherman.png"
import Image4 from "./../assets/images/view/Art_4.png"
import WinButton from './WinButton'

const ImageViewer = ({imgData = [0, ""], openImageWindows}) => {

  function imageImport() {
   
    try {
       var img = artData[imgData[1]].arts[imgData[0]].fileName;
    } catch (error) {
      // console.log(error);
       var img = "";
    }

    if (img == "Art_1.png") {
      return Image1
    } else
    if (img == "arbuz.png") {
      return arbuz
    } else
    if (img == "fisherman.png") {
      return fish
    } else
    if (img == "Art_4.png") {
      return Image4
    } else {
      return bliss
    }
  }

  function getImgData(ind, collectionName) {
    
   
    try {
       var img = artData[collectionName].arts[ind];
    } catch (error) {
      return "";
    }


    return (
      <>
        {(img.link != "") ? <a href={img.link} className="text-blue-800" target="_blank">{img.author}</a> : img.author} © {img.year}
      </>
    )
  }

  function imageSlide(curIndex, artCollectionName, direction = 1){
    var imgPath = artData[artCollectionName].path;
    var imgList = artData[artCollectionName].arts.map((art) => art.fileName);

    var nextIndex = curIndex + direction;
    if (nextIndex >= imgList.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = imgList.length - 1;
    }
    var nextImg = imgList[nextIndex];

    // console.log(nextImg, imgList, nextIndex);
    openImageWindows(nextIndex, artCollectionName, nextImg, imgPath)
  }

  return (
    <div className="w-full h-full justify-between">
        <div className="bg-white p-0.5 flex flex-col justify-center h-112 shadow-w98-pressed">
          <Image src={imageImport(imgData)} alt="" optimize height={415} className="m-auto " />
          <div className="px-2 text-right italic">
            {getImgData(imgData[0], imgData[1])}
          </div>
        </div>
        <div className="flex justify-center gap-2 p-2">
          <WinButton onClick={() => {imageSlide(imgData[0], imgData[1], -1)}}>Назад</WinButton>
          <WinButton onClick={() => {imageSlide(imgData[0], imgData[1], 1)}}>Дальше</WinButton>
        </div>
    </div>
  )
}

export default ImageViewer