import React from 'react';

const Send = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Знаете ли вы что такое React?</h1>
                    <p>Подпишись на мою рассылку, и будь в тренде</p>
                </div>
                <div className='my-4'>
                    <div>
                        <input type="email" placeholder='Отправить Email' className='p-3 flex w-full rounded-md text-black'/>
                        <button
                            className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6  mx-auto py-4 text-black mt-8'>Доверься
                            мне
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Send;