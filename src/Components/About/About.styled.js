import styled from 'styled-components';

export const AboutStyled = styled.section`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    flex-direction: column;
    background-color: ${ ({theme}) => theme.colors.main };
    color: white;
    justify-content: center;

    h1 {
        margin: 0.5rem;
        margin-top: 0;
    }

    p {
        margin: 0.5rem;
        font-size: 1.5rem;
    }

    .skills > div > i {
        font-size: 2rem;
    }

    @media only screen and (min-width: 960px) {
        flex-direction: row;
        align-items: center;

        .skills > div > i {
            font-size: 3rem;
        }
    }
`