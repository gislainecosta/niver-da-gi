import styled from "styled-components";

export const ContainerHeader = styled.div`
    position: sticky;
    left: 0px;
    top: 0px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    z-index: 9;
`
export const Header = styled.div`
    width: 100%;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.25);
    color: var(--green);
    font-size: 1.8rem;
    padding: 0 6vw;
    background-color: var(--background);
`
export const Tittle = styled.p`
    margin-top: 5%;
    font-family: 'Henny Penny', cursive;
`
export const Menu = styled.img`
    width: 6vw;
`
export const Cake = styled.img`
    width: 9vw;
`