import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1;
    width: 100vw;
    background-color: ${ ({theme}) => theme.colors.main};
    padding-left: 1rem;
    padding-top: auto;
    margin: 0;
    color: white;
    height: 8vh;

    .logo {
        margin-right: auto;
    }

    img {
        height: 7vh;
        border-radius: 3vh;
        border: 1px solid gray;
    }

    img:hover {
        border: 1px solid ${ ({theme}) => theme.colors.yellow};
        cursor: pointer;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style-type: none;
        margin-right: 1rem;
    }
`