import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';

const Support = () => {
  return (
  <div name='support' className='w-full'>
      <div className='w-full h-[600px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' alt="/" />
      </div>
      
      <div className='max-w-[1300px] mx-auto text-white relative'>
          <div className='py-12'>
              <h3 className='text-5xl font-bold py-6 text-left'>Conheça nosso Portal de compras</h3>
              <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-16 gap-y-16 px-4 sm:pt-20 text-black'>
            {/* Card de Planejamento de contrações */}
              <div className='bg-white rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-105'>
                  <div className='p-6'>
                      <PhoneIcon className='w-20 p-4 bg-green-600 text-white rounded-full mt-[-4.5rem]' />
                      <h3 className='font-bold text-2xl my-6'>Planejamento de Contratações</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              {/* Card de Licitações*/}
              <div className='bg-white rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-105'>
                  <div className='p-6'>
                      <PhoneIcon className='w-20 p-4 bg-green-600 text-white rounded-full mt-[-4.5rem]' />
                      <h3 className='font-bold text-2xl my-6'>Licitações</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              {/*Card de Manuais e normas*/}
              <div className='bg-white rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-105'>
                  <div className='p-6'>
                      <PhoneIcon className='w-20 p-4 bg-green-600 text-white rounded-full mt-[-4.5rem]' />
                      <h3 className='font-bold text-2xl my-6'>Manuais e Normas</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              {/*Card de Planejament de contrações*/}
              <div className='bg-white rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-105'>
                  <div className='p-6'>
                      <PhoneIcon className='w-20 p-4 bg-green-600 text-white rounded-full mt-[-4.5rem]' />
                      <h3 className='font-bold text-2xl my-6'>Planejamento de Contratações </h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              {/*Card de Planejament de contrações*/}
              <div className='bg-white rounded-xl shadow-2xl transition duration-300 ease-in-out hover:scale-105'>
                  <div className='p-6'>
                      <PhoneIcon className='w-20 p-4 bg-green-600 text-white rounded-full mt-[-4.5rem]' />
                      <h3 className='font-bold text-2xl my-6'>Planejamento de Contratações </h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
              {/*Card de Planejament de contrações*/}
              <div className='bg-white rounded-xl shadow-2xl transition durati on-300 ease-in-out hover:scale-105'>
                  <div className='p-6'>
                      <PhoneIcon className='w-20 p-4 bg-green-600 text-white rounded-full mt-[-4.5rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sistemas</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Support;
