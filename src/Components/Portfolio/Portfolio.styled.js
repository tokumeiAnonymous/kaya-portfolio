import styled from 'styled-components';

export const PortfolioStyled = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.main};
    color: white;
    align-items: center;
    justify-content: flex-start;

    h1 {
        margin: 0.2rem;
    }

    ul {
        display: flex;
        list-style: none;
        gap: 1rem;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-bottom: 1rem;
    }

    li {
        cursor: pointer;
    }
`