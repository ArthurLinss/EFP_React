// components/Header.js

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Exit from paradise</h1>
      <nav>
        {/* Add anchor links for smooth scrolling */}
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#gigs">Gigs</a></li>
          <li><a href="#linktree">Links</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
