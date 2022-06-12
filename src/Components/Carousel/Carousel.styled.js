import styled from 'styled-components';

const CarouselStyled = styled.div`
   background-color: ${({theme}) => theme.colors.secondary};
   border-radius: 1rem;
   
   .carousel__wrapper {
      position: relative;
      height: fit-content;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   
      .carousel__button {
       position: absolute;
       cursor: pointer;
       height: 70px;
       top: 50%;
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
       position: relative;
       height: 500px;
       width: 300px;
      }
   
      .indicator {
         position: absolute;
         bottom: 0;
         left: 50%;
         transform: translateX(-50%);
         display: flex;
         width: fit-content;
         margin-top: 0.25rem;
         gap: 0.25rem;
      }

      @media only screen and (min-height: 740px) and (min-width: 960px) {
         .carousel-slide {
            width: 800px;

         }
      }
   
      @media only screen and (max-height: 740px) {
         .carousel-slide {
            height: 290px;
            width: 600px;
         }

         .indicator {
            bottom: -1rem;
         }
      }
   }
`

export { CarouselStyled }