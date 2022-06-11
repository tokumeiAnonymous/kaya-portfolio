import { ContactStyled } from './Contact.styled';
import { ButtonStyled } from '../Utility/Button.styled';
import { H2Styled } from '../Utility/H2.styled';
import Footer from '../Footer/Footer';
import { useState } from 'react';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <ContactStyled id='contact'>
      <div className="left">
        <img src="/Assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <H2Styled>Contact</H2Styled>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <ButtonStyled 
          type='submit'
          fontColor={({theme}) => theme.colors.yellow}
          bg={({theme}) => theme.colors.secondary}
          > 
          Send
          </ButtonStyled>
          {message && <span>Thanks, I'll get back to you soon.</span>}
        </form>
      </div>
      <Footer />
    </ContactStyled>
  )
}
