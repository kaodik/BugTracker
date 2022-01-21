import React, { useState } from 'react';
import { getAccount } from '../redux/ducks/account';

export default function LoginForm({ closeReg }: any) {
  const [valColor, setValColor] = useState({
    user: 'bg-blue-300',
    pass: 'bg-blue-300',
    email: 'bg-blue-300',
    fname: 'bg-blue-300',
    lname: 'bg-blue-300',
    org: 'bg-blue-300',
  });
  const [account, setAccount] = useState({
    username: '',
    password: '',
    email: '',
    fname: '',
    lname: '',
    privilege: 'user',
    org: 'Testorg',
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
    let minNumChar = 6;
    let maxNumChar = 16;
    let regExpressPassword =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let regExpressUsername = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let mailformat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    setValColor({
      user: 'bg-blue-300',
      pass: 'bg-blue-300',
      email: 'bg-blue-300',
      fname: 'bg-blue-300',
      lname: 'bg-blue-300',
      org: 'bg-blue-300',
    });

    if (account.password === '' || account.username === '') {
      setValColor({
        user: 'bg-rose-300',
        pass: 'bg-rose-300',
        email: 'bg-rose-300',
        fname: 'bg-rose-300',
        lname: 'bg-rose-300',
        org: 'bg-blue-300',
      });
      alert("User and password can't be blank");
    } else if (
      account.password.length < minNumChar ||
      account.password.length > maxNumChar
    ) {
      setValColor({
        user: 'bg-blue-300',
        pass: 'bg-rose-300',
        email: 'bg-blue-300',
        fname: 'bg-blue-300',
        lname: 'bg-blue-300',
        org: 'bg-blue-300',
      });
      alert(
        'Password must be between 6 and 16 characters with at lest one number and one special character'
      );
    } else if (!regExpressPassword.test(account.password)) {
      setValColor({
        user: 'bg-blue-300',
        pass: 'bg-rose-300',
        email: 'bg-blue-300',
        fname: 'bg-blue-300',
        lname: 'bg-blue-300',
        org: 'bg-blue-300',
      });
      alert(
        'Password must include at lest one number and one special character'
      );
    } else if (regExpressUsername.test(account.username)) {
      setValColor({
        user: 'bg-rose-300',
        pass: 'bg-blue-300',
        email: 'bg-blue-300',
        fname: 'bg-blue-300',
        lname: 'bg-blue-300',
        org: 'bg-blue-300',
      });
      alert('Username must not have special characters');
    } else if (!mailformat.test(account.email)) {
      setValColor({
        user: 'bg-blue-300',
        pass: 'bg-blue-300',
        email: 'bg-rose-300',
        fname: 'bg-blue-300',
        lname: 'bg-blue-300',
        org: 'bg-blue-300',
      });
      alert('Email is required in following format email@mail.com');
    } else if (account.fname === '' || account.lname === '') {
      setValColor({
        user: 'bg-blue-300',
        pass: 'bg-blue-300',
        email: 'bg-blue-300',
        fname: 'bg-rose-300',
        lname: 'bg-rose-300',
        org: 'bg-blue-300',
      });
      alert('First name and Last name must be filled');
    } else {
      try {
        const body = account;
        //proxy is only use in development so it will be ignored in production
        //so if there is no http://locolhost:5000 then by default it is going to use heroku domain
        //remember this heroku app is just our server serving the build static content and also
        //holding the restful api.

        //https://pern-todo-app-demo.herokuapp.com/todos
        const response = await fetch('/account', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        // window.location.reload();
        alert('Registration was Successful');
        console.log(response);
      } catch (err) {
        console.error(err.message);
      }
      // dispatch(getAccount());
      // console.log(bugs);
    }
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
            placeholder='*Username'
            className={`placeholder-blue-600 rounded-lg pl-24 w-11/12 shadow-inner shadow-black ${valColor.user} focus:outline-none focus:ring focus:ring-transparent`}
            onChange={handleEventChange}
          />
          <input
            name='password'
            type='text'
            placeholder='*Password'
            className={`placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black ${valColor.pass} focus:outline-none focus:ring focus:ring-transparent`}
            onChange={handleEventChange}
          />
          <input
            name='email'
            type='text'
            placeholder='*Email'
            className={`placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black ${valColor.email} focus:outline-none focus:ring focus:ring-transparent`}
            onChange={handleEventChange}
          />
          <input
            name='fname'
            type='text'
            placeholder='*First Name'
            className={`placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black ${valColor.fname} focus:outline-none focus:ring focus:ring-transparent`}
            onChange={handleEventChange}
          />
          <input
            name='lname'
            type='text'
            placeholder='*Last Name'
            className={`placeholder-blue-600 rounded-lg pl-24  w-11/12 shadow-inner shadow-black ${valColor.lname} focus:outline-none focus:ring focus:ring-transparent`}
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
