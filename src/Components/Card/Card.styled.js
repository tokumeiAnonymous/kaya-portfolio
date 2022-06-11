import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
    border-radius: 1rem;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main};

    img {
        width: 300px;
        border-radius: 1rem 1rem 0 0;
    }

    .detail-wrapper {
        width: 290px;
    }

    a {
        margin-right: 1rem;
    }

    @media only screen and (max-height: 740px) {
        flex-direction: row;
        img {
            border-radius: 1rem 0 0 1rem;
        }
    }
`
