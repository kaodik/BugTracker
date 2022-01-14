import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBug } from '../redux/ducks/bug';

export default function bugModal({ closeModal }: any) {
  const dispatch = useDispatch();
  const d = new Date();
  const [bug, setBug] = useState({
    subject: '',
    description: '',
    status: 'Open',
    category: 'Frontend',
    priority: 'High',
    assignee: 'N/A',
    createddate: ` ${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`,
    startdate: 'N/A',
    duedate: 'N/A',
  });
  function handleEventChange(event: any) {
    const { value, name } = event.target;
    // console.log(bug);
    // console.log(value);
    // console.log(name);
    setBug((prevValue) => {
      switch (name) {
        case 'subject':
          return {
            subject: value,
            description: prevValue.description,
            status: prevValue.status,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'description':
          return {
            subject: prevValue.subject,
            description: value,
            status: prevValue.status,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'status':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: value,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'category':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: prevValue.status,
            category: value,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'priority':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: prevValue.status,
            category: prevValue.category,
            priority: value,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'assignee':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: prevValue.status,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: value,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'createddate':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: prevValue.status,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: prevValue.duedate,
          };
        case 'startdate':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: prevValue.status,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: value,
            duedate: prevValue.duedate,
          };
        case 'duedate':
          return {
            subject: prevValue.subject,
            description: prevValue.description,
            status: prevValue.status,
            category: prevValue.category,
            priority: prevValue.priority,
            assignee: prevValue.assignee,
            createddate: prevValue.createddate,
            startdate: prevValue.startdate,
            duedate: value,
          };

        default:
          break;
      }
    });
  }
  const handleFormSubmission = async (e: any) => {
    e.preventDefault(); // this line prevents refreashing the page before all actions are complete

    try {
      const body = bug;
      //proxy is only use in development so it will be ignored in production
      //so if there is no http://locolhost:5000 then by default it is going to use heroku domain
      //remember this heroku app is just our server serving the build static content and also
      //holding the restful api.

      //https://pern-todo-app-demo.herokuapp.com/todos
      const response = await fetch('http://localhost:5000/bug', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      // window.location.reload();
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    dispatch(getBug());
    // console.log(bugs);
  };
  return (
    <div className='w-[99%] h-[90%] bg-blue-200 absolute -translate-x-64 -translate-y-56 flex justify-center items-center'>
      <div className='w-[500px]  rounded-xl bg-blue-500  shadow-lg shadow-slate-900 flex flex-col p-6'>
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
              <label htmlFor=''>Subject: </label>
              <input
                name='subject'
                onChange={handleEventChange}
                type='text'
                className='rounded-md'
              />
            </div>
            <div className='pb-5'>
              <label htmlFor=''>Description: </label>
              <input
                name='description'
                onChange={handleEventChange}
                type='text'
                className='rounded-md'
              />
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Assignee:
              </label>
              <select
                name='assignee'
                onChange={handleEventChange}
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                <option label='' value=''></option>
                <option
                  value='Steven Trumblay'
                  label='Steven Trumblay'
                ></option>
              </select>
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Status:
              </label>
              <select
                name='status'
                onChange={handleEventChange}
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                <option value='Open' label='Open'></option>
                <option value='Inprogress' label='Inprogress'></option>
                <option value='Close' label='Close'></option>
              </select>
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Priority:
              </label>
              <select
                name='priority'
                onChange={handleEventChange}
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                <option value='High' label='High'></option>
                <option value='Medium' label='Medium'></option>
              </select>
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Category:
              </label>
              <select
                name='category'
                onChange={handleEventChange}
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                <option value='Frontend' label='Frontend'></option>
                <option value='Backend' label='Backend'></option>
              </select>
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Due Date
              </label>
              <input
                name='duedate'
                onChange={handleEventChange}
                type='date'
                className='rounded-md text-center'
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
