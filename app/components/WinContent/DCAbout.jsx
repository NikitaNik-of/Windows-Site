import Image from 'next/image'
import React from 'react'

import Art from "@/app/assets/images/artdc3.png" 

const DCAbout = () => {
  return (
    <div className='space-y-2'>
        <div className='p-2 shadow-w98-pressed'>
            <Image className='mx-auto' height={230} alt="" src={Art}/>
            <div className='italic text-stone-500 text-right text-xs'>artwork made by <a href="https://t.me/PnovaQ" id='link'>Nova</a></div>
        </div>
        <p className='text-center text-base my-3'>
            <span className='font-bold'>DeltaCraft</span> — это группа людей, которые любят играть в Майнкрафт и немного заниматься контентом.
        </p>
        <p>
            Начиная с августа 2019 года, данный сервер развивался и расширялся, преодолевая различные трудности. Для игроков, которые исторически называют себя "Деббики", это не просто
            приватный SMP сервер, а место для общения друзей, для создания памятных событий и провектов.
        </p> 
        <p>
            Каждый мир, каждый сезон — это уникальная история, будто живая фотография игроков. И наша цель эти "фотографии" сделать как можно красивее и круче. 
        </p>
    </div>
  )
}

export default DCAbout