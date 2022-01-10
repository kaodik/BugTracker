import React from 'react';

export default function ProjectModal({ closeModal }: any) {
  return (
    <div className='w-[99%] h-[90%] bg-blue-200 absolute -translate-x-64 -translate-y-56 flex justify-center items-center'>
      <div className='w-[500px] h-[500px] rounded-xl bg-blue-500  shadow-lg shadow-slate-900 flex flex-col p-6'>
        <button
          onClick={() => closeModal(false)}
          className='bg-rose-400 rounded-md text-white w-14 text-2xl text-gray-900 font-bold ml-96'
        >
          X
        </button>
        <div>
          <div className='pt-9 pb-3'>Bug Form</div>
          <form action=''>
            <div className='pb-5'>
              <label htmlFor=''>Name: </label>
              <input type='text' className='rounded-md' />
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Assignee:
              </label>
              <select
                name=''
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                <option value='All' label='All'></option>
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
                name=''
                id=''
                placeholder='All'
                className='text-blue-500 bg-blue-200 rounded-lg'
              >
                <option value='Open' label='Open'></option>
                <option value='Inprogress' label='Inprogress'></option>
              </select>
            </div>
            <div className='pb-5'>
              <label className='pr-3' htmlFor=''>
                Priority:{' '}
              </label>
              <select
                name=''
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
                Due Date
              </label>
              <input type='date' className='rounded-md text-center' />
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
