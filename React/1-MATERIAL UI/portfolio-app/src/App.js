// App.js
import React from 'react';
import { Container } from '@mui/material';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'; // Import your custom CSS file

function App() {
  return (
    <>
      <Header />
      <Container>
        <About />
        <Projects />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

export default App;
