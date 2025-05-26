import React, { useState, useEffect, useRef } from 'react';

const Button = ({
  width="200px",
  bgColor = "",
  textColor = '#165eb2',
  borderColor = "",
  title = "تسجيل دخول",
  hoverBgColor = '',
  hoverTextColor = '',
  hoverBorderColor = '',
  hoverBorderWidth = '1px', // Default border width on hover

  borderWidth = '1px', // Default border width
  size = 'auto', // Default size
  fontSize='16px',
  hoverFontWeight='bold',
  hoverSize = 'auto', // Size on hover
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null); // Ref to get the button DOM element
  const [borderSize, setBorderSize] = useState(borderWidth); // Default border size

  // Detect the initial border size when the component mounts
  useEffect(() => {
    if (buttonRef.current) {
      const initialBorderWidth = window.getComputedStyle(buttonRef.current).borderWidth;
      setBorderSize(initialBorderWidth); // Set the initial border size
    }
  }, []);

  return (
    <div>
      <button
        ref={buttonRef} // Attach ref to the button
        dir="rtl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-2 text-base font-bold px-4 py-2 rounded-full transition-all"
        style={{
          backgroundColor: isHovered ? hoverBgColor || bgColor : bgColor,
          color: isHovered ? hoverTextColor || textColor : textColor,
          fontSize:fontSize,
          width:width,
          fontWeight:hoverFontWeight,
          border: `${isHovered ? hoverBorderWidth || borderWidth : borderSize} solid ${isHovered ? hoverBorderColor || borderColor : borderColor}`,
          borderWidth: isHovered ? hoverBorderWidth : borderSize, // Change border size on hover
          transform: isHovered ? `scale(${hoverSize})` : 'scale(1)', // Resize button on hover
        }}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
