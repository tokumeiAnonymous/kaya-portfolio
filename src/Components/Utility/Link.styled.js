import styled from 'styled-components';

export const LinkStyled = styled.a`
    color: ${ ({fontColor}) => fontColor || 'white' };
    background-color: ${ ({bg}) => bg || 'none' };
    padding-left: ${ ({padding}) => padding || '0' };
    padding-right: ${ ({padding}) => padding || '0' };
    text-decoration: none;
    border-radius: 1rem;

    &:hover {
        text-decoration: underline;
        text-shadow: 0 0 0.3rem ${ ({fontColor}) => fontColor || 'black' };
    }
`