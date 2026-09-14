import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }


  return (
    <div className="grid-cols-[1fr_3px_1fr_3px_1fr] grid items-baseline text-center " >
      <span className=''>{convertToTwoDigit(time.hours)}</span>
      :
      <span className=''>{convertToTwoDigit(time.minutes)}</span>
      :
      <div suppressHydrationWarning className=''>{convertToTwoDigit(time.seconds)}</div>
    </div>
  )
}

export default Clock