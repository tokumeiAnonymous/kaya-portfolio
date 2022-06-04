import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
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
        <About />
        <Portfolio />
        <Contact />
      </AppStyled>
    </ThemeProvider>
    );
}
