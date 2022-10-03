import {List} from "@mui/material";
import './schedule-item.style.scss'
import {useEffect, useState} from "react";
import ScheduleList from "../schedule-list/schedule-list.component";

const ScheduleItem = ({date, selected}) => {


    const [formattedDate, setFormattedDate] = useState('')
    const selectedDate = selected.toISOString().substring(0,10) + "T00:00:00"
    const todaySchedule = date[selectedDate]

    const newDate = selected.toISOString().substring(0,10)
    const datePart = newDate.match(/\d+/g),
        year = datePart[0],
        month = datePart[1], day = datePart[2]

    useEffect(() => {
        setFormattedDate(day+'.'+month+'.'+year)
    }, [selected])

    console.log(formattedDate)


    const scheduleJSX = todaySchedule ?
        <div className="schedule-item">
            <h1 className="schedule-item__date">{formattedDate}</h1>
            <List className="schedule-item__container">
                {todaySchedule.map((i, index) => (
                    <ScheduleList i={i} index={index} key={index}/>
                ))}
            </List>
        </div> : <div className="schedule-item"><h1 className="schedule-item__not-exists">Пар нет.</h1></div>

    return (
        <div className="schedule">
            {scheduleJSX}
        </div>
    )
}

export default ScheduleItem