// App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Music from './components/Music';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Music />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// JavaScript (React) for smooth scrolling

document.addEventListener('DOMContentLoaded', function() {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  for (let smoothScrollLink of smoothScrollLinks) {
    smoothScrollLink.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});


export default App;
