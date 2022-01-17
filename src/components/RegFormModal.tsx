import React, { useState } from 'react';

export default function LoginForm({ closeReg }: any) {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    fname: '',
    lname: '',
    privilege: 'user',
    org: 'N/A',
  });
  return (
    <div className='mt-8 w-96 rounded-2xl shadow-lg shadow-blue-800'>
      <form
        action=''
        className='w-96  text-center rounded-xl p-3 flex flex-col  bg-transparent shadow-inner shadow-blue-300'
      >
        <span className='text-blue-600 pb-2'>Registration Form</span>
        <div className='space-y-2'>
          <input
            type='text'
            placeholder='Username'
            className='placeholder-blue-600 rounded-lg pl-24 w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent  '
          />
          <input
            type='text'
            placeholder='Password'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
          />
          <input
            type='text'
            placeholder='Email'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
          />
          <input
            type='text'
            placeholder='First Name'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
          />
          <input
            type='text'
            placeholder='Organization'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
          />
        </div>
        <div className='pt-4 space-x-20'>
          <button
            className=' focus:outline-none focus:ring focus:ring-transparent rounded-2xl text-base m-auto hover:shadow-rose-600 w-4/12 shadow-inner shadow-rose-400 bg-rose-500 p-2'
            onClick={() => closeReg(false)}
          >
            Cancel
          </button>
          <button className=' focus:outline-none focus:ring focus:ring-transparent rounded-2xl text-base m-auto hover:shadow-blue-600 w-4/12 shadow-inner shadow-blue-400 bg-blue-500 p-2'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
