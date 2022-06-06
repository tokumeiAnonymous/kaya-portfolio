import { AboutStyled } from './About.styled';
import { H2Styled } from '../Utility/H2.styled';

export default function About() {
  return (
    <AboutStyled id='about'>
      <div className="about-me">
        <H2Styled>
          WHO I AM
        </H2Styled>
        <h1>
          A Bit About Me...
        </h1>
        <p>
          Hello, My name is Jerome Taguba. <br />
          I am a Mechanical Engineer by profession. <br />
          There's still so much thing to learn I'm excited. <br />
          I also love creating 3d models. <br />
          That's why I want to learn 3d web development niche. <br />
        </p>
      </div>
      <div className="skills">
        <H2Styled>MY SKILLS</H2Styled>
        <h1>
          What My Programming Skills Includes?
        </h1>
        <div>
          <i className="devicon-html5-plain-wordmark colored"> </i>
          <i className="devicon-css3-plain colored"> </i>
          <i className="devicon-javascript-plain colored"> </i>
          {/* <i className="devicon-nodejs-plain colored"> </i> */}
          <i className="devicon-react-original-wordmark colored"> </i>
          <i className="devicon-github-original-wordmark colored"> </i>
          <i className="devicon-git-plain-wordmark colored"> </i>
          <i className="devicon-java-plain-wordmark colored"> </i>
          <i className="devicon-firebase-plain-wordmark colored"> </i>
          {/* <i className="devicon-mongodb-plain-wordmark colored"> </i> */}
          <i className="devicon-vscode-plain colored"> </i>
          <i className="devicon-blender-original colored"> </i>
        </div>
      </div>
    </AboutStyled>
  )
}
