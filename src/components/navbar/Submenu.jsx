import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll, } from 'react-scroll'

export default class Submenu extends React.Component{
    render() {
        return(
            <div class="bg-gray-200 sticky top-0">
                <div class="max-w-screen-xl px-4 py-1 mx-auto">
                    <div class="flex items-center">
                        <ul class="flex flex-row font-medium mt-0 space-x-1 rtl:space-x-reverse text-xl ">
                            <li>
                                <a href="#" class="text-gray-900 hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Company</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Team</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 hover:underline">Features</a>
                            </li>
                        </ul>

                        
                    </div>
                </div>
            </div>    
        );    
    }
};