import React from 'react';
import logoImg from '../../assets/images/logo.png';
import Search from '../../components/Search';
import Sign from '../../components/Sign';

const Middlemenu = () => {
  return (
    <nav
      dir="rtl"
      className="bg-white w-full z-20 top-0 start-0 rounded-b-3xl px-12"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start">
          <img src={logoImg} alt="Logo" className="h-20 py-1 pr-2 pl-22 rounded-lg" />
        </div>

        {/* Medium: stacked Search + Sign in row, Small: stacked vertically, Large: inline */}
        <div className="flex flex-col md:flex-row  sm:gap-y-24 lg:flex-row pl-12 lg:pr-8 w-full md:justify-between lg:justify-end items-center gap-4">
          <div className="w-full md:w-auto md:justify-center">
            <Search />
          </div>
          <div className="w-full flex justify-center md:justify-center md:w-auto">
            <Sign />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Middlemenu;
