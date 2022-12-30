import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Card = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt={'single'}/>
                    <h2 className='text-2xl font-bold text-center py-8'>Пользователь</h2>
                    <p className='text-center text-4xl font-bold'>$100</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>150 ГБ хранилища</p>
                        <p className='py-2 border-b mx-8'>Доступно для одного</p>
                        <p className='py-2 border-b mx-8'>Поднять до 2 ГБ</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 py-3'>Попробовать
                        бесплатно
                    </button>
                </div>
                <div className='w-full shadow-xl  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={Double} alt={'single'}/>
                    <h2 className='text-2xl font-bold text-center py-8'>Два пользователя</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>250 ГБ хранилища</p>
                        <p className='py-2 border-b mx-8'>Доступно для двух</p>
                        <p className='py-2 border-b mx-8'>Поднять до 5 ГБ</p>
                    </div>
                    <button
                        className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 py-3 text-white hover:bg-[#00df9a] hover:text-black'>Попробовать
                        бесплатно
                    </button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt={'single'}/>
                    <h2 className='text-2xl font-bold text-center py-8'>Три пользователя</h2>
                    <p className='text-center text-4xl font-bold'>$199</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>500 ГБ хранилища</p>
                        <p className='py-2 border-b mx-8'>Доступно для трех</p>
                        <p className='py-2 border-b mx-8'>Поднять до 7 ГБ</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 py-3'>Попробовать
                        бесплатно
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;