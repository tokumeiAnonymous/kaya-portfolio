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
        </h2>
        <div>
          I code and create beautiful simple things.
          <br />
          I love what I do. 
        </div>
        <h1>
        <Typewriter 
          options={{
            strings: ['Web Developer',],
            autoStart: true,
            loop: true,
          }}
        />
        </h1>
        <a href='#contact'>
          Hire me
        </a>
      </div>
    </HeroStyled>
  )
}
