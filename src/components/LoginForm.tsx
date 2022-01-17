import React from 'react';

export default function LoginForm() {
  return (
    <div className='ml-96 w-96 rounded-2xl shadow-lg shadow-blue-800'>
      <form
        action=''
        className='w-96  text-center rounded-xl p-3 flex flex-col  bg-transparent shadow-inner shadow-blue-300'
      >
        <span className='text-blue-600 pb-2'>Login Form</span>
        <div className='space-y-2'>
          <input
            type='text'
            placeholder='Username'
            className='placeholder-blue-600 rounded-lg text-center w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent  '
          />
          <input
            type='text'
            placeholder='Password'
            className='placeholder-blue-600 rounded-lg text-center  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
          />
        </div>
        <div className='p-4 flex flex-col'>
          <a
            href='#'
            className='text-base text-left focus:outline-none focus:ring focus:ring-transparent'
          >
            Forgot Password
          </a>
          <a
            href='#'
            className='text-base text-left focus:outline-none focus:ring focus:ring-transparent'
          >
            Registration
          </a>
        </div>
        <button className=' focus:outline-none focus:ring focus:ring-transparent rounded-2xl text-base m-auto hover:shadow-blue-600 w-4/12 shadow-inner shadow-blue-400 bg-blue-500 p-2'>
          Submit
        </button>
      </form>
    </div>
  );
}
