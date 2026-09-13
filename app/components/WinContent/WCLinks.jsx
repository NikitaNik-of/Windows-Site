import React from 'react'
import WinButton from '../WinButton'
import logoTG from '../../assets/logos/telegram.png'
import logoDC from '../../assets/logos/discord.png'
import logoTw from '../../assets/logos/twitch.png'
import logoYT from '../../assets/logos/youtube.png'
import logoGH from '../../assets/logos/github.png'
// import logoBS from '../../assets/logos/bsky.png'
import Image from 'next/image'
import Tabs from '../Tabs'

const Links = () => {
  
  return (
    <div className='p-0.5'>

      <div className='mt-2 mx-2 text-center'>{"Вот где меня можно найти в Интернете:"}</div>

      <div className='flex flex-wrap justify-center gap-x-2 gap-y-1 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://t.me/nikitanikof", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoTG} alt="" />
            <div className='text-center my-auto'>Telegram канал</div>
          </div>
        </WinButton>
        {/* <WinButton onClick={() => {window.open("https://bsky.app/profile/nn-of.ru", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoBS} alt="" />
            <div className='text-center my-auto'>BlueSky</div>
          </div>
        </WinButton> */}
        <WinButton onClick={() => {window.open("https://www.twitch.tv/nikitanik_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6 p-0.5' src={logoTw} alt="" />
            <div className='text-center my-auto'>/nikitanik_of</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {window.open("https://www.youtube.com/@nikitanik_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoYT} alt="" />
            <div className='text-center my-auto'>Основной канал</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {window.open("https://www.youtube.com/@nikitanik_not_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoYT} alt="" />
            <div className='text-center my-auto'>Второй канал</div>
          </div>
        </WinButton>
      </div>


      <div className='mt-4 mx-2 text-center'>
        {"У меня так же есть платный контент, если хотите спойлеры или просто поддержать."}
      </div>

      <div className='flex flex-wrap justify-center gap-x-2 gap-y-1 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://boosty.to/nikitanik_of", "_blank")}}>
          <div className='flex gap-x-1'>
            {/* <Image className='w-6 h-6' src={logoTG} alt="" /> */}
            <div className='text-center my-auto '>Boosty</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {window.open("https://dalink.to/nikitanik_of", "_blank")}}>
          <div className='flex gap-x-1'>
            {/* <Image className='w-6 h-6' src={logoDC} alt="" /> */}
            <div className='text-center my-auto'>Донат</div>
          </div>
        </WinButton>
      </div>

      <div className='mt-4 mx-2 text-center'>
        {"Этот сайт я держу в открытом репозитории, который вы можете изучить, но не тырить..."}
      </div>

      <div className='flex flex-wrap justify-center gap-x-2 gap-y-1 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://github.com/NikitaNik-of/Windows-Site", "_blank")}}>
          <div className='flex gap-x-1'>
            <Image className='w-6 h-6' src={logoGH} alt="" />
            <div className='text-center my-auto '>GitHub репозиторий</div>
          </div>
        </WinButton>
      </div>


    </div>
  )
}

export default Links 