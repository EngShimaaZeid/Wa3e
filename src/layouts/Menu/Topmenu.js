import React from 'react';

const Topmenu = () => {
  return (
    <nav
      dir="rtl"
      className="bg-primaryBlue w-full z-20 top-0 start-0 rounded-b-3xl h-12"
    >
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto py-1 px-14">
        <div className="w-full md:flex md:w-auto" id="navbar">
        <ul className="flex flex-row flex-nowrap items-center font-light text-sm md:text-xs lg:text-base space-x-[6px] sm:space-x-2 md:space-x-3 rtl:space-x-reverse overflow-hidden">
        <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-mint hover:underline transition-colors"
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-mint hover:underline transition-colors"
              >
                فعاليات
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-mint hover:underline transition-colors"
              >
                مواضيع هامه
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white hover:text-mint hover:underline transition-colors"
              >
                 مصادر المعرفه والدعم
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topmenu;
