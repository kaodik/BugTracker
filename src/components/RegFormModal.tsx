import React, { useState } from 'react';
import { getAccount } from '../redux/ducks/account';

export default function LoginForm({ closeReg }: any) {
  const [account, setAccount] = useState({
    username: '',
    password: '',
    email: '',
    fname: '',
    lname: '',
    privilege: 'user',
    org: 'N/A',
  });
  function handleEventChange(event: any) {
    const { value, name } = event.target;
    // console.log(bug);
    console.log(value);
    console.log(name);
    setAccount((prevValue) => {
      switch (name) {
        case 'username':
          return {
            username: value,
            password: prevValue.password,
            email: prevValue.email,
            fname: prevValue.fname,
            lname: prevValue.lname,
            privilege: prevValue.privilege,
            org: prevValue.org,
          };
        case 'password':
          return {
            username: prevValue.username,
            password: value,
            email: prevValue.email,
            fname: prevValue.fname,
            lname: prevValue.lname,
            privilege: prevValue.privilege,
            org: prevValue.org,
          };
        case 'email':
          return {
            username: prevValue.username,
            password: prevValue.password,
            email: value,
            fname: prevValue.fname,
            lname: prevValue.lname,
            privilege: prevValue.privilege,
            org: prevValue.org,
          };
        case 'fname':
          return {
            username: prevValue.username,
            password: prevValue.password,
            email: prevValue.email,
            fname: value,
            lname: prevValue.lname,
            privilege: prevValue.privilege,
            org: prevValue.org,
          };
        case 'lname':
          return {
            username: prevValue.username,
            password: prevValue.password,
            email: prevValue.email,
            fname: prevValue.fname,
            lname: value,
            privilege: prevValue.privilege,
            org: prevValue.org,
          };
        case 'privilege':
          return {
            username: prevValue.username,
            password: prevValue.password,
            email: prevValue.email,
            fname: prevValue.fname,
            lname: prevValue.lname,
            privilege: value,
            org: prevValue.org,
          };
        case 'org':
          return {
            username: prevValue.username,
            password: prevValue.password,
            email: prevValue.email,
            fname: prevValue.fname,
            lname: prevValue.lname,
            privilege: prevValue.privilege,
            org: value,
          };

        default:
          break;
      }
    });
  }
  const handleFormSubmission = async (e: any) => {
    e.preventDefault(); // this line prevents refreashing the page before all actions are complete

    try {
      const body = account;
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://locolhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also
      //holding the restful api.

      //https://pern-todo-app-demo.herokuapp.com/todos
      const response = await fetch('http://localhost:5000/account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location.reload();
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    // dispatch(getAccount());
    // console.log(bugs);
  };
  return (
    <div className='mt-8 w-96 rounded-2xl shadow-lg shadow-blue-800'>
      <form
        action=''
        className='w-96  text-center rounded-xl p-3 flex flex-col  bg-transparent shadow-inner shadow-blue-300'
      >
        <span className='text-blue-600 pb-2'>Registration Form</span>
        <div className='space-y-2'>
          <input
            name='username'
            type='text'
            placeholder='Username'
            className='placeholder-blue-600 rounded-lg pl-24 w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent  '
            onChange={handleEventChange}
          />
          <input
            name='password'
            type='text'
            placeholder='Password'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
            onChange={handleEventChange}
          />
          <input
            name='email'
            type='text'
            placeholder='Email'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
            onChange={handleEventChange}
          />
          <input
            name='fname'
            type='text'
            placeholder='First Name'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
            onChange={handleEventChange}
          />
          <input
            name='lname'
            type='text'
            placeholder='Last Name'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
            onChange={handleEventChange}
          />
          <input
            name='org'
            type='text'
            placeholder='Organization'
            className='placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
            onChange={handleEventChange}
          />
        </div>
        <div className='pt-4 space-x-20'>
          <button
            className=' focus:outline-none focus:ring focus:ring-transparent rounded-2xl text-base m-auto hover:shadow-rose-600 w-4/12 shadow-inner shadow-rose-400 bg-rose-500 p-2'
            onClick={(e) => {
              e.preventDefault();
              closeReg(false);
            }}
          >
            Cancel
          </button>
          <button
            className=' focus:outline-none focus:ring focus:ring-transparent rounded-2xl text-base m-auto hover:shadow-blue-600 w-4/12 shadow-inner shadow-blue-400 bg-blue-500 p-2'
            onClick={handleFormSubmission}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
function dispatch(arg0: { type: string }) {
  throw new Error('Function not implemented.');
}
