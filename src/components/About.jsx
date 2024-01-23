import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full mt-32 mb-16'>
        <div className='max-w-full mx-auto'>
            <div className='grid md:grid-cols-3 text-center w-full'>
                {/* Card 1 */}
                <div className="shadow-xl items-center" >
                    <div class="bg-green-700 px-16 py-14">
                        <div class="flex justify-center">
                        {/*<div class="rounded-full bg-green-200 p-6">*/}
                            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-200 p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-20 w-20 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                        {/*</div>*/}
                        </div>
                        <h3 class="my-4 text-center text-3xl font-semibold text-gray-50">Congratuation!!!</h3>
                        <p class="w-full text-center font-normal text-xl text-gray-100">Your order have been taken and is being attended to</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="shadow-xl items-center" >
                    <div class="bg-green-600 px-16 py-14">
                        <div class="flex justify-center">
                        {/*<div class="rounded-full bg-green-200 p-6">*/}
                            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-200 p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-20 w-20 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                        {/*</div>*/}
                        </div>
                        <h3 class="my-4 text-center text-3xl font-semibold text-gray-50">Congratuation!!!</h3>
                        <p class="w-full text-center font-normal text-xl text-gray-100">Your order have been taken and is being attended to</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="shadow-xl items-center" >
                    <div class="bg-green-500 px-16 py-14">
                        <div class="flex justify-center">
                        {/*<div class="rounded-full bg-green-200 p-6">*/}
                            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-200 p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-20 w-20 text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                        {/*</div>*/}
                        </div>
                        <h3 class="my-4 text-center text-3xl font-semibold text-gray-50">Congratuation!!!</h3>
                        <p class="w-full text-center font-normal text-xl text-gray-100">Your order have been taken and is being attended to</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About