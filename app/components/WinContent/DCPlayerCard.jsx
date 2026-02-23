import React from "react";
import WinButton from "../WinButton";
import Image from "next/image";

import logoTG from '../../assets/logos/telegram.png'
import logoDC from '../../assets/logos/discord.png'
import logoTw from '../../assets/logos/twitch.png'
import logoYT from '../../assets/logos/youtube.png'

const DCPlayerCard = ({ playerName = null, playerData = null }) => {
  return (
    <div className="bg-[#ebebeb] col-span-3 shadow-w98-pressed p-2 text-base ">
      {/* {console.log(playerData)} */}
      {playerName != null ? (
        <div className="gap-1 flex flex-col">
          <div className="shadow-w98-def bg-[#c2c2c2] p-2 flex gap-4">
            <div className="w-24 h-24 shadow-w98-def"></div>
            <div className="flex flex-col justify-center gap-2">
              <div className="text-3xl">{playerName}</div>
              {/* <div className="">Технический админ сервера</div> */}
            </div>
          </div>
          {playerData.links.length != 0 ? (
            <div className="shadow-w98-def bg-[#c2c2c2] p-2 flex flex-wrap gap-x-4 gap-y-2">
              {playerData.links.map((link, i) => (
                <WinButton
                  onClick={() => {
                    window.open(link.url, "_blank");
                  }}
                  key={i}
                  className=""
                >
                    <div className='flex gap-1'>
                        {link.name.toLowerCase().includes("telegram") ? <Image className='w-6 h-6 -ml-1' src={logoTG} alt="" />
                        : link.name.toLowerCase().includes("youtube") ? <Image className='w-6 h-6 -ml-1' src={logoYT} alt="" />
                        : link.name.toLowerCase().includes("twitch") ? <Image className='w-6 h-6 -ml-1 p-0.5' src={logoTw} alt="" />
                        : link.name.toLowerCase().includes("discord") ? <Image className='w-6 h-6 -ml-1' src={logoDC} alt="" />
                        : null}
                        <div className="text-center my-auto text-nowrap">{link.name}</div>
                    </div>
                </WinButton>
              ))}
            </div>
          ) : null}
          {playerData != null ? (
            <div className="shadow-w98-def bg-[#c2c2c2] p-2 flex flex-col gap-1">
              <div className="text-xl font-bold">О себе:</div>
              <div className="mb-3">
                {playerData.biography}
              </div>
              <div>
                <span className="text-base font-bold">Первый сезон:</span> {playerData.first_season}
              </div>
              <div>
                <span className="text-base font-bold">Любимый проект:</span> {playerData.favorite_project}
              </div>
              <div>
                <span className="text-base font-bold">Проект мечты:</span> {playerData.dream_project}
              </div>
              <div>
                <span className="text-base font-bold">Любимый блок в игре:</span> {playerData.favorite_block}
              </div>
              <div>
                <span className="text-base font-bold">Худшая механика игры:</span> {playerData.worst_mechanic}
              </div>
              <div>
                <span className="text-base font-bold">Необычный факт:</span> {playerData.unusual_fact}
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="italic p-2 h-full items-center flex justify-center">Выберите игрока из списка справа для отображения информации о нем.</div>
      )}
    </div>
  );
};

export default DCPlayerCard;
