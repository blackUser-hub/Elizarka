import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import openEye from '../../img/open_white_eye.svg'
import closeEye from '../../img/close_white_eye.svg'

export default function RegFrom() {
  const [eye, setEye] = useState("close")
  const navigate = useNavigate();
  const redirect = () => {
      navigate('/desktop');
  };

  return (<div className='reg-block'>
    <div onClick={() => {
      const el = document.getElementsByClassName("login-block")[0]
      const switchBtn = document.getElementsByClassName("switch-to-reg")[0]
      const switchRegBtn = document.getElementsByClassName("switch-to-login")[0]
      const nameValue = document.getElementById("login-name")
      const passValue = document.getElementById("login-password")

      el.style.left = "80%"
      el.style.paddingLeft = "500px"
      switchBtn.style.display = "none"
      setTimeout(() => {switchRegBtn.style.display = "block"
        nameValue.value = ""
        passValue.value = ""}, 800)
    }} className='switch-to-reg'>Log in</div>
    <form id='reg'>
        <span>Регистарция</span>
        <label className='label-name' htmlFor="reg-name">Ваше имя</label>
        <input className='name' id='reg-name' type="text" />
        <label className='label-pass' htmlFor="reg-password">Ваш Пароль</label>
        <div className='input-password'>
            <input className='pass' id='reg-password' type="password" />
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
        <button onClick={redirect} style={{backgroundColor: "#051e63"}} type='button' className='reg-submit' >Зарегистрироваться</button>
    </form>
  </div>)
}
