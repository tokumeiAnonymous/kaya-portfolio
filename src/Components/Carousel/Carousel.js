import { CarouselStyled } from './Carousel.styled';
import Card from '../Card/Card';

export default function Carousel({ projects }) {

  const projectList = projects.map( project => {
    return (<Card 
            key={project.id}
            project={project}
            />)
  })
  return (
    <CarouselStyled>
        <div className="carousel--inner">
            {projectList}
        </div>
    </CarouselStyled>
  )
}
