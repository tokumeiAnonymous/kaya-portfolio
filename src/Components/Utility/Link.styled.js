import styled from 'styled-components';

export const LinkStyled = styled.a`
    color: ${ ({color}) => color || 'white' };
    text-decoration: none;

    &:hover {
        color: ${ ({hoverColor}) => hoverColor || 'white' };
        text-decoration: underline;
    }
`