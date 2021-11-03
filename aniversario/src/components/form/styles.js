import styled from "styled-components";

export const Tittle = styled.p`
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.875rem;
    text-align: center;
    color: var(--blue-text);
    margin: 4% 0;
`
export const Input = styled.input`
    background: rgba(64, 185, 255, 0.3);
    border-radius: 10px;
    height: 2.5rem;
    width: 86vw;
    color: var(--blue-text);
    padding: 0 4.5vw;
    font-size: 0.75rem;
    margin: 3% 0;
`
export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const Button = styled.input`
    background: var(--dark-pink);
    color: #FFDAE7;
    margin-top: 4%;
    font-size: 0.75rem;
    height: 2.125rem;
    width: 24.5vw;
    border-radius: 12px;
`