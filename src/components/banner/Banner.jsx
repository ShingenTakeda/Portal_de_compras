import React, {useState} from 'react';
import Cards from './Cards';

const Banner = ()=> {
    return(   
        <div id="div_geral">
            <div class="bg-cover bg-center h-auto text-white py-16 px-10 object-fill bg-green-600">
                   <div class="md:w-1/2">                    
                    
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6x">Seja Bem-vindo ao <span class="text-blue-600">Portal de Compras</span></h1>
                    <p class="text-lg font-normal text-gray-200 lg:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

                </div> 
            </div>
            <Cards/>
        </div>    
 );    
};

export default Banner