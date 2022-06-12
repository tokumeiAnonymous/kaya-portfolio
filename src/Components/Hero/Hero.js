import { HeroStyled } from './Hero.styled';
import Typewriter from 'typewriter-effect';
import { LinkStyled } from '../Utility/Link.styled';

export default function Hero() {

  return (
    <HeroStyled id='hero'>
      <div className="left">
        <img src="/Assets/profile.svg" alt="" />
      </div>
      <div className="right">
        <div className='hero-wrapper'>
          <h2>Hello there!<br />I'm
            <span>
              Jerome Taguba
            </span>
            <br />
            I'm a
          </h2>
          <h1>
            <Typewriter
              options={{
                strings: ['Web Developer',],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div>
            I code and create beautiful simple things.<br />
            I'm passionate with what I do. <br />
            Let's build something together!
          </div>
          <div>
            <LinkStyled
              fontColor={({ theme }) => theme.colors.secondary}
              bg={({ theme }) => theme.colors.yellow}
              padding='1rem'
              href='#about'
            >
              Get to know me
            </LinkStyled>
          </div>
        </div>
      </div>
    </HeroStyled>
  )
}
