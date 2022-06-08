import styled from 'styled-components';

export const LinkStyled = styled.a`
    color: ${ ({color}) => color || 'white' };
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-shadow: 0 0 0.3rem ${ ({color}) => color || 'black' }
    }
`