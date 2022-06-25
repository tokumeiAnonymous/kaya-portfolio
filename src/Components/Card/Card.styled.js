import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: fit-content;
    border-radius: 1rem;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main};
    animation: slide-left 500ms forwards, fade-in 500ms forwards;

    @keyframes fade-in {
      0% {
          opacity: 0;
        }
      100% {
        opacity: 1;
        }
    }

    @keyframes slide-left {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0%);
      }
    }

    img {
        width: 300px;
        border-radius: 1rem 1rem 0 0;
    }

    .detail-wrapper {
        width: 290px;
    }

    a {
        margin-right: 1rem;
    }

    @media only screen and (min-height: 740px) and (min-width: 960px) {
        flex-direction: row;
        img {
            width: 500px;
            border-radius: 1rem 0 0 1rem;
        }
    }

    @media only screen and (max-height: 740px) {
        flex-direction: row;
        img {
            border-radius: 1rem 0 0 1rem;
        }
    }
`
