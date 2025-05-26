import React, { useState } from 'react';

const ShieldIcon = ({
  icon: Icon,
  imgSrc,
  bgColor = '#0066cc',
  iconColor = 'white',
  wsize = 80,
  hsize = 80,
  hoverIconColor,
  hoverScale = 1.1,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const wsizeValue = typeof wsize === 'number' ? `${wsize}px` : wsize;
  const hsizeValue = typeof hsize === 'number' ? `${hsize}px` : hsize;
  const iconSizeValue = `calc(${Math.min(wsize, hsize)}px / 2.5)`;

  const shieldMask = encodeURIComponent(`
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 0L0 8v24c0 18.4 14.4 31.7 32 32 17.6-.3 32-13.6 32-32V8L32 0z"/>
    </svg>
  `);

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: wsizeValue,
        height: hsizeValue,
        transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
        cursor: 'pointer',
        WebkitMaskImage: `url("data:image/svg+xml,${shieldMask}")`,
        WebkitMaskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskImage: `url("data:image/svg+xml,${shieldMask}")`,
        maskSize: '100% 100%',
        maskRepeat: 'no-repeat',
        backgroundImage: imgSrc ? `url(${imgSrc})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: imgSrc ? undefined : bgColor,
      }}
    >
      {Icon && (
        <Icon
          className="z-10 transition-all duration-300"
          style={{
            color: isHovered ? hoverIconColor || iconColor : iconColor,
            width: iconSizeValue,
            height: iconSizeValue,
          }}
        />
      )}
    </div>
  );
};

export default ShieldIcon;
