import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {ListItem, ListItemText} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const ScheduleList = ({i, index}) => {
    return (
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
    )
}

export default ScheduleList