import React from 'react'
import Tabs from '../Tabs'

const WCAbout = () => {
  return (
    <div className='max-w-[30rem] p-0.5 space-y-4'>
        <p className="wrap-break-word">
          Добро пожаловать на мою веб-страницу! <br/>
          Это всего лишь вторая итерация персонального веб-сайта, но я постарался её сделать намного круче, чем позволяет мне свободное время.
          <br/>
          Спасибо, что заглянули в мой уголок в громадном Интернете!
        </p>
        <p>
          
        </p>
        <div>
            <Tabs className="h-32"/>
        </div>
    </div>
  )
}

export default WCAbout