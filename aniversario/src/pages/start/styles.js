import styled from "styled-components";
import ImgSrc from '../../images/background.png';

export const ContainerStart = styled.div`
    background-image: url(${ImgSrc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 4vh 5vw 10vh 5vw;
`
export const BlueText = styled.p`
    font-size: 2.25rem;
    text-align: center;
    color: var(--blue-text);
`
export const PinkText = styled.span`
    font-size: 2.25rem;
    text-align: center;
    color: var(--pink);
`
export const DaysNumber = styled.p`
    font-size: 9rem;
    line-height: 10rem;
    text-align: center;
    color: var(--pink);
`
export const Button = styled.button`
    background: var(--grape);
    box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
    color: var(--background);
    padding: 1vh 14vw;
    margin-top: 4vh;
`