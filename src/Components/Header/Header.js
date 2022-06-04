import { HeaderStyled } from './Header.styled';

export default function Header() {
  return (
    <HeaderStyled>
      <a href='#hero' className="logo">
        <img src='./Assets/kayalogo.svg' alt="Kaya" />
      </a>
      <ul className='nav-links'>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Works</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </HeaderStyled>
  )
}
