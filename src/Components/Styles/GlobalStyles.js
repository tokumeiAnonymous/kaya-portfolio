import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    * {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body {
        margin: 0;
    }
`

export default GlobalStyles;