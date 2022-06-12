import Card from '../Card/Card';
import { CarouselStyled } from './Carousel.styled';
import { useState, useEffect } from 'react';
import { IndicatorStyled } from '../Utility/Indicator.styled';

export default function Carousel({ projects }) {

  const [current, setCurrent] = useState(0);
  const length = projects.length;

  useEffect(() => {
    setCurrent(0);
  }, [projects])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(prev => prev === length - 1 ? 0 : prev + 1);
    }, 3000)
    // need to clear interval because setInterval will stack
    return () => clearInterval(intervalId);
  }, [length])

  function nextSlide() {
    setCurrent(prev => prev === length - 1 ? 0 : prev + 1);
  }

  function prevSlide() {
    setCurrent(prev => prev === 0 ? length - 1 : prev - 1);
  }

  function updateCurrent(index) {
    setCurrent(index);
  }

  if (!Array.isArray(projects)) {
    return null;
  }

  // return all but only return with active class if index == current
  const projectList = projects.map((element, index) => {
    return <Card
      isActive={index === current}
      key={element.name + index}
      project={element}
    />
  })

  const indicatorList = projects.map((element, index) => {
    return <IndicatorStyled
      key={index}
      onClick={() => updateCurrent(index)}
      className={index === current ? 'active' : null}
    />
  })

  return (
    <CarouselStyled >
      <div className="carousel__wrapper">
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
          <div className="indicator">
            {indicatorList}
          </div>
        </div>
      </div>
    </CarouselStyled>
  )
}
