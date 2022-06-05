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

    a {
        text-decoration: none;
        color: ${ ({theme}) => theme.colors.secondary };
        font-weight: 500;
        font-size: 1.5rem;
        width: 120px;
        padding: 5px 2rem;
        background-color: ${ ({theme}) => theme.colors.yellow };
        border-radius: 1.5rem;
        border: 2px solid ${ ({theme}) => theme.colors.yellow };
    }

    a:hover {
        background-color: ${ ({theme}) => theme.colors.yellowHover };
    }
`