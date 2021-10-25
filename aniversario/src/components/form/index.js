import React, { useState, useEffect } from "react";
import * as St from './styles';
import styled from "styled-components";

const Button = styled.button`
    background: ${props => props.bckColor};
    color: ${props => props.color};
    margin-top: 4%;
    font-size: 0.75rem;
    height: 2.125rem;
    width: 24.5vw;
    border-radius: 12px;
    margin-left: 6%;
`

export default function Form() {
    const [name, SetName] = useState("")
    useEffect(() => {
    }, [])

    return (
        <>
            <St.Tittle>Cadastre suas músicas prefeirdas</St.Tittle>

            <form>
                <St.Input placeholder="Seu nome" />
                <St.Input placeholder="Música" />
                <St.Input placeholder="Cantor/Banda" />

                <St.ContainerButtons>
                    <Button bckColor={"var(--dark-pink)"} color={"#FFDAE7"} >É isso</Button>
                    <Button bckColor={"var(--grape)"} color={"#EDDBFF"} >Mais uma</Button>
                </St.ContainerButtons>
            </form>
        </>
    )
}
