import { PortfolioStyled } from './Portfolio.styled';
import { H2Styled } from '../Utility/H2.styled';
import { ButtonStyled } from '../Utility/Button.styled';
import Carousel from '../Carousel/Carousel';
import Projects from '../../Data/Projects'
import { useState } from 'react';

export default function Portfolio() {

  const [projects, setProjects] = useState(Projects[0]);

  function changeCarousel(event) {
    Projects.forEach( element => {
      element.isActive = element.name === event.target.name;
      if (element.isActive) setProjects(element);
    })
  }

  const buttonList = Projects.map(element => {
    return <ButtonStyled
            key={element.name}
            name={element.name}
            className={element.isActive ? 'active' : null}
            onClick={changeCarousel}
            bg={({theme}) => theme.colors.secondary}
            fontColor={({theme}) => theme.colors.yellow}
    >
      {element.name.toUpperCase()}
    </ButtonStyled>
  })
  return (
    <PortfolioStyled id='portfolio'>
      <H2Styled> MY WORKS </H2Styled>
      <h1> Featured Works </h1>
      <ul>
        {buttonList}
      </ul>
      <Carousel projects={projects.data}/>
    </PortfolioStyled>
  )
}