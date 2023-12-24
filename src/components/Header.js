import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500
    });
  };

  return (
    <header>
      <h1 onClick={scrollToTop}>Exit from paradise</h1>
      <nav>
        {/* Use ScrollLink for smooth scrolling navigation */}
        <ul>
          <li><ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={500}>About</ScrollLink></li>
          <li><ScrollLink to="music" spy={true} smooth={true} offset={-70} duration={500}>Music</ScrollLink></li>
          <li><ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</ScrollLink></li>
          <li><ScrollLink to="gigs" spy={true} smooth={true} offset={-70} duration={500}>Gigs</ScrollLink></li>
          <li><ScrollLink to="linktree" spy={true} smooth={true} offset={-70} duration={500}>Links</ScrollLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;