import {React, useState } from 'react'

export default function Clock() {
    const [time, setTime] = useState(new Date())
    const timeZone = 'Europe/Moscow'
    const localTime = time.toLocaleString('ru-RU', { timeZone }).split(", ")[1]
    return (
    <div>{localTime}</div>
  )
}
