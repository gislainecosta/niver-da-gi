import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import * as St from './styles';

export default function Start() {
    const [days, setDays] = useState('')
    let history = useHistory();

    useEffect(() => {
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth();
        let year = today.getFullYear();
        let birthday = moment([2021, 10, 15])
            
        today = moment([year, month, day]);
        let days = birthday.diff(today, 'days')

        setDays(days)
    }, [])

    const enterToSite = () => {
        history.push("home")
    }

    return (
        <St.ContainerStart>
            <St.BlueText>Faltam</St.BlueText>
            <St.DaysNumber>{days}</St.DaysNumber>
            <St.BlueText>dias</St.BlueText>
            <St.BlueText>Para a <St.PinkText>festa do século!</St.PinkText></St.BlueText>
            <St.Button onClick={enterToSite}>Bora lá!</St.Button>
        </St.ContainerStart>
    )
}