import React from 'react'
import WinList from '../WinList'
import { useState } from 'react'

const DCPlayers = () => {
  const [FocusedItem, setFocusedItem] = useState(0);

  return (
    <div className='grid grid-cols-4 w-full h-full gap-2'>
        <div className='bg-amber-200'>
            <WinList className='h-full' list={["NikitaNik_of", "Maestro_playa", ""]} focusedItem={FocusedItem} setFocusedItem={setFocusedItem}/>
        </div>
        <div className='bg-red-200 col-span-3'>opa</div>
    </div>
  )
}

export default DCPlayers