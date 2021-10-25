import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #08111D;
        --blue-text: #40B9FF;
        --pink: #FF40E0;
        --grape: #9F40FF;
        --green: #2DEFB1;
        --dark-pink: #FF4085;
        --light-grape: #BE7DFF;
    }

    @font-face {
        font-family: 'Ink Free';
        font-style: normal;
        font-weight: 400;
        src: local('Ink Free'), local('InkFree'),
        url('../public/fonts/Inkfree.ttf') format('truetype');
    }

    * {
        font-family: 'Merienda', cursive;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        font-family: 'Merienda', cursive;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    html {
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }

    input, button {
        border: none;
        outline: none;
    }

    button:hover {
        transform: scale(0.92)
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`