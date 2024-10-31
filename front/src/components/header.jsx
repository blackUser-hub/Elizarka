import React from 'react'
import Clock from './clock'

const Header = () => {
  return (
    <header>
        <h1>ELIZAR</h1>
        <Clock />
        <nav>
            <a href="#upload-section">Загрузить Видео</a>
            <a href="#notes-history">Конспекты</a>
            <a href="#about">О нас</a>
        </nav>
    </header>
  )
}

export default Header