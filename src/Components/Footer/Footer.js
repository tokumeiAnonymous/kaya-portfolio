import { FooterStyled } from './Footer.styled';

export default function Footer() {
  return (
    <FooterStyled>
      <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/jerome-taguba-a15735231/">
        <img src='/Assets/linkedin-brands.svg' alt="LinkedIn" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/tokumeiAnonymous">
        <img src='/Assets/github-brands.svg' alt="Github" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://discord.com/channels/NoOne#9252">
        <img src='/Assets/discord-brands.svg' alt="Discord" />
      </a>
      <div>
        <div>
        © Kaya Development. All Rights Reserve.
        </div>
        <div>  &ensp; Email: jerometokumei@gmail.com</div>
      </div>
    </FooterStyled>
  )
}
