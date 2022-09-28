import {List, ListItem, ListItemText} from "@mui/material";
import './schedule-item.style.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useEffect, useState} from "react";

const ScheduleItem = ({date, selected}) => {

    const [formattedDate, setFormattedDate] = useState('')

    const formatDate = () => {
        const newDate = selected.toISOString().substring(0,10)
        const datePart = newDate.match(/\d+/g),
            year = datePart[0],
            month = datePart[1], day = datePart[2]

        setFormattedDate(day+'.'+month+'.'+year)
    }

    useEffect(() => {
        formatDate()
    }, [selected])

    return (
        <div className="schedule">
            {
                Object.keys(date).map((key, index) => {
                    if (key.substring(0, 10) === selected.toISOString().substring(0, 10)) {
                        return (
                            <div key={index} className="schedule-item">
                                <h1 className="schedule-item__date">{formattedDate}</h1>
                                <List className="schedule-item__container">
                                    {date[key].map((i, index) => (
                                        <ListItem key={index} className="schedule-item__list">
                                            <p className="schedule-item__list-time">
                                                        <AccessTimeIcon/> <br/>
                                                        {i.начало} - {i.конец}
                                            </p>
                                            <ListItemText
                                                    className="schedule-item__list-text"
                                                    primaryTypographyProps={{fontSize: '1.2rem'}}
                                                    primary={i.дисциплина}
                                                    secondary={i.преподаватель}
                                            />
                                            <p className="schedule-item__list-audience">
                                                        <LocationOnIcon/> <br/>
                                                        {i.аудитория}
                                            </p>
                                        </ListItem>

                                    ))
                                    }
                                </List>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default ScheduleItem