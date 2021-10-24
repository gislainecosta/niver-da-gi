import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navigation from '../navigation';
import * as St from './styles';
import IconMenu from '../../images/menu.svg';
import IconClose from '../../images/close.png';
import IconCake from '../../images/cake.png';

export default function Header() {
    const [navigationIsOpen, setNavigationIsOpen ] = useState(false)
    let history = useHistory();

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
                <p onClick={goToHome} style={{fontFamily: 'Ink Free'}}>Aniversário da Gi</p>
                <St.Cake src={IconCake} alt="Ícone Bolo" />
            </St.Header>

            { navigationIsOpen ? <Navigation /> : <> </> }

        </St.ContainerHeader>
    )
}
