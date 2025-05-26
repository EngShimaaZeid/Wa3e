import React, { useState } from 'react';
import MenuButton from '../../UI/MenuButton';
import { HiMenu, HiX } from 'react-icons/hi';

const buttonData = [
  { title: 'أطفال', hoverColor: 'bg-lightgreen' },
  { title: 'شباب', hoverColor: 'bg-purple' },
  { title: 'المعلمين', hoverColor: 'bg-shineyellow' },
  { title: 'آباء ووصاه', hoverColor: 'bg-red' },
  { title: 'كبار السن', hoverColor: 'bg-darkgreen' },
  { title: 'سيدات', hoverColor: 'bg-darkred' },
];

const Lowmenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const reversedButtons = [...buttonData].reverse();

  const handleClick = (title) => {
    console.log(`Button "${title}" clicked`);
    setMenuOpen(false); // Close mobile menu after click
  };

  return (
    <div className="relative bg-lightmint rtl">
      {/* Desktop menu (hidden on small screens) */}
      <div className="hidden sm:flex justify-center items-center gap-0 z-20">
        {reversedButtons.map((btn, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-y-125 duration-200"
          >
            <MenuButton
              title={btn.title}
              hoverBgColor={btn.hoverColor}
              onClick={() => handleClick(btn.title)}
            />
          </div>
        ))}
      </div>

      {/* Mobile toggle button (hidden on larger screens) */}
      <div className="flex sm:hidden justify-between items-center p-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-primaryBlue"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile vertical menu (only visible when menuOpen is true) */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-2 px-4 pb-4 border-t border-gray-300">
          {reversedButtons.map((btn, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 duration-200"
            >
              <MenuButton
                title={btn.title}
                hoverBgColor={btn.hoverColor}
                onClick={() => handleClick(btn.title)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Lowmenu;
