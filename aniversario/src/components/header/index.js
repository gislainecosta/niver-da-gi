import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../navigation';
import * as St from './styles';
import IconMenu from '../../images/menu.svg';
import IconClose from '../../images/close.png';
import IconCake from '../../images/cake.png';

export default function Header() {
    const [navigationIsOpen, setNavigationIsOpen ] = useState(false)
    let history = useHistory();
    let url = window.location.pathname

    useEffect(() => {
        setNavigationIsOpen(false)
    }, [url])

    const handleOpenMenu = () => {
        setNavigationIsOpen(!navigationIsOpen)
    }

    const goToHome = () => {
        history.push("home")
    }

    return (
        <St.ContainerHeader>
            <St.Header>
                <St.Menu src={navigationIsOpen ? IconClose : IconMenu} onClick={handleOpenMenu} alt="Menu" />
                <St.Tittle onClick={goToHome}>Aniversário da Gi</St.Tittle>
                <St.Cake src={IconCake} alt="Ícone Bolo" />
            </St.Header>

            { navigationIsOpen ? <Navigation /> : <> </> }

        </St.ContainerHeader>
    )
}
