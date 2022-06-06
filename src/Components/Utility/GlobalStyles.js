import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        margin: 0;
        background-color: hsl(210, 11%, 15%);
    }
`

export default GlobalStyles;