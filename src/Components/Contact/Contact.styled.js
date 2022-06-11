import styled from 'styled-components';

export const ContactStyled = styled.section`

    position: relative;
    display: flex;
    color: white;
      
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        overflow: hidden;
      
        img {
            height: 100%;
            width: 50vw;
        }
    }

    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
        h2 {
        font-size: 30px;
        }
    
        form {
        width: 70%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    
        input {
            width: 300px;
            height: 30px;
            font-size: 14px;
        }
    
        textarea {
            width: 300px;
            height: 200px;
            font-size: 14px;
            resize: none;
    
            @include mobile {
            width: 200px;
            height: 100px;
            }
        }
        }
    
        span {
            color: ${({theme}) => theme.colors.yellow};
        }
        }
    }

    @media only screen and (max-width: 500px) {
        .left {
            display: none;
        }
    }

    @media only screen and (min-width: 501px) and (max-width: 960px) {
        .left {
            img {
                width: 40vw;
            }
        }
    }
`