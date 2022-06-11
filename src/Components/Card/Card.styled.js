import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 300px;
    border-radius: 1rem;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main};

    img {
        width: 100%;
        border-radius: 1rem 1rem 0 0;
    }

    .detail-wrapper {
        width: 90%;
    }

    a {
        margin-right: 1rem;
        text-decoration: none;
    }
`
