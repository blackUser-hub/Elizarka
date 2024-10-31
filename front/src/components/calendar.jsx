import { useState } from "react"
import CalendarMonthAndYear from "./calendar_month_and_year"
import CalendarDay from "./calendar_day"

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
                    dayColor: date.getMonth() !== month ? " otherMonth" : "",
                    todayDay: todayDate.getDate() === date.getDate() && todayDate.getMonth() === date.getMonth() && todayDate.getFullYear() === date.getFullYear() ? " today-day" : ""
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
    const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]

    return (<div className="calendar-section">
        {/* <h1>Календарь с заметками</h1> */}
        <CalendarMonthAndYear stateYear={year} chageYear={(d) => {
            setWeeksInMonth(MonthWeeks(year+d, month))
            setNowDate(new Date(year+d, month))
            }}
            stateMonth={month} changeMonth={(d) => {
                setWeeksInMonth(MonthWeeks(year, month+d))
                setNowDate(new Date(year, month+d))
                }}
            func={(y, m) => MonthWeeks(y, m)}
            date={NowDate} year={year} />

        <div className="calendar">
            <div className="week-days">
            {weekDays.map(day => <div key={day} className="calendar-week-day" >{day}</div>)}
            </div>
            <div className="month-days">
            {WeeksInMonth.map(week => week.map(day => (<CalendarDay key={day.dayNumber} day={day} />)))}
            </div>
        </div>
    </div>)
  }

export default CalendarSection