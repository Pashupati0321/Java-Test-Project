import React, { useEffect, useState } from 'react';
import './Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    setActiveSection(targetId);
  };

  const onScroll = () => {
    const sections = ['about', 'projects', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveSection(section);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header>
      <h1 className="logo">Your Name</h1>
      <nav>
        <ul>
          <li><a href="#about" onClick={handleScroll} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#projects" onClick={handleScroll} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" onClick={handleScroll} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
