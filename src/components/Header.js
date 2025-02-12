import React from "react";
import '../styles/Header.css'; // Import the Tailwind styles from a separate file
import BlurText from "../bits/BlurText";
import ShinyText from '../bits/ShinyText';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="header-content">  {/* Apply the new class here */}
        <BlurText
            text="Website Name"
            delay={150}
            animateBy="words"
            direction="top"
            className=" text mb-8"
            element="h1"
            />
        <ShinyText 
            text="Just some shiny text!"
            disabled={false} 
            speed={3} 
            className='custom-class'
            
        />

      </div>
    </header>
  );
};

export default Header;
