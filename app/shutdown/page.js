import React from 'react'

const Shutdown = () => {
  return (
    <div className="bg-black w-full h-screen flex justify-center text-center">
      <title>now you can close this tab</title>
      <div className="transition-opacity starting:opacity-0 delay-[2s] select-none duration-75 text-orange-400 my-auto font-sans font-stretch-50% text-5xl blur-[1px] font-bold">Теперь эту вкладку <br/>можно безопасно закрыть</div>
    </div>
  )
}

export default Shutdown