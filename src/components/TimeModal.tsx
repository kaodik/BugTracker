import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { getTime } from '../redux/ducks/time';

export default function ProjectModal({ closeModal }: any) {
  const dispatch = useDispatch();

  const account = useSelector((state: RootState) => state.account.account);
  const currentUser = account.map((bname: any) => bname.account_id);
  console.log(account);
  const bug = useSelector((state: RootState) => state.bug.bug);
  const bugNameList = bug.filter(
    (b: { assignee: string }) => b.assignee === 'Steven Trumblay'
  );

  const [time, setTime] = useState({
    bugname: bug ? bugNameList[0].subject : 'None',
    startdate: 'None',
    starttime: 'None',
    enddate: 'None',
    endtime: 'None',
    user_id: currentUser[0],
  });
  function handleEventChange(event: any) {
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
            user_id: prevValue.user_id,
          };
        case 'startdate':
          return {
            bugname: prevValue.bugname,
            startdate: value,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
            user_id: prevValue.user_id,
          };
        case 'starttime':
          return {
            bugname: prevValue.bugname,
            startdate: prevValue.startdate,
            starttime: value,
            enddate: prevValue.enddate,
            endtime: prevValue.endtime,
            user_id: prevValue.user_id,
          };
        case 'enddate':
          return {
            bugname: prevValue.bugname,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: value,
            endtime: prevValue.endtime,
            user_id: prevValue.user_id,
          };
        case 'endtime':
          return {
            bugname: prevValue.bugname,
            startdate: prevValue.startdate,
            starttime: prevValue.starttime,
            enddate: prevValue.enddate,
            endtime: value,
            user_id: prevValue.user_id,
          };
        default:
          break;
      }
    });
  }
  const handleFormSubmission = async (e: any) => {
    e.preventDefault(); // this line prevents refreashing the page before all actions are complete
    try {
      const body = time;
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://locolhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also
      //holding the restful api.

      //https://pern-todo-app-demo.herokuapp.com/todos
      const response = await fetch('/time', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location.reload();
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    dispatch(getTime());
  };

  return (
    <div className='w-[102%] h-[100%] bg-blue-200 absolute -translate-x-64 -translate-y-[2.5rem] flex justify-center items-center text-blue-200'>
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
                name='bugname'
                onChange={handleEventChange}
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                {bug
                  ? bugNameList.map((bname: any) => (
                      <option
                        value={bname.subject}
                        label={bname.subject}
                      ></option>
                    ))
                  : 'loading...'}
                <option value='High' label='High'></option>
                <option value='Medium' label='Medium'></option>
              </select>
            </div>
            <div className='pb-2'>
              <label htmlFor=''>Start Date: </label>
              <input
                name='startdate'
                type='date'
                className='rounded-md'
                onChange={handleEventChange}
              />
            </div>
            <div className='pb-2'>
              <label htmlFor=''>Start Time: </label>
              <input
                name='starttime'
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
                name='enddate'
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
                name='endtime'
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
