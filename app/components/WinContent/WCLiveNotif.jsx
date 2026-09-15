import React, { useEffect } from "react";
import WinButton from "../WinButton";
import NetShow from "@/app/assets/images/netshow.png";
import Image from "next/image";

const WCLiveNotif = ({ streamData, closeWin }) => {
  function parseTime(startData) {
    var startTime = new Date(startData).getTime();
    var nowTime = Date.now();

    var diffMs = nowTime - startTime;
    if (isNaN(diffMs) || diffMs < 0) {
      return "00:00";
    }

    var totalSeconds = Math.floor(diffMs / 1000);
    var hours = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds % 3600) / 60);
    var seconds = totalSeconds % 60;

    return convertToTwoDigit(hours) + " ч. " + convertToTwoDigit(minutes) + " мин.";
  }

  const convertToTwoDigit = (number) => {
    return number.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });
  };

  return (
    <div className="w-full h-full p-2 justify-between flex flex-col">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center shadow-w98-pressed py-2 bg-white/70">
          <Image alt="" className="mx-2 shadow-w98-def w-15 p-2 bg-[#c2c2c2]" src={NetShow} />
          <div>
            <div className="font-bold text-lg">/{streamData.user_name || "/NikitaNik_of"}</div>
            <div>{streamData.title || "Топ-название стрима"}</div>
            <div className="italic">Игра: {streamData.game_name || "Топовая игра"}</div>
          </div>
        </div>
        {streamData ? (
          <div className="flex items-baseline px-1 mb-4 justify-between">
            <div className="italic text-xs">Стрим онлайн: {parseTime(streamData.started_at)}</div>
            <div className="text-red-700">{streamData.viewer_count} зрителей</div>
          </div>
        ) : (
          <div>Стрим оффлайн</div>
        )}
      </div>
      <div className="flex gap-2 justify-center">
        <WinButton
          onClick={() => {
            window.open("https://www.twitch.tv/nikitanik_of", "_blank");
          }}
        >
          Смотреть
        </WinButton>
        <WinButton
          onClick={() => {
            closeWin(99);
          }}
        >
          ОК
        </WinButton>
      </div>
    </div>
  );
};

export default WCLiveNotif;
