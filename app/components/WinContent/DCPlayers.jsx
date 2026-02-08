import React from 'react'
import WinList from '../WinList'
import { useState } from 'react'
import Tabs from '../Tabs';

const DCPlayers = () => {
  const [FocusedItem, setFocusedItem] = useState(0);
  const [playerList, setPlayerList] = useState({
    "_Glo0orP_": true,
    "_Vadok_": true,
    "_W1ND": true,
    "Amax198": true,
    "BaKyJl": true,
    "Burburend": true,
    "Chuchibam": true,
    "folkorost": true,
    "G0Bro": true,
    "katosik3003": true,
    "LOLOMAC41": true,
    "Maestro_Playa": true,
    "MakaronGameZ": true,
    "Misyre_Odashi": true,
    "MrLoloGood": true,
    "neNessho": true,
    "NikitaNik_of": true,
    "notbad325": true,
    "Pe3ep": true,
    "Rollnot": true,
    "RomanPro100": true,
    "u_KpaTKoe": true,
    "VD_Kifir": true
})

  return (
    <div className='grid grid-cols-4 w-full h-full gap-2 p-1'>
        <div className='h-full'>
            <Tabs
            className="h-full"
            tabList={["Активные", "Неактивные"]}
            tabContentList={
              [
                <WinList className='h-full' list={Object.entries(playerList).filter(([nick, isActive]) => isActive).map(([nick, isActive]) => nick)} focusedItem={FocusedItem} setFocusedItem={setFocusedItem}/>,
                <WinList className='h-full' list={Object.entries(playerList).filter(([nick, isActive]) => !isActive).map(([nick, isActive]) => nick)} focusedItem={FocusedItem} setFocusedItem={setFocusedItem}/>
              ]
            }/>
        </div>
        <div className='bg-red-200 col-span-3 shadow-w98-pressed p-1'>opa</div>
    </div>
  )
}

export default DCPlayers