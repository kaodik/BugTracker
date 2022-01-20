import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProject } from '../redux/ducks/project';

export default function ProjectModal({ closeModal }: any) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  function handleEventChange(event: any) {
    // const name = event.target.value;
    console.log(event.target.value);
    setName(event.target.value);
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
    dispatch(getProject());
  };

  return (
    <div className='w-[102%] h-[100%] bg-blue-900 absolute -translate-x-64 -translate-y-[3rem] flex justify-center items-center'>
      <div className='w-[500px] h-[300px] rounded-xl bg-blue-500  shadow-lg shadow-slate-900 flex flex-col p-6'>
        <button
          onClick={() => closeModal(false)}
          className='bg-rose-400 rounded-md w-14 text-2xl text-gray-900 font-bold ml-96'
        >
          X
        </button>
        <div>
          <div className='pt-9 pb-3'>Bug Form</div>
          <form action='' onSubmit={handleFormSubmission}>
            <div className='pb-5'>
              <label htmlFor=''>Name: </label>
              <input
                type='text'
                className='rounded-md'
                onChange={handleEventChange}
                value={name}
              />
            </div>

            <div className='pl-3 pt-5 text-center space-x-10 text-black'>
              <button className='bg-amber-400 font-bold text-2xl rounded-md pl-2 pr-2'>
                Cancel
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
