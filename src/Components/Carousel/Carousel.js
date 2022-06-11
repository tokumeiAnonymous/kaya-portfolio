import Card from '../Card/Card';
import { CarouselStyled } from './Carousel.styled';
import { useState, useEffect } from 'react';

export default function Carousel({projects}) {

  const [current, setCurrent] = useState(0);
  const length = projects.length;

  useEffect( () => {
    setCurrent(0);
  }, [projects])

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(projects)) {
    return null;
  }

  // return all but only return with active class if index == current
  const projectList = projects.map( (element, index) => {
    return (
      index === current && 
    <Card 
    key={element.name + index} 
    project={element} 
    />)
  })

  /*
  const indicatorList = projects.map( (element, index) => {

  })
  */
  return (
    <CarouselStyled >
      <img
      className="carousel__button left"
      onClick={prevSlide} 
      src="/Assets/angle-left-solid.svg" 
      alt="previous" 
      />
      <img 
      className="carousel__button right"
      onClick={nextSlide} 
      src="/Assets/angle-right-solid.svg" 
      alt="previous" 
      />
      <div className="carousel-slide">
        {projectList}
      </div>
      {/* add circle here */}
    </CarouselStyled>
  )
}
