import { Outlet, useParams } from "react-router-dom"
import { useState } from "react";
import axios from 'axios'
import OneNote from "./one_note"
import Upload from "./upload";
import VideoNotes from './video_notes';

const monthNames = {
    "1": "Января",
    "2": "Февраля",
    "3": "Марта",
    "4": "Апреля",
    "5": "Мая",
    "6": "Июня",
    "7": "Июля",
    "8": "Августа",
    "9": "Сентября",
    "10": "Октября",
    "11": "Ноября",
    "12": "Декабря"
}

const baseurl = ""
const NotesHistory = () => {
    const {year, month, day } = useParams();
    // const [dataBase, setDataBase] = useState([])
    // axios.get(baseurl).then((res) => {
    //    setDataBase(res)
    // })

    const dataBase = [
        {   
            id: 0,
            title: "Конференция 1",
            time: "19:30",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, in! Assumenda illo id repellat? Illum!",
            url: ""
        },
        {   
            id: 1,
            title: "Конференция 2",
            time: "11:15",
            text: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquid animi nam delectus suscipit numquam saepe? Iure similique laborum   voluptas. consectetur adipisicing elit. Sapiente, in! Assumenda illo id repellat? Illum!",
            url: ""
        }
    ]
    const dis = dataBase.length===0 && "none"
    return (<div className="conference-block">
        <section style={{display: dis}} id="notes-history" className="notes-history">
            <h2>История конспектов {day} {monthNames[month]} {year} года</h2>
            <div className="notes-list">
                {dataBase.map((el) => <OneNote key={el.id} props={el} />)}
            </div>
        </section>

        <Upload />
        <VideoNotes />

        <Outlet />
    </div>)
  }

  export default NotesHistory