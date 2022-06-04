import styled from 'styled-components';

export const AppStyled = styled.div`
    position: relative;
    top: 8vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 92vh;

    > section {
        height: 92vh;
        scroll-snap-align: start;
    }
`