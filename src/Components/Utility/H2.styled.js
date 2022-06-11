import styled from 'styled-components';

export const H2Styled = styled.h2`
    font-weight: 500;
    color: ${ ({theme}) => theme.colors.yellow};
    background-color: ${ ({theme}) => theme.colors.secondary};
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    width: fit-content;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
`