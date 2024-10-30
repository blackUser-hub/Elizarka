import { useState } from "react"
import Week from "./week"
import CalendarYear from "./calendar_year"

const CalendarSection = () => {
    const MonthWeeks = (year, month) => {
        if (month > 11) {
            year += 1
            month = 0
        } else if (month < 0) {
            year -= 1
            month = 11
        }
        let res = []
        let d = 1
        let date = new Date(year, month, d)
        const todayDate = new Date()
        while (date.getDay() !== 1) {
            date = new Date(year, month, --d)
        }
        do {
            let week = []
            for (let i=0; i<7;  i++) {
                date = new Date(year, month, d)
                let day = {
                    dayNumber:  date.getDate(),
                    month:  date.getMonth(),
                    year: date.getFullYear(),
                    weekDay:  date.getDay(),
                    dayColor: date.getMonth() !== month && "otherMonth",
                    todayDay: todayDate.getDate() === date.getDate() && todayDate.getMonth() === date.getMonth() && todayDate.getFullYear() === date.getFullYear() ? "today-day " : ""
                }
                week.push(day)
                d++
                }
            res.push(week)
        } while(new Date(year, month, d).getMonth() === month)
        return res
    }
    const [NowDate, setNowDate] = useState(new Date())
    const year = NowDate.getFullYear()
    const month = NowDate.getMonth()
    const [WeeksInMonth, setWeeksInMonth] = useState(MonthWeeks(year, month))

    return (<div className="calendar-section">
        <h1>Календарь с заметками</h1>
        <table className="calendar">
            <CalendarYear stateYear={year} chageYear={(d) => {
            setWeeksInMonth(MonthWeeks(year+d, month))
            setNowDate(new Date(year+d, month))
            }}
            stateMonth={month} changeMonth={(d) => {
                setWeeksInMonth(MonthWeeks(year, month+d))
                setNowDate(new Date(year, month+d))
                }}
            func={(y, m) => MonthWeeks(y, m)}
            date={NowDate} year={year} />
            <thead>
                <tr>
                    <th>пн</th>
                    <th>вт</th>
                    <th>ср</th>
                    <th>чт</th>
                    <th>пт</th>
                    <th>сб</th>
                    <th>вс</th>
                </tr>
            </thead>
            <tbody>
                {WeeksInMonth.map(week => (
                    <tr>
                        <Week days={week} />
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
  }

export default CalendarSection