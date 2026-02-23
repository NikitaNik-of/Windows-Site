import React from 'react'
import Image from 'next/image'

// buttons links
import button from "./../../../public/badge.gif"

const WCButtons = () => {
  return (
    <div className="p-0.5 w-full h-full">
        <div className="p-2 shadow-w98-pressed w-full text-center">
              Это окно посвящено тем самым кнопкам из 1990-х, которые связы-вали разные сайты.
              Именно с помощью них раньше знакомились с новыми людьми, и именно этот процесс назывался <span className="font-bold italic">"серфингом"</span>.
              Добавляли кнопки друзей, знакомых, просто интересные сайты, формируя своеобразную сеть.
            <div className="mt-4 mb-1 flex justify-center text-[12px]">
              <a href="https://nn-of.ru" target="_blank" className="my-auto mx-2"><Image src={button} alt=""/></a>
              <div className="my-auto ml-1 text-left max-w-[75%] italic">
                Вот кнопка с ссылкой на мой сайт, которую вы можете использовать у себя где-нибудь!
                <div className="p-1 shadow-w98-pressed bg-white font-mono not-italic">
                  <span className="text-[10px] line-clamp-5 whitespace-nowrap overflow-x-scroll pb-2">{'<a href="https://nn-of.ru" target="_blank">'} <br/>
                      &emsp;{'<img src="https://nn-of.ru/badge.gif" width="88" height="31" alt="Cайт NikitaNik_of" style="border:0;"/>'}<br/>{
                  '</a>'}</span>
                </div>
              </div>
            </div>
        </div>

        <div className="font-bold text-lg mt-2 mb-1">Кнопки друзей</div>
        <div className="flex flex-wrap gap-0.5">

        </div>
        <div className="font-bold text-lg mt-2 mb-1">Кнопки классных сайтов</div>
        <div className="flex flex-wrap gap-0.5">

        </div>
    </div>
  )
}

export default WCButtons