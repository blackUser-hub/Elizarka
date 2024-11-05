import OneNote from "./one_note"

const NotesHistory = () => {
    // const {year, month, day } = useParams();
    const dataBase = [
        {   
            id: 0,
            conferenceNumber: 1,
            date: "10/09/2024"
        },
        {   
            id: 1,
            conferenceNumber: 2,
            date: "08/10/2024"
        }
    ]

    return (
        <section id="notes-history" className="notes-history">
        <h2>История конспектов</h2>
        <div className="notes-list">
            {dataBase.map((el) => <OneNote key={el.id} props={el} />)}
        </div>
    </section>
    )
  }

  export default NotesHistory