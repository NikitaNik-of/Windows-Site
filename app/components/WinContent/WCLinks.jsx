import React from 'react'
import WinButton from '../WinButton'
import logoTG from '../../assets/logos/telegram.png'
import logoDC from '../../assets/logos/discord.png'
import logoTw from '../../assets/logos/twitch.png'
import logoYT from '../../assets/logos/youtube.png'
import Image from 'next/image'

const Links = () => {
  return (
    <div className='p-0.5'>
      <div>{"Со мной можно лично связаться, но не забудьте представиться. Я незнакомцам не отвечаю, простите :)"}</div>

      <div className='flex flex-wrap justify-center gap-x-2 gap-y-1 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://t.me/NikitaNik_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoTG} alt="" />
            <div className='text-center '>Telegram ЛС</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {navigator.clipboard.writeText("@nikitanik_of")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoDC} alt="" />
            <div className='text-center'>@nikitanik_of</div>
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
            <div className='text-center '>Telegram канал</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {window.open("https://www.twitch.tv/nikitanik_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6 p-0.5' src={logoTw} alt="" />
            <div className='text-center'>/nikitanik_of</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {window.open("https://www.youtube.com/@nikitanik_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoYT} alt="" />
            <div className='text-center'>Основной канал</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {window.open("https://www.youtube.com/@nikitanik_not_of", "_blank")}}>
          <div className='flex -mx-2 space-x-1'>
            <Image className='w-6 h-6' src={logoYT} alt="" />
            <div className='text-center'>Второй канал</div>
          </div>
        </WinButton>
      </div>


      <div className='mt-4'>
        {"У меня так же есть платный контент, да тех, кто любит спойлеры или просто хочет денежно показать свою поддержку. Сейчас мне нечего там показывать, но как только появится, я сообще в своём ТГК."}
      </div>

      <div className='flex flex-wrap justify-center gap-x-2 gap-y-1 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://t.me/NikitaNik_of", "_blank")}}>
          <div className='flex gap-x-1'>
            {/* <Image className='w-6 h-6' src={logoTG} alt="" /> */}
            <div className=' '>Boosty</div>
          </div>
        </WinButton>
        <WinButton onClick={() => {navigator.clipboard.writeText("@nikitanik_of")}}>
          <div className='flex gap-x-1'>
            {/* <Image className='w-6 h-6' src={logoDC} alt="" /> */}
            <div className='text-center'>Донат</div>
          </div>
        </WinButton>
      </div>

      <div className='mt-4'>
        {"Ну и если вдруг захочется вам поддержать мою работу, то я буду благодарен, если вы просто поделитесь ссылкой с друзьями или знакомыми."}<br/>
        {"Поверьте — это будет самый ценный подарок от вас!"}
      </div>


    </div>
  )
}

export default Links 