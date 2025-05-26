import  { useState } from 'react';
import { FaUsers} from 'react-icons/fa';

const ShieldCard = ({
  children,
  title,
  Icon,                         // Icon component passed as prop
  bgColor = '#ffffff',          // Always white background
  wsize = 200,
  hsize = 1200,                  // Reduced height
  borderColor = 'transparent',  // Default no border
  hoverBorderColor = '#165eb2',
  boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: wsize,
        height: hsize,
        cursor: 'pointer',
        filter: boxShadow ? `drop-shadow(${boxShadow})` : 'none',
      }}
    >
      <svg
        viewBox="0 0 64 64"
        className="absolute inset-0 w-full h-full transition-colors duration-300"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          fill: bgColor,
          stroke: isHovered ? hoverBorderColor : borderColor,
          strokeWidth: 1,
        }}
      >
        <path d="M32 0L0 8v24c0 18.4 14.4 31.7 32 32 17.6-.3 32-13.6 32-32V8L32 0z" />
      </svg>

      <div className="z-10 flex flex-col  justify-start  px-4 text-center  w-full">
        {title && <h3 className="text-base font-semibold mb-1">{title}</h3>}
        <div className="text-sm py-8 text-gray-500">{children}</div>
        <div className=" pl-16 pb-4 rounded-lg flex items-center ">
          < FaUsers  className="text-primaryBlue w-24 h-12 " />        </div>
      </div>
      
      
    </div>
  );
};

export default ShieldCard;
