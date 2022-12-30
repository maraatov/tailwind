import React from 'react';
import ReactLogo from '../assets/ReactLogo.png'

const Analytics = () => {
    return (<div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[400px] mx-auto my-4 mx-25' src={ReactLogo} alt='/'/>
            <div className='flex flex-col justify-center mr-15'>
                <p className='text-[#00df9a] font-bold'>Краткое объяснение</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Что такое фронтенд-разработка?</h1>
                <p className='mt-2'>Фронтенд веб-сайта — это все, что пользователь видит и с чем может взаимодействовать при помощи
                    браузера. Создание этой визуальной части называется фронтенд-разработкой. Дизайнеров, создающих
                    пользовательские интерфейсы, тоже можно в какой-то смысле назвать фронтенд-разработчиками, потому
                    что они совместно работают над этой же частью проекта.</p>
                <button
                    className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-4 mt-8 hover:bg-[#00df9a] hover:text-white transition'>Отправить
                    сообщение
                </button>
            </div>
        </div>
    </div>);
};

export default Analytics;