import React from 'react'
import WinList from '../WinList'
import { useState, useMemo } from 'react'
import Tabs from '../Tabs';
import players from '../../assets/api/players.json'
import DCPlayerCard from './DCPlayerCard';

const DCPlayers = () => {
    const [FocusedItem, setFocusedItem] = useState(0);
    const [activePlayersList, setActivePlayersList] = useState(useMemo(() => getActiveList("active")))
    const [inactivePlayersList, setInactivePlayersList] = useState(useMemo(() => getActiveList("inactive")))

    function getActiveList(type) {
        const active = [];
        const inactive = [];
        
        Object.entries(players).forEach(([nick, info]) => {
            const playerObj = { nick, ...info };
            if (info.active) {
                active.push(nick);
            } else {
                inactive.push(nick);
            }
        });
        return type === "active" ? active : inactive;
    }

    return (
      <div className='grid grid-cols-4 w-full h-full gap-2 p-1'>
          <div className='h-full'>
              <Tabs
              className="h-full"
              tabList={["Активные", "Неактивные"]}
              tabContentList={
                [
                //   <WinList className='h-full' list={activePlayersList} focusedItem={FocusedItem} setFocusedItem={setFocusedItem}/>,
                //   <WinList className='h-full' list={inactivePlayersList} focusedItem={FocusedItem} setFocusedItem={setFocusedItem}/>
                ]
              }/>
          </div>
          <DCPlayerCard />
      </div>
    )
}

export default DCPlayers