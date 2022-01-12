import React, { useState } from 'react';
import TimeModal from './TimeModal';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function TimeSheet() {
  const time = useSelector((state: RootState) => state.time.time);

  const [openModal, setOpenModal] = useState(false);

  //Filters---------------------------------------------------------------
  const mon = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 0
  );
  const tue = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 1
  );
  const wen = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 2
  );
  const thur = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 3
  );
  const fri = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 4
  );
  const sat = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 5
  );
  const sun = time.filter(
    (day: { startdate: string }) => new Date(day.startdate).getDay() === 6
  );

  return (
    <div>
      {openModal && <TimeModal closeModal={setOpenModal} />}
      <div className=' w-[1400px] text-blue-200 rounded-2xl bg-blue-500'>
        <div className='flex flex-row pt-2 pl-2 '>
          <h2 className='text-lx pr-20'>TimeSheet</h2>

          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className='flex bg-blue-700 rounded-xl p-1'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 mr-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            Add Time
          </button>
        </div>
        <div className='flex flex-row text-center min-h-screen p-4 text-blue-700'>
          <div className='bg-blue-400 border-blue-500 border-r-2 w-52  rounded-l-xl'>
            <div className='bg-blue-300 rounded-tl-xl'>Sun</div>
            {time
              ? sun.map((sunData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {sunData.bugname}
                    <p className='text-sm'>Start Time: {sunData.starttime}</p>
                    <p className='text-sm'>Start End: {sunData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
          <div className='bg-blue-400 border-blue-500 border-r-2 w-52 '>
            <div className='bg-blue-300 '>Mon</div>
            {time
              ? mon.map((monData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {monData.bugname}
                    <p className='text-sm'>Start Time: {monData.starttime}</p>
                    <p className='text-sm'>Start End: {monData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
          <div className='bg-blue-400 border-blue-500 border-r-2 w-52 '>
            <div className='bg-blue-300 '>Tue</div>
            {time
              ? tue.map((tueData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {tueData.bugname}
                    <p className='text-sm'>Start Time: {tueData.starttime}</p>
                    <p className='text-sm'>Start End: {tueData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
          <div className='bg-blue-400 border-blue-500 border-r-2 w-52 '>
            <div className='bg-blue-300 '>Wen</div>
            {time
              ? wen.map((wenData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {wenData.bugname}
                    <p className='text-sm'>Start Time: {wenData.starttime}</p>
                    <p className='text-sm'>Start End: {wenData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
          <div className='bg-blue-400 border-blue-500 border-r-2 w-52 '>
            <div className='bg-blue-300 '>Thu</div>
            {time
              ? thur.map((thurData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {thurData.bugname}
                    <p className='text-sm'>Start Time: {thurData.starttime}</p>
                    <p className='text-sm'>Start End: {thurData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
          <div className='bg-blue-400 border-blue-500 border-r-2 w-52 '>
            <div className='bg-blue-300 '>Fri</div>
            {time
              ? fri.map((friData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {friData.bugname}
                    <p className='text-sm'>Start Time: {friData.starttime}</p>
                    <p className='text-sm'>Start End: {friData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
          <div className='bg-blue-400 border-blue-500 w-52 rounded-tr-xl rounded-r-xl'>
            <div className='bg-blue-300 rounded-tr-xl'>Sat</div>
            {time
              ? sat.map((satData: any) => (
                  <div className='rounded-xl h-20 bg-blue-200 m-2'>
                    {satData.bugname}
                    <p className='text-sm'>Start Time: {satData.starttime}</p>
                    <p className='text-sm'>Start End: {satData.endtime}</p>
                  </div>
                ))
              : 'loading...'}
          </div>
        </div>
      </div>
    </div>
  );
}
