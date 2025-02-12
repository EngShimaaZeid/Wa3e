import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../styles/Navbar.css'; // Import the CSS file
import TextPressure from '../bits/TextPressure';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='navbar'>
      {/* Logo */}
      <h1 className='logo'>
        <TextPressure
            text="logo"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="c6d809"
            strokeColor="#ff0000"
            minFontSize={36}
    />

      </h1>

      {/* Desktop Navigation */}
      <ul className='desktop-nav'>
        {navItems.map(item => (
          <li key={item.id} className='nav-item'>
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='mobile-nav-icon'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={nav ? 'mobile-nav mobile-nav-open' : 'mobile-nav'}>
        <h1 className='logo-mobile'>REACT.</h1>
        {navItems.map(item => (
          <li key={item.id} className='mobile-nav-item'>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
