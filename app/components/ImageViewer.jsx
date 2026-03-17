import Image from 'next/image'
import React from 'react'


import ImageTest from "./../assets/images/view/bliss.jpg"
import WinButton from './WinButton'

const ImageViewer = ({img = "bliss"}) => {

  function imageImport() {
    if (img == "Art1") {
      return ""
    } else {
      return ImageTest
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
        <div className="bg-white p-0.5 flex justify-center grow">
          <Image src={imageImport(img)} alt="" className="m-auto max-h-110" />
        </div>
        <div className="flex justify-center gap-2 p-2">
          <WinButton>Назад</WinButton>
          <WinButton>Дальше</WinButton>
        </div>
    </div>
  )
}

export default ImageViewer