import styled from 'styled-components';

export const AboutStyled = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${ ({theme}) => theme.colors.main };
    color: white;
    justify-content: center;

    h2 {
        font-weight: 500;
        color: ${ ({theme}) => theme.colors.yellow};
        background-color: ${ ({theme}) => theme.colors.secondary};
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        width: fit-content;
    }

    h1 {
        margin: 0.5rem;
        margin-top: 0;
    }

    p {
        margin: 0.5rem;
        font-size: 1.5rem;
        text-align: justify;
    }

    .skills div i {
        font-size: 2rem;
        text-align: center;
    }
`