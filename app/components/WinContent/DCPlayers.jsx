import React from "react";
import WinList from "../WinList";
import { useState, useMemo } from "react";
import Tabs from "../Tabs";
import players from "../../assets/api/players.json";
import DCPlayerCard from "./DCPlayerCard";

const DCPlayers = () => {
  const [FocusedItem, setFocusedItem] = useState(0);
  const [curTab, setCurTab] = useState(0);

  const { activePlayers, inactivePlayers } = useMemo(() => {
    const active = [];
    const inactive = [];

    Object.entries(players).forEach(([nickname, info]) => {
      const playerObj = { nickname, ...info };

      if (info.active) {
        active.push(nickname);
      } else {
        inactive.push(nickname);
      }
    });
    console.log(active, inactive);

    return { activePlayers: active, inactivePlayers: inactive };
  }, []);

  return (
    <div className="grid grid-cols-4 w-full h-full gap-2 p-1">
      <div className="h-full">
        <Tabs
          curTab={curTab}
          setCurTab={setCurTab}
          className="h-full"
          tabList={["Активные", "Неактивные"]}
          tabContentList={[
            <WinList className="h-full" list={activePlayers} focusedItem={FocusedItem} setFocusedItem={setFocusedItem} />,
            <WinList className="h-full" list={inactivePlayers} focusedItem={FocusedItem} setFocusedItem={setFocusedItem} />,
          ]}
        />
      </div>
      <DCPlayerCard
        playerName={curTab == 0 ? activePlayers[FocusedItem - 1] : inactivePlayers[FocusedItem - 1]}
        playerData={curTab == 0 ? players[activePlayers[FocusedItem - 1]] : players[inactivePlayers[FocusedItem - 1]]}
      />
      {/* {curTab + " - " + FocusedItem} */}
    </div>
  );
};

export default DCPlayers;
