import styled from 'styled-components';

export const HeroStyled = styled.section`
    background-color: ${ ({theme}) => theme.colors.main};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @keyframes fade-in {
        0% {
            opacity: 0;
          }
        100% {
          opacity: 1;
          }
      }

      @keyframes slide-down {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(0%);
        }
      }

    .left {
      animation: slide-down 500ms forwards, fade-in 500ms forwards;
        img {
            background-color: ${ ({theme}) => theme.colors.secondary};
            border-radius: 50%;
            width: 80%;
            max-width: 650px;
            border:3px solid ${ ({theme}) => theme.colors.yellow};
        }
    }

    .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        width: 400px;

        .hero-wrapper {
            width: 80%;
            padding-bottom: 2rem;
            text-align: center;

            div {
                margin-bottom: 1rem;
            }
        }

        h2 {
            font-size: 1.5rem;
        }

        span {
            color: ${ ({theme}) => theme.colors.yellow };
        }

        span::before {
            content: ' ';
        }

        h1 {
            font-size: 2.5rem;
            
            span {
                color: inherit;
            }
        }
    }

    @media only screen and (max-width: 960px) {
        .left {
            display: none;
        }
    }
`