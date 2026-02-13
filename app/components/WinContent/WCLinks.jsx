import React from 'react'
import WinButton from '../WinButton'
import logoTG from '../../assets/logos/telegram.png'
import logoDC from '../../assets/logos/discord.png'
import logoTw from '../../assets/logos/twitch.png'
import logoYT from '../../assets/logos/youtube.png'
import logoGH from '../../assets/logos/github.png'
// import logoBS from '../../assets/logos/bsky.png'
import Image from 'next/image'

const Links = () => {
  return (
    <div className='p-0.5'>
      <div>{"Со мной можно лично связаться, но не забудьте представиться. Я незнакомцам не отвечаю, простите :)"}</div>

      <div className='flex flex-wrap justify-center gap-x-2 gap-y-1 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://t.me/NikitaNik_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1 '>
            <Image className='w-6 h-6' src={logoTG} alt="" />
            <div className='text-center my-auto'>Telegram ЛС</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {navigator.clipboard.writeText("@nikitanik_of")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoDC} alt="" />
            <div className='text-center my-auto'>@nikitanik_of</div>
          </div>
        </WinButton>
      </div>

      <div className='mt-4'>
        {"Но меня можно найти в других, более крупных уголках Интеренета. На одних я появляюсь чаще, а вот на ютубе я бываю реже Моддичата..."}
      </div>

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


      <div className='mt-4'>
        {"У меня так же есть платный контент, для тех, кто любит спойлеры или просто хочет денежно показать свою поддержку. Сейчас мне нечего там показывать, но как только появится, я сообще в своём ТГК."}
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

      <div className='mt-4'>
        {"Этот сайя я держу в открытом репозитории, который вы можете изучить, однако просьба не тырить всё подряд..."}<br/>
        {"Если есть замечания по сайту, можее создать там проблему."}
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