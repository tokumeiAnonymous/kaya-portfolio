import styled from 'styled-components';

const CarouselStyled = styled.div`
   position: relative;
   height: 70vh;
   background-color: ${({theme}) => theme.colors.secondary};
   border-radius: 1rem;
   padding: 1rem;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .carousel__button {
    position: absolute;
    cursor: pointer;
    height: 70px;
    top: 40%;
    transform: translateY(-50%);
    opacity: 0.1;
    transition: all 0.5s ease;
   }

   .carousel__button:hover {
    opacity: 1;
   }

   .left {
    left: -2rem;
   }

   .right {
    right: -2rem;
   }

   .carousel-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
   }
`

export { CarouselStyled }