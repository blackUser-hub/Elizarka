import React from 'react'
import Clock from './clock'

const Header = () => {
  return (
    <header>
        <div className='logo-clock-box'>
            <h1>ELIZAR</h1>
            <Clock />
        </div>
        <nav>
            <a href="#upload-section">Загрузить Видео</a>
            <a href="#notes-history">Конспекты</a>
            <a href="#about">О нас</a>
        </nav>
    </header>
  )
}

export default Header