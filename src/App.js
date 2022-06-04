import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Portfolio from './Components/Portfolio/Portfolio';
import Works from './Components/Works/Works';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import { AppStyled } from './Components/Styles/App.styled';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Components/Styles/ThemeStyles';
import GlobalStyles from './Components/Styles/GlobalStyles';

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Header />
      <AppStyled>
        {/* 
      header
      menu
      hero
      about
      portfolio
      works
      testimonials
      contact
      footer 
      */}
        <Hero />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </AppStyled>
    </ThemeProvider>
    );
}
