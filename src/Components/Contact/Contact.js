import { ContactStyled } from './Contact.styled';
import { ButtonStyled } from '../Utility/Button.styled';
import { H2Styled } from '../Utility/H2.styled';
import Footer from '../Footer/Footer';
import { useState, useRef } from 'react';

export default function Contact() {

  const [isSentMessage, setIsSentMessage] = useState(false);
  const messageInput = useRef();
  const emailInput = useRef();


  function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "contact", 
        "email": emailInput.current.value,
        "message": messageInput.current.value
      })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
    
    setIsSentMessage(true);
  };

  return (
    <ContactStyled id='contact'>
      <div className="left">
        <img src="/Assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <H2Styled>Contact</H2Styled>
        <form 
          name='contact'
          data-netlify='true'
          onSubmit={handleSubmit}>
          <input 
            name='email'
            ref={emailInput} 
            type="email" 
            placeholder="Email" 
            required/>
          <textarea 
            name='message'
            ref={messageInput} 
            placeholder="Message"
            required>
          </textarea>
          <ButtonStyled 
          type='submit'
          fontColor={({theme}) => theme.colors.yellow}
          bg={({theme}) => theme.colors.secondary}
          > 
          Send
          </ButtonStyled>
          {isSentMessage && <span>Thanks, I'll get back to you soon.</span>}
        </form>
      </div>
      <Footer />
    </ContactStyled>
  )
}
