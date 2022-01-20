import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import login from '../redux/ducks/login';

export default function Account() {
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  const [read, setRead] = useState(true);
  const loginUser = useSelector((state: RootState) => state.account.account);
  console.log(loginUser[0]);
  const [userAccount, setUserAccount] = useState({
    username: loginUser[0].username,
    password: loginUser[0].password,
    org: loginUser[0].org,
    email: loginUser[0].email,
  });
  function handleEventChange(event: any) {
    const { value, name } = event.target;
    // console.log(bug);
    // console.log(value);
    // console.log(name);
    setUserAccount((prevValue) => {
      switch (name) {
        case 'username':
          return {
            username: value,
            password: prevValue.password,
            org: prevValue.org,
            email: prevValue.email,
          };
        case 'password':
          return {
            username: prevValue.username,
            password: value,
            org: prevValue.org,
            email: prevValue.email,
          };
        case 'org':
          return {
            username: prevValue.username,
            password: prevValue.password,
            org: value,
            email: prevValue.email,
          };
        case 'email':
          return {
            username: prevValue.username,
            password: prevValue.password,
            org: prevValue.org,
            email: value,
          };
        default:
          break;
      }
    });
  }
  function handleChangeBtn() {
    setRead(!read);
  }
  const handleFormSubmission = async (e: any) => {
    e.preventDefault(); // this line prevents refreashing the page before all actions are complete
    try {
      const body = { name };
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://locolhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also
      //holding the restful api.

      //https://pern-todo-app-demo.herokuapp.com/todos
      const response = await fetch('http://localhost:5000/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location.reload();
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    // dispatch(getProject());
  };
  return (
    <div className='w-[99%] h-[90%] bg-blue-200 absolute -translate-x-64 flex justify-center items-center'>
      <div className='w-[500px]  -translate-y-28 rounded-xl bg-blue-500  shadow-lg shadow-slate-900 flex flex-col p-6'>
        <div>
          <div className='pt-3 pb-9 text-center text-4xl'>Account Settings</div>
          <form action='' onSubmit={handleFormSubmission}>
            <div className='pb-5'>
              <label htmlFor=''>User Name: </label>

              <div className='text-right'>
                <input
                  name='username'
                  type='text'
                  value={userAccount.username}
                  className={`rounded-md w-8/12 ${
                    read ? 'bg-slate-400' : null
                  }`}
                  onChange={handleEventChange}
                  readOnly={read}
                />
              </div>
            </div>
            <div className='pb-5'>
              <label htmlFor=''>Password: </label>
              <div className='text-right'>
                <input
                  name='password'
                  type='text'
                  value={userAccount.password}
                  className={`rounded-md w-8/12 ${
                    read ? 'bg-slate-400' : null
                  }`}
                  onChange={handleEventChange}
                  readOnly={read}
                />
              </div>
            </div>
            <div className='pb-5'>
              <label htmlFor=''>Organization: </label>
              <div className='text-right'>
                <input
                  name='org'
                  type='text'
                  value={userAccount.org}
                  className={`rounded-md w-8/12 ${
                    read ? 'bg-slate-400' : null
                  }`}
                  onChange={handleEventChange}
                  readOnly={read}
                />
              </div>
            </div>
            <div className='pb-5 '>
              <label htmlFor=''>Email: </label>
              <div className='text-right'>
                <input
                  name='email'
                  type='text'
                  value={userAccount.email}
                  className={`rounded-md w-8/12 ${
                    read ? 'bg-slate-400' : null
                  }`}
                  onChange={handleEventChange}
                  readOnly={read}
                />
              </div>
            </div>

            <div className='pl-3 pt-5 text-center space-x-10 text-black'>
              <button
                className='bg-amber-400 font-bold text-2xl rounded-md pl-2 pr-2'
                onClick={() => handleChangeBtn()}
              >
                Change
              </button>
              <button className='bg-emerald-400 font-bold text-2xl rounded-md pl-2 pr-2'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
