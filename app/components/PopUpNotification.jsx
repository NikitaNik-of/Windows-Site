import React from 'react'

const PopUpNotification = ({className}) => {
  return (
    <div className={'bg-[#ffffaa] z-20 border border-black text-xs px-1 absolute bottom-8.5 right-0 min-w-46 ' + className}>
        <p>
            Вы можете посмотреть информацию о стриме через этот значок.
        </p>
        <div className="absolute right-0.5 border-9 border-transparent border-t-black"/>
        <div className="absolute right-0.75 border-8 border-transparent border-t-[#ffffaa]"/>
    </div>
  )
}

export default PopUpNotification