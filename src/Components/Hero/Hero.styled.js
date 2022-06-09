import styled from 'styled-components';

export const HeroStyled = styled.section`
    background-color: ${ ({theme}) => theme.colors.main};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    .hero-wrapper {
        width: 80%;
        padding-bottom: 2rem;
        text-align: center;

        div {
            margin-bottom: 1rem;
        }
    }

    h2 {
        font-size: 1.5rem;
    }

    span {
        color: ${ ({theme}) => theme.colors.yellow };
    }

    span::before {
        content: ' ';
    }

    h1 {
        font-size: 2.5rem;
        
        span {
            color: inherit;
        }
    }
`