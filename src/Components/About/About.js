import { AboutStyled } from './About.styled';

export default function About() {
  return (
    <AboutStyled id='about'>
      <h2>
        WHO I AM
      </h2>
      <h1>
        A Bit About Me...
      </h1>
      <p>
        Hello, My name is Jerome Taguba.
        I am a Mechanical Engineer by profession.

        I have created multiple projects.
        Check it out below.
      </p>
      <div className="skills">
        <h2>MY SKILLS</h2>
        <h1>
          What My Programming Skills Includes?
        </h1>
        <div>
          <i className="devicon-html5-plain-wordmark colored"></i>
          <i className="devicon-css3-plain colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i className="devicon-nodejs-plain colored"></i>
          <i className="devicon-react-original-wordmark colored"></i>
          <i className="devicon-github-original-wordmark colored"></i>
          <i className="devicon-git-plain-wordmark colored"></i>
          <i className="devicon-java-plain-wordmark colored"></i>
          <i className="devicon-firebase-plain-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-vscode-plain colored"></i>
          <i className="devicon-blender-original-wordmark colored"></i>
        </div>
      </div>
    </AboutStyled>
  )
}
