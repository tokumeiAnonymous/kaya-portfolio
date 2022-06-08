import { HeaderStyled } from './Header.styled';
import { LinkStyled } from '../Utility/Link.styled';

export default function Header() {
  // you can use && to use icons if device width is small
  return (
    <HeaderStyled>
      <a href='#hero' className="logo">
        <img src='./Assets/kayalogo.svg' alt="Kaya" />
      </a>
      <ul className='nav-links'>
        <li>
          <LinkStyled 
            color={({theme}) => theme.colors.yellow} 
            href='#hero'>
              Home
          </LinkStyled>
        </li>
        <li>
          <LinkStyled 
            color={({theme}) => theme.colors.yellow} 
            href='#about'>
              About
          </LinkStyled>
        </li>
        <li>
          <LinkStyled 
            color={({theme}) => theme.colors.yellow} 
            href='#portfolio'>
              Works
          </LinkStyled>
        </li>
        <li>
          <LinkStyled 
            color={({theme}) => theme.colors.yellow} 
            href='#contact'>
              Contact
          </LinkStyled>
        </li>
      </ul>
    </HeaderStyled>
  )
}
