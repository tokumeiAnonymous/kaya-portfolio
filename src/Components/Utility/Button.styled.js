import styled from 'styled-components';

export const ButtonStyled = styled.button`
    color: ${ ({fontColor}) => fontColor || 'black' };
    background-color: ${ ({bg}) => bg || 'white' };
    border: none;
    font-size: 1.5rem;
    border-radius: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    cursor: pointer;

    &.active, &:hover {
        text-shadow: 0 0 0.3rem ${ ({fontColor}) => fontColor || 'black' };
        background-color: white;
    }
`