import styled from 'styled-components';

export const LinkStyled = styled.a`
    color: white;
    text-decoration: none;

    &:hover {
        color: ${ ({color}) => color || 'white'};
        text-decoration: underline;
    }
`