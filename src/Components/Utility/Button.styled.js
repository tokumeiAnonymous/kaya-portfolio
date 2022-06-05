import styled from 'styled-components';

export const ButtonStyled = styled.button`
    color: ${ ({color}) => color || 'black' };
    background-color: ${ ({bg}) => bg || 'white' };

    &:hover {
        
    }
`