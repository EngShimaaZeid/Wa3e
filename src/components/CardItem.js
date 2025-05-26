import React from 'react';
import ShieldIcon from "../UI/ShieldIcon";

const CardItem = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
      {/* Text */}
      <div className="text-base font-thin underline text-primaryBlue text-center sm:text-right">
        لوريم ابسم
      </div>

      {/* Divider Line (only on larger screens) */}
      <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

      {/* Shield Icon */}
      <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mx-auto sm:mx-0">
        <ShieldIcon bgColor="white" textColor="text-white" wsize={80} hsize={80} />
      </div>
    </div>
  );
};

export default CardItem;
