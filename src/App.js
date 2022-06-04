import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Portfolio from './Components/Portfolio/Portfolio';
import Works from './Components/Works/Works';
import Contact from './Components/Contact/Contact';
import { AppStyled } from './Components/Styles/App.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './Components/Styles/ThemeStyles';
import GlobalStyles from './Components/Styles/GlobalStyles';

export default function App() {

  // can add useState here to switch between themes
  return (
    <ThemeProvider theme={darkTheme}>
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
        <Contact />
      </AppStyled>
    </ThemeProvider>
    );
}
