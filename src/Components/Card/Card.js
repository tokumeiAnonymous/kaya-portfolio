import { CardStyled } from "./Card.styled";
import { LinkStyled } from '../Utility/Link.styled';

export default function Card({ isActive, 
  project: { name, img, description, code, live }, 
  index}) {
  return (
    <CardStyled index={index}>
      <div className={isActive ? "card__wrapper active" : "card__wrapper"}>
        <img src={img} alt={name} />
        <div className='detail-wrapper'>
          <h2>{name}</h2>
          <p>
            {description}
          </p>
          <LinkStyled
            href={code}
            fontColor={({ theme }) => theme.colors.yellow}
            rel='noreferrer'
            target='_blank'>
            Peruse the code
          </LinkStyled>
          <LinkStyled
            href={live}
            fontColor={({ theme }) => theme.colors.yellow}
            rel='noreferrer'
            target='_blank'>
            See it live
          </LinkStyled>
        </div>
      </div>
    </CardStyled>
  )
}
