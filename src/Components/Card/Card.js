import { CardStyled } from "./Card.styled";
import { LinkStyled } from '../Utility/Link.styled';

export default function Card({ project: {name, img, description, code, live }}) {
  return (
    <CardStyled>
      <img src={img} alt={name} />
      <div className='detail-wrapper'>
        <h2>{name}</h2>
        <p>
          {description}
        </p>
        <LinkStyled
         href={code} 
         fontColor={({theme}) => theme.colors.yellow}
         rel='noreferrer' 
         target='_blank'>
          Peruse the code
        </LinkStyled>
        <LinkStyled
         href={live} 
         fontColor={({theme}) => theme.colors.yellow}
         rel='noreferrer' 
         target='_blank'>
          See it live
        </LinkStyled>
      </div>
    </CardStyled>
  )
}
