import { CardStyled } from "./Card.styled";

export default function Card({ project: {name, img, description, code, live }}) {
  return (
    <CardStyled>
      <img src={img} alt={name} />
      <div className='detail-wrapper'>
        <h2>{name}</h2>
        <p>
          {description}
        </p>
        <a href={code} rel='noreferrer' target='_blank'>
          Peruse the code
        </a>
        <a href={live} rel='noreferrer' target='_blank'>
          See it live
        </a>
      </div>
    </CardStyled>
  )
}
