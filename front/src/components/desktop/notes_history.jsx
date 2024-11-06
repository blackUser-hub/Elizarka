import { Outlet } from "react-router-dom"
import OneNote from "./one_note"
import Upload from "./upload";
import VideoNotes from './video_notes';

const NotesHistory = () => {
    // const {year, month, day } = useParams();
    const dataBase = [
        {   
            id: 0,
            title: "Конференция 1",
            date: "10/09/2024"
        },
        {   
            id: 1,
            title: "Конференция 2",
            date: "08/10/2024"
        }
    ]

    return (<div className="conference-block">
        <section id="notes-history" className="notes-history">
            <h2>История конспектов</h2>
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