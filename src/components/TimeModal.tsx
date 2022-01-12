import React, { useState } from 'react';

export default function ProjectModal({ closeModal }: any) {
  const [time, setTime] = useState({
    bugname: 'testName',
    startdate: 'test startDate',
    starttime: 'test startTime',
    enddate: 'test enddate',
    endtime: 'test endtime',
  });
  function handleEventChange(event: any) {
    // const name = event.target.value;
    const { value, name } = event.target;
    setTime((prevValue) => {
      switch (name) {
        case 'bugname':
          return {
            bugname: value,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
          };
        case 'startdate':
          return {
            bugname: value,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
          };
        case 'starttime':
          return {
            bugname: value,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
          };
        case 'enddate':
          return {
            bugname: value,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
          };
        case 'endtime':
          return {
            bugname: value,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
          };
        default:
          break;
      }
    });
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
      window.location.reload();
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='w-[99%] h-[90%] bg-blue-200 absolute -translate-x-64 flex justify-center items-center text-blue-200'>
      <div className='w-[500px] rounded-xl bg-blue-500  shadow-lg shadow-slate-900 flex flex-col p-6'>
        <button
          onClick={() => closeModal(false)}
          className='bg-rose-400 rounded-md w-14 text-2xl text-gray-900 font-bold ml-96'
        >
          X
        </button>
        <div>
          <div className='pt-9 pb-3'>TimeSheet Form</div>
          <form action='' onSubmit={handleFormSubmission}>
            <div className='pb-2'>
              <label htmlFor=''>Bug Name: </label>
              <select
                name='BugName'
                onChange={handleEventChange}
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                {/* this spot needs to map the options from the bug data. */}
                <option value='High' label='High'></option>
                <option value='Medium' label='Medium'></option>
              </select>
            </div>
            <div className='pb-2'>
              <label htmlFor=''>Start Date: </label>
              <input
                name='startDate'
                type='date'
                className='rounded-md'
                onChange={handleEventChange}
              />
            </div>
            <div className='pb-2'>
              <label htmlFor=''>Start Time: </label>
              <input
                name='startTime'
                type='time'
                className='rounded-md'
                onChange={handleEventChange}
              />
            </div>
            <div className='pb-2'>
              <label htmlFor='' className='pr-6'>
                End Date:
              </label>
              <input
                name='endDate'
                type='date'
                className='rounded-md'
                onChange={handleEventChange}
              />
            </div>
            <div className='pb-2'>
              <label htmlFor='' className='pr-5'>
                End Time:
              </label>
              <input
                name='endTime'
                type='time'
                className='rounded-md'
                onChange={handleEventChange}
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
