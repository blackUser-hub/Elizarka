import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import openEye from '../../img/open_blue_eye.svg'
import closeEye from '../../img/close_blue_eye.svg'

export default function LoginForm() {
  const [eye, setEye] = useState("close")
  const navigate = useNavigate();
  const redirect = () => {
      navigate('/desktop');
  };

  return (<div className='login-block' style={{color: "#0f359b"}}>
    <div onClick={() => {
      const el = document.getElementsByClassName("login-block")[0]
      const switchBtn = document.getElementsByClassName("switch-to-login")[0]
      const switchLoginBtn = document.getElementsByClassName("switch-to-reg")[0]
      const nameValue = document.getElementById("reg-name")
      const passValue = document.getElementById("reg-password")
      
      el.style.left = "20%"
      el.style.paddingLeft = "1rem"
      switchBtn.style.display = "none"
      setTimeout(() => {switchLoginBtn.style.display = "block"
        nameValue.value = ""
        passValue.value = ""}, 800)
    }} className='switch-to-login'>Log in</div>
    <form id='login'>
        <span>Авторизация</span>
        <label className='label-name' htmlFor="login-name">Ваше имя</label>
        <input className='name' id='login-name' type="text" />
        <label className='label-pass' htmlFor="login-password">Ваш Пароль</label>
        <div className='input-password'>
            <input className='pass' id='login-password' type="password" />
            <div style={{backgroundImage: `url(${closeEye})`}} onClick={(el) => {
              if (eye==="close") {
                el.target.style.backgroundImage = `url(${openEye})`
                el.target.previousElementSibling.type = "text"
                setEye("open")
              }
              else {
                el.target.style.backgroundImage = `url(${closeEye})`
                el.target.previousElementSibling.type = "password"
                setEye("close")
              }
              
            }} className='visible-pass'></div>
        </div>
        <button onClick={redirect} style={{backgroundColor: "#0f359b"}} type='button' className='login-submit' >Зарегестрироваться</button>
    </form>
  </div>)
}
