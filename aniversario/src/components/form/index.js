import React, { useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com';
import * as St from './styles';

export default function Form() {
    function enviarEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_q06x5r4', 'template_s27ntbx', e.target, 'user_beTebqYFT6uzrsYlfXw8h')
            .then((result) => {
                alert("Música enviada com sucesso :D")
                e.target.reset()
            }, (error) => {
                alert("Por favor, tente novamente", error)
            });
    }

    return (
        <>
            <St.Tittle>Cadastre suas músicas prefeirdas</St.Tittle>

            <form id="myform" autoComplete="off" onSubmit={enviarEmail}>
                <St.Input required placeholder="Seu nome" name="name"/>
                <St.Input required placeholder="Música" name="music"/>
                <St.Input required placeholder="Cantor/Banda" name="singer"/>

                <St.ContainerButtons>
                    <St.Button type="submit" value="Enviar" />
                </St.ContainerButtons>
            </form>
        </>
    )
}
