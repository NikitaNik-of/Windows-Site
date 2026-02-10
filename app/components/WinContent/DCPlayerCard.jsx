import React from "react";
import WinButton from "../WinButton";

const DCPlayerCard = ({ playerName = null, playerData = null }) => {
  return (
    <div className="bg-[#ebebeb] col-span-3 shadow-w98-pressed p-2 text-base ">
      {console.log(playerData)}
      {playerName != null ?
        <div className="gap-1 flex flex-col">
          <div className="shadow-w98-def bg-[#c2c2c2] p-2 flex gap-4">
            <div className="w-24 h-24 shadow-w98-def"></div>
            <div className="flex flex-col justify-center gap-2">
              <div className="text-3xl">{playerName}</div>
              {/* <div className="">Технический админ сервера</div> */}
            </div>
          </div>
          {playerData.links.length != 0 ? <div className="shadow-w98-def bg-[#c2c2c2] p-2 flex gap-4">
            <WinButton>Telegram</WinButton>
            <WinButton>Twitch</WinButton>
            <WinButton>Youtube (Основной)</WinButton>
            <WinButton>Youtube (Второй)</WinButton>
          </div> : null}
          {playerData != null ? <div className="shadow-w98-def bg-[#c2c2c2] p-2 flex flex-col gap-1">
            <div className="text-xl font-bold">О себе:</div>
            <div className="mb-3">
              {playerData.biography}
              {/* Основатель сервера, технический админ, тот кто старается этот сервер держать на плаву. Учеба и занятость не дают возможности регулярно заниматься медийкой, но желание творить есть.
              <br />
              Мин-максер в душе, но квиттер по факту. */}
            </div>
            <div>
              <span className="text-base font-bold">Первый сезон:</span> {playerData.first_season}
              {/* DebbikCraft: Season Alpha (2018 год) */}
            </div>
            <div>
              <span className="text-base font-bold">Любимый проект:</span> {playerData.favorite_project}
              {/* Матрица жителей на DC1 */}
            </div>
            <div>
              <span className="text-base font-bold">Проект мечты:</span> {playerData.dream_project}
              {/* Шоу-ивент от игроков для зрителей */}
            </div>
            <div>
              <span className="text-base font-bold">Любимый блок в игре:</span> {playerData.favorite_block}
              {/* Гладкий андезит */}
            </div>
            <div>
              <span className="text-base font-bold">Худшая механика игры:</span> {playerData.worst_mechanic}
              {/* Деспавн предметов */}
            </div>
            <div>
              <span className="text-base font-bold">Необычный факт:</span> {playerData.unusual_fact}
              {/* Преподаватель, и любит математику */}
            </div>
          </div> : null}
        </div>
      : <div className="italic p-2 h-full items-center flex justify-center">
            Выберите игрока из списка справа для отображения информации о нем.
        </div>}
    </div>
  );
};

export default DCPlayerCard;
