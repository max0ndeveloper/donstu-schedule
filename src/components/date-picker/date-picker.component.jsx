import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import ruLocale from 'date-fns/locale/ru'

import './date-picker.style.scss'


export const DatePickerComponent = ({selectedDate, setSelectedDate}) => {
    return (
        <LocalizationProvider adapterLocale={ruLocale} dateAdapter={AdapterDateFns}>
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