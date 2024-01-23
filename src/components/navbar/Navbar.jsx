import React, {useState} from 'react';
import Submenu from './Submenu';
import { Link, animateScroll as scroll, } from 'react-scroll'

const Navbar = () => {
  return (
   
<header class="flex flex-col">
<div class="bg-white border-gray-400">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./TRE_Logo.png" class="h-8" alt="Flowbite Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap">Portal de Compras</span>
        </a>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" class="text-sm  text-gray-500 hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm  text-blue-600  hover:underline">Login</a>
        </div>
    </div>
</div>
<Submenu/>
</header>
  );
};

export default Navbar;
