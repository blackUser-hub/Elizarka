import React from 'react'
import { useNavigate } from 'react-router-dom';
import Clock from './clock'

const Header = () => {
  const navigate = useNavigate();
  const redirect = () => {  
    navigate("/login");
  };

  return (
    <header>
        <div className='logo-clock-box'>
            <h1 onClick={redirect}>ELIZAR</h1>
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