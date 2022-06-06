import { HeroStyled } from './Hero.styled';
import Typewriter from 'typewriter-effect';

export default function Hero() {

  return (
    <HeroStyled id='hero'>
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
        <a href='#contact'>
          Hire me
        </a>
      </div>
    </HeroStyled>
  )
}
