import {useEffect, useState} from "react";
import useFetch from "../../hooks/useFetch.hook";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import {DatePickerComponent} from "../date-picker/date-picker.component";
import ScheduleItem from "../schedule-item/schedule-item.component";

import './schedule-list.style.scss'

const ScheduleList = () => {

    const url = '/Rasp?idGroup=44191'

    const [{isLoading, response, error}, doFetch] = useFetch(url);
    useEffect(() => {
        doFetch()
    }, [doFetch])

    const [date, setDate] = useState()
    let todayDate = new Date()
    const [selectedDate, setSelectedDate] = useState(todayDate.toISOString())
    let selected = new Date(selectedDate)

    function groupBy(key) {
        return function group(array) {
            return array.reduce((acc, obj) => {
                const property = obj[key];
                acc[property] = acc[property] || [];
                acc[property].push(obj);
                return acc;
            }, {});
        };
    }

    const groupByYear = groupBy("дата")

    useEffect(() => {
        if (response) {
            setDate(groupByYear(response.data.rasp))
        }
    }, [response])


    const spinnerJSX = isLoading ?
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <CircularProgress className="spinner"/>
        </Box> : null

    const contentJSX = date ?
        <ScheduleItem
            date={date}
            selected={selected}
        /> : spinnerJSX

    const datePicker = date ?
        <DatePickerComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        /> : null

    return (
        <div className="container">
            {datePicker}
            {contentJSX}
        </div>
    )
}

export default ScheduleList