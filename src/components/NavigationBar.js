import React from 'react';
import './NavigationBar.css';
const NavigationBar = () => {
  return (
    <section>
      <h2 className='NavigationBar__Heading'>Navigation Bar</h2>
      <nav className='NavigationBar'>
        <li>Why GitHub?</li>
        <li>Team</li>
        <li>Enterprise</li>
        <li>Explore</li>
        <li>Marketplace</li>
        <li>Pricing</li>
      </nav>
    </section>
  );
};

export default NavigationBar;
