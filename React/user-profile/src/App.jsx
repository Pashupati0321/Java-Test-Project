
import './App.css';
import Bio from './components/Bio';
import Header from './components/header';
import styles from './App.module.css';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {  
  return (
    <div className={styles.app}>
      <Header/>
      <Bio/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
