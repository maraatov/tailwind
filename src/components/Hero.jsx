import React from 'react';
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>БУДУЩЕЕ В НАШИХ РУКАХ</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-5'>Я МАРАТ АЛДИЯР</h1>
                <div className='flex justify-center items-center mb-7'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Создаю сайты на</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl4 pl-2 text-[#00df9a]'
                           strings={['MATERIAL UI', 'TAILWIND', 'SCSS']} typeSpeed={80} backSpeed={100} loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Молодой, энергичный, заряженный! Поехали вместе работать</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-4 text-black mt-8'>Давайте начнем</button>
            </div>
        </div>
    );
};

export default Hero;