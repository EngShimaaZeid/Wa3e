import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logoImg from '../../assets/images/logo.png';
import Search from '../../components/Search';
import Sign from '../../components/Sign';
import MenuButton from '../../UI/MenuButton';

// Button data for Lowmenu
const buttonData = [
  { title: 'أطفال', hoverColor: 'bg-lightgreen' },
  { title: 'شباب', hoverColor: 'bg-purple' },
  { title: 'المعلمين', hoverColor: 'bg-shineyellow' },
  { title: 'آباء ووصاه', hoverColor: 'bg-red' },
  { title: 'كبار السن', hoverColor: 'bg-darkgreen' },
  { title: 'سيدات', hoverColor: 'bg-darkred' },
];

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const reversedButtons = [...buttonData].reverse();

  const handleClick = (title) => {
    console.log(`Button "${title}" clicked`);
    setSelectedButton(title);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ======================== Topmenu ======================== */}
      <nav
        dir="rtl"
        className="bg-primaryBlue w-full z-20 top-0 start-0 rounded-b-3xl h-12 flex items-center justify-between px-4"
      >
        <ul className="flex flex-row flex-nowrap items-center lg:px-16 font-thin sm:text-[2px] md:text-sm lg:text-base space-x-[6px] sm:space-x-2 md:space-x-3 rtl:space-x-reverse overflow-hidden text-white">
          <li>
            <a href="#" className="block py-2 px-2 hover:text-mint hover:underline transition-colors sm:text-xss">من نحن</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-2 hover:text-mint hover:underline transition-colors">فعاليات</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-2 hover:text-mint hover:underline transition-colors">مواضيع هامه</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-2 hover:text-mint hover:underline transition-colors">مصادر المعرفه والدعم</a>
          </li>
        </ul>

        {/* Lowmenu mobile toggle icon in topmenu */}
        <div className="sm:hidden text-2xl text-white">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1"
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* ======================== Middlemenu ======================== */}
      <nav dir="rtl" className="bg-white w-full z-10 top-0 start-0 rounded-b-3xl px-12">
        <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src={logoImg} alt="Logo" className="h-20 py-1 pr-2 pl-22 rounded-lg" />
          </div>

          {/* Search + Sign */}
          <div className="flex flex-col md:flex-row lg:gap-xl-8  lg:flex-row pl-12 lg:pr-8 w-full md:justify-between lg:justify-end items-center   gap-8">
            <div className="w-full md:w-auto md:justify-center sm:gap-y-36">
              <Search />
            </div>
            <div className="w-full flex justify-center md:justify-center md:w-auto">
              <Sign />
            </div>
          </div>
        </div>
      </nav>

      {/* ======================== Lowmenu ======================== */}
      <div className="relative bg-lightmint rtl">
        {/* Desktop menu */}
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

        {/* Mobile vertical menu (visible when menuOpen is true) */}
        {menuOpen && (
          <div className="sm:hidden flex flex-col px-4 pb-4 border-t border-gray-300">
            {reversedButtons.map((btn, index) => (
              <button
                key={index}
                onClick={() => handleClick(btn.title)}
                className={`
                  w-full py-3 px-4 text-center text-sm font-medium rounded-md transition-colors duration-200
                  ${selectedButton === btn.title ? btn.hoverColor : 'bg-white'}
                  ${selectedButton === btn.title ? 'text-white' : 'text-gray-800'}
                  hover:opacity-90
                `}
              >
                {btn.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
