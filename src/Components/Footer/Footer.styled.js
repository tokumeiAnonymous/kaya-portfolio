import styled from 'styled-components';

export const FooterStyled = styled.footer`
    position: absolute;
    bottom: 0;
    height: 10vh;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px hsla(0, 0%, 0%, 0.1);
    color: hsla(0, 100%, 100%, 0.6);
    
    img {
        width: 2rem;
        height: 2rem;
        margin: 0.5rem;
    }
`