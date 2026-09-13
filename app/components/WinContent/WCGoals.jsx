import React from "react";
import goalList from "./../../assets/api/goals.json";
import ProgressBar from "../ProgressBar";

const WCGoals = () => {

  function rarityClasses(rarity) {
    switch (rarity) {
      case "common": return "";
      case "rare": return "text-[#00007b]";
      case "epic": return "text-purple-800 font-bold";
      case "legendary": return "text-pink-800 font-bold";
      case "mythical": return "drop-shadow-[0_0_3px] drop-shadow-amber-500 text-yellow-600 font-bold";
      default: return "";
     }
      
  }

  function rarityBarColor(rarity) {
    switch (rarity) {
      case "common": return "";
      case "rare": return "";
      case "epic": return "#800080";
      case "legendary": return "#8B0000";
      case "mythical": return "#FFA500";
      default: return "";
     }
      
  }

  return (
    <div className="p-1 grid grid-rows-[auto_1fr] w-full gap-3">
      <div className="shadow-w98-border p-2 flex flex-col gap-2">
        <div className="font-bold text-2xl">2026</div>
        <div className="shadow-w98-def flex flex-col p-2 gap-1">
          <div className="flex justify-between">
            <div className="text-[12px]">Получено {goalList.completed} из {goalList.total} достижений</div>
            <div className="text-[12px]">({Math.floor(goalList.completed / goalList.total * 100)}%)</div>
          </div>
          <ProgressBar current={goalList.completed} goal={goalList.total} width={542}/>
        </div>
      </div>
      <div className="shadow-w98-pressed bg-white p-1">
        {goalList.goals.map((item, i) => (
          <div key={i} className={`m-1 shadow-w98-def p-2 ${item.completed ? "bg-linear-90 from-stone-300 via-stone-300 to-emerald-400" : "bg-stone-300"} flex justify-between items-center`}>
            <div className="flex flex-col gap-1">
              <div className={" " + rarityClasses(item.rarity)}>{item.name}</div>
              <div className="text-[11px]">{item.description}</div>
            </div>
            <div>{item.completed ? "Получено: " + item.date_completed : 
              <div>
                <div className="text-[11px] text-right">{item.progress}/{item.progress_goal}</div>
                <ProgressBar current={item.progress} goal={item.progress_goal} barColor={rarityBarColor(item.rarity)}/>
              </div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WCGoals;
