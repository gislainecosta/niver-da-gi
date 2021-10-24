import styled from "styled-components";

export const ContainerHeader = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    z-index: 2;
`

export const Header = styled.div`
    width: 100%;
    height: 9vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.25);
    color: var(--green);
    font-size: 1.875rem;
    padding: 0 6vw;
`

export const Menu = styled.img`
    width: 6vw;
`

export const Cake = styled.img`
    width: 9vw;
`