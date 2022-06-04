import styled from 'styled-components';

export const AppStyled = styled.div`
    position: relative;
    height: 92vh;
    top: 8vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
    /* for firefox */
    scrollbar-width: none;
    /* for other browsers */
    &::-webkit-scrollbar {
        display: none;
    }

    > section {
        height: 92vh;
        scroll-snap-align: start;
    }
`