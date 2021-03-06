import React, { useState } from 'react';
import '../styles.css';
import { useDispatch } from 'react-redux';
import {
  account,
  bug,
  dashboard,
  report,
  timesheet,
} from '../redux/ducks/page';
import AlertDisplay from './AlertDisplay';

export const Sidemenu: React.FC = () => {
  const dispatch = useDispatch();
  const handlePage = (prop: any) => {
    dispatch(prop);
  };
  const [txFull, setTxFull] = useState('-translate-x-full');

  const [alertDisplay, setAlertDisplay] = useState<string>(
    '-translate-x-[33rem]'
  );
  function openSidebar(): void {
    if (txFull === '') {
      return setTxFull('-translate-x-full');
    } else {
      return setTxFull('');
    }
  }
  function openAlertDiplay(): void {
    if (alertDisplay === '-translate-x-[33rem]') {
      return setAlertDisplay('-translate-x-[8rem]');
    } else {
      return setAlertDisplay('-translate-x-[33rem]');
    }
  }
  return (
    <div className={`relative w-44 min-h-screen md:flex `}>
      {/* mobile sidebar */}
      <div className='bg-blue-800 text-blue-100 flex justify-between md:hidden'>
        {/* logo */}
        <a href='#' className='block p-4 text-white font-bold'>
          Better Dev
        </a>
        {/* mobile menu button */}
        <button
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
          onClick={openSidebar}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 '
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
      {/* desktop Sidebar */}
      <div
        className={`z-10 bg-blue-700 text-blue-100 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform  md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        {/* top nav links */}
        <div className='flex flex-col items-center'>
          <button
            className='px-4 p-4 bg-blue-600 hover:bg-blue-800 mb-4 transition duration-500 rounded-full'
            onClick={() => {
              openSidebar();
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </button>

          <nav className='space-y-4'>
            <a
              href='#'
              className='rounded-full p-4 transition duration-500 py2.5 px-4 flex  hover:bg-blue-800'
              onClick={() => {
                handlePage(dashboard());
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </a>
            <a
              href='#'
              className='rounded-full p-4 transition duration-500 py2.5 px-4 flex items-center hover:bg-blue-800'
              onClick={() => {
                handlePage(report());
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </a>
            <a
              href='#'
              className='rounded-full p-4 transition duration-500 py2.5 px-4 flex items-center hover:bg-blue-800'
              onClick={() => {
                handlePage(timesheet());
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </a>
            <a
              href='#'
              className='rounded-full p-4 transition duration-500 py2.5 px-4 flex items-center hover:bg-blue-800 '
              onClick={() => {
                handlePage(bug());
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                />
              </svg>
            </a>
          </nav>
          {/* bottom nav */}
          <nav>
            <div className='pt-48 space-y-3'>
              <a
                href='#'
                className='flex px-4 p-4 hover:bg-blue-800 transition duration-500 rounded-full'
                onClick={openAlertDiplay}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </a>

              <a
                href='#'
                className='flex px-4 p-4 hover:bg-blue-800 transition duration-500 rounded-full'
                onClick={() => {
                  handlePage(account());
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div className='flex'>
        <div
          className={` bg-blue-700  px-2 py-28 text-blue-100  w-32 absolute inset-y-0 left-0 transform ${txFull} relative transition duration-200 ease-in-out`}
        >
          <nav className='flex flex-col space-y-12 pb-0 pt-2 '>
            <a
              href='#'
              className='flex px-4 hover:bg-blue-800 transition duration-500 rounded'
              onClick={() => {
                handlePage(dashboard());
              }}
            >
              Dashboard
            </a>
            <a
              href='#'
              className='flex px-4 hover:bg-blue-800 transition duration-500 rounded'
              onClick={() => {
                handlePage(report());
              }}
            >
              Reports
            </a>
            <a
              href='#'
              className='flex px-4 hover:bg-blue-800 transition duration-500 rounded'
              onClick={() => {
                handlePage(timesheet());
              }}
            >
              Timesheet
            </a>
            <a
              href='#'
              className='flex px-4 hover:bg-blue-800 transition duration-500 rounded'
              onClick={() => {
                handlePage(bug());
              }}
            >
              Bugs
            </a>
          </nav>
          <nav>
            <div className='pt-56 space-y-11'>
              <a
                href='#'
                className='flex px-4 hover:bg-blue-800 transition duration-500 rounded'
              >
                Alert
              </a>
              <a
                href='#'
                className='flex px-4 hover:bg-blue-800 transition duration-500 rounded'
                onClick={() => {
                  handlePage(bug());
                }}
              >
                Account
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`  px-2 py-28 text-blue-100  w-0 h-0 absolute inset-y-0 left-0 transform ${alertDisplay} translate-y-64 relative transition duration-200 ease-in-out`}
      >
        <AlertDisplay />
      </div>
    </div>
  );
};
