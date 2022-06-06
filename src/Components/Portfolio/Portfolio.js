import { PortfolioStyled } from './Portfolio.styled';
import { H2Styled } from '../Utility/H2.styled';
import { ButtonStyled } from '../Utility/Button.styled';

export default function Portfolio() {
  // add toggle active class
  return (
    <PortfolioStyled id='portfolio'>
      <H2Styled> MY WORKS </H2Styled>
      <h1> Featured Works </h1>
      <ul>
        <li>
          <ButtonStyled
          bg={({theme}) => theme.colors.yellow}
          hoverColor={({theme}) => theme.colors.yellowHover}
          >
            Web
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled
          bg={({theme}) => theme.colors.yellow}
          hoverColor={({theme}) => theme.colors.yellowHover}
          >
            3D/Game
          </ButtonStyled>
        </li>
        <li>
          <ButtonStyled
          bg={({theme}) => theme.colors.yellow}
          hoverColor={({theme}) => theme.colors.yellowHover}
          >
            Mobile
          </ButtonStyled>
        </li>
      </ul>
      <div className='container'>

      </div>
    </PortfolioStyled>
  )
}
