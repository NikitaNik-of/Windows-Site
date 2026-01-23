import React from 'react'
import WinButton from '../WinButton'

const Links = () => {
  return (
    <div className='max-w-96 p-0.5'>
      <div>{"Со мной можно лично связаться, но не забудьте представиться. Я незнакомцам не отвечаю, простите :)"}</div>
      <div className='flex space-x-2 m-1 p-3 shadow-w98-pressed'>
        <WinButton onClick={() => {window.open("https://t.me/NikitaNik_of", "_blank")}}><div>=T=</div>ЛС Telegram</WinButton>
        <WinButton onClick={() => {navigator.clipboard.writeText("@nikitanik_of")}}><div>=D=</div>Дискорд Хендл</WinButton>
      </div>
    </div>
  )
}

export default Links