import styled from 'styled-components'

const IndicatorStyled = styled.div`
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.4rem;
    background-color: white;
    opacity: 0.4;
    cursor: pointer;

    &.active {
        opacity: 1;
        background-color: ${({theme}) => theme.colors.yellow};
        border: 1px solid white;
    }
`

export { IndicatorStyled };