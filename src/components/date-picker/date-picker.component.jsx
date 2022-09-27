import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import enLocale from 'date-fns/locale/en-GB';

import './date-picker.style.scss'


export const DatePickerComponent = ({selectedDate, setSelectedDate}) => {
    return (
        <LocalizationProvider locale={enLocale} dateAdapter={AdapterDateFns}>
            <Stack className="date-picker" spacing={1} sx={{width: '250px'}}>
                <DatePicker
                    label="Выберите дату"
                    onChange={(newValue) => {
                        setSelectedDate(newValue)}}
                    value={selectedDate}
                    renderInput={(params) => <TextField {...params}/>}
                />
            </Stack>
        </LocalizationProvider>
    )
}