import React from 'react'
import ShieldIcon from "../UI/ShieldIcon"
import {  FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div class="lg:pr-80 md:pr-32 sm:pl-12">
      <form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div class="relative">
        
        <input type="search" id="default-search" class="block w-60 h-10 p-4 ps-10  text-sm   border-primaryBlue border-2 focus:border-primaryBlue focus:outline-none rounded-full bg-gray-50    " placeholder="أنا أحتاج " required />
        <div class="absolute inset-y-0 start-0 flex items-center px-48 pointer-events-none">
            <ShieldIcon icon={ FaSearch} bgColor="#165eb2" textColor="text-white" wsize={50} hsize={80} />
           
        </div>
    </div>
</form>

    </div>
  )
}

export default Search

