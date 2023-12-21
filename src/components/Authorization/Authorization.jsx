import React from 'react';


function Authorization() {
  return (
    <div className='bg-[#dbe9ff] h-full'>
        <div className='max-w-[650px] my-auto mx-auto px-7 py-20 font-Inter flex flex-col gap-7'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-5xl'>Sign In</h1>
                <button className='border-black border-2 rounded py-1 px-7 font-medium hover:shadow-lg duration-300 active:bg-slate-300'>Регистрация</button>
            </div>
            <div className='w-full flex items-center border-2 border-black rounded'>
                <img className=' bg-pink-300 h-full max-w-[90px] border-r-2 border-black object-cover' src="images/logo.png" alt="" />
                <input className='p-5 w-full' type="text" placeholder='Ваш логин/Электронная почта'/>
            </div>
            <div className='w-full flex items-center border-2 border-black rounded'>
                <img className=' bg-pink-300 h-full max-w-[90px] border-r-2 border-black object-cover' src="images/logo.png" alt="" />
                <input className='p-5 w-full' type="text" placeholder='Ваш пароль'/>
            </div>
            <button className=' bg-yellow-200 rounded text-center py-3 px-5 sm:text-2xl md:text-3xl lg:text-4xl hover:shadow-lg duration-300 active:bg-yellow-100'>Вход</button>   
        </div>
    </div>
  )
}

export default Authorization