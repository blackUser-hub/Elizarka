import {React, useEffect, useState } from 'react'

export default function Clock() {
    const [time, setTime] = useState(new Date())
    const timeZoneDifference = time.getTimezoneOffset()
    const hours = time.getHours()<=9 ? "0"+time.getHours() : time.getHours()
    const minuts = time.getMinutes()<=9 ? "0"+time.getMinutes() : time.getMinutes()
    const seconds = time.getSeconds()<=9 ? "0"+time.getSeconds() : time.getSeconds()

    useEffect(() => {
      const interval = setInterval(() => setTime(new Date()), 500);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (<div className='clock'>
      <span className='hours'>{hours}:{minuts}:{seconds} UTC{(timeZoneDifference<0 ? "+" : "-") + -timeZoneDifference/60 }</span>
    </div>)
}
