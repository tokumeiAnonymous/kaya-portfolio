import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    border-radius: 1rem;
    align-items: center;
    justify-content: space-between;
    background-color: ${({theme}) => theme.colors.main};

    img {
        width: 300px;
        border-radius: 1rem 1rem 0 0;
    }

    div {
        width: 300px;
    }
`