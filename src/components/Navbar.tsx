import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function Navbar(props: any) {
  return (
    <nav className='Navbar flex justify-between bg-blue-700 h-14'>
      <a
        href='#'
        className='text-white flex flex-row items-center space-x-2 px-4'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
          />
        </svg>
        <span className='text-2xl font-extrabold '>Bug Tracker</span>
      </a>
      <ul className='Navbar-nav max-w-full h-full flex justify-end pr-8'>
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem(props: any) {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item  flex items-center justify-center'>
      <a
        href='#'
        className='icon-button p-2 m-2 hover:bg-blue-800 text-blue-100 rounded-2xl flex items-center justify-center'
        onClick={() => setOpen(!open)}
      >
        {props.icon}
        <span className='pl-1.5' onClick={props.onClick}>
          {props.label}
        </span>
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownAlertMenu() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const bugNameList = bug.filter(
    (b: { assignee: string }) => b.assignee === 'Steven Trumblay'
  );
  function DropdownItem(props: any) {
    return (
      <a href='#' className='menu-item h-14 flex items-center p-0.5 space-x-2'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className='dropdown absolute top-14 w-80 -translate-x-12 p-1 overflow-hidden bg-blue-400'>
      {/* //keep calling here */}
      {bug
        ? bugNameList
            .slice(1)
            .slice(-5)
            .reverse()
            .map((bname: any) => (
              <DropdownItem
                leftIcon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                    />
                  </svg>
                }
                rightIcon={'New Task Priority: ' + bname.priority}
              />
            ))
        : 'loading...'}
    </div>
  );
}
function DropdownPinnedMenu() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const bugNameList = bug.filter(
    (b: { assignee: string }) => b.assignee === 'Steven Trumblay'
  );
  function DropdownItem(props: any) {
    return (
      <a href='#' className='menu-item h-14 flex items-center p-0.5 space-x-2'>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className='dropdown absolute top-14 w-80 -translate-x-12 p-1 overflow-hidden bg-blue-400'>
      {/* //keep calling here */}
      {/* {bug
        ? bugNameList
            .slice(1)
            .slice(-5)
            .reverse()
            .map((bname: any) => (
              <DropdownItem
                leftIcon={
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-8 w-8'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
                    />
                  </svg>
                }
                rightIcon={'New Task Priority: ' + bname.priority}
              />
            )) 
              />
              : 'loading...'}*/}
      <DropdownItem leftIcon={''} rightIcon={'thank you for viewing my site'} />
    </div>
  );
}

export { NavItem, DropdownAlertMenu, DropdownPinnedMenu };
