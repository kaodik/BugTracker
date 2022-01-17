import React, { useState } from 'react';
import RegFormModal from './RegFormModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function LoginForm() {
  const dispatch = useDispatch();
  const getAccounts = useSelector((state: RootState) => state.account.account);
  const [account, setAccount] = useState({
    username: 'kaoadmin',
    password: 'kaokaoson',
  });

  const [reg, setReg] = useState(false);
  function handleRegBtn() {
    setReg(!reg);
  }

  function handleEventChange(event: any) {
    const { value, name } = event.target;
    // console.log(bug);
    // console.log(value);
    // console.log(name);
    setAccount((prevValue) => {
      switch (name) {
        case 'username':
          return {
            username: value,
            password: prevValue.password,
          };
        case 'password':
          return {
            username: prevValue.username,
            password: value,
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
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location.reload();
      console.log(JSON.stringify(response));
    } catch (err) {
      console.log('user not found');
      console.error(err.message);
      if (!err?.response) {
      }
    }
    // dispatch(getAccount());
    // console.log(bugs);
  };
  return (
    <div className='ml-96 h-64 w-96 rounded-2xl shadow-lg shadow-blue-800'>
      <form
        action=''
        className='w-96 text-center rounded-xl p-3 flex flex-col  bg-transparent shadow-inner shadow-blue-300'
        onSubmit={handleFormSubmission}
      >
        <span className='text-blue-600 pb-2'>Login Form</span>
        <div className='space-y-2'>
          <input
            name='username'
            type='text'
            placeholder='Username'
            className='placeholder-blue-600 rounded-lg text-center w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent  '
            onChange={handleEventChange}
          />
          <input
            name='password'
            type='text'
            placeholder='Password'
            className='placeholder-blue-600 rounded-lg text-center  w-11/12 shadow-inner shadow-black bg-blue-300 focus:outline-none focus:ring focus:ring-transparent'
            onChange={handleEventChange}
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
            onClick={handleRegBtn}
          >
            Registration
          </a>
        </div>
        <button className=' focus:outline-none focus:ring focus:ring-transparent rounded-2xl text-base m-auto hover:shadow-blue-600 w-4/12 shadow-inner shadow-blue-400 bg-blue-500 p-2'>
          Submit
        </button>
      </form>
      {reg && <RegFormModal closeReg={setReg} />}
    </div>
  );
}
