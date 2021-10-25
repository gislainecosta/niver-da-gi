import styled from "styled-components";
import ImgSrc from '../../images/background.png';

export const ContainerHome = styled.div`
    background-image: url(${ImgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 13vh 0 6vh 0;
`
export const Text = styled.p`
    font-weight: bold;
    font-size: 1rem;
    line-height: 2.4rem;
    color: var(--light-grape);
    margin-left: 6vw;
`
export const Tittle = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.1875rem;
    text-align: center;
    color: var(--dark-pink);
    margin-bottom: 4%;
`