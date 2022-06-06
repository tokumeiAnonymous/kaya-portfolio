import styled from 'styled-components';

export const ButtonStyled = styled.button`
    color: ${ ({color}) => color || 'black' };
    background-color: ${ ({bg}) => bg || 'white' };
    border: none;
    font-size: 1.5rem;
    border-radius: 0.75rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border: 2px solid ${ ({bg}) => bg || 'white' };
    cursor: pointer;

    &:hover {
        background-color: ${ ({hoverColor}) => hoverColor || 'white' };
    }

    .active {
        background-color: white;
    }
`