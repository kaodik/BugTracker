import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function BugDataGrid() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  // console.log(bug);
  return (
    <div className='w-full text-blue-700 bg-blue-500 rounded-2xl '>
      <div className=' rounded-t-2xl h-2 bg-blue-300'></div>
      <div>
        <table className='item-center w-full bg-blue-300 table-'>
          <thead className='table-header-group text-lg'>
            <th>Subject</th>
            <th>Assignee</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Created</th>
            <th>Start date</th>
            <th>Due date</th>
          </thead>
          <tbody className='text-sm pl-2 table-row-group text-center'>
            {bug
              ? bug.map((bugData: any) => (
                  <tr
                    className={
                      bugData.bug_id % 2 === 0
                        ? 'table-row bg-blue-300 boarder-t'
                        : 'table-row bg-blue-200 boarder-t'
                    }
                  >
                    <td>{bugData.subject}</td>
                    <td>{bugData.assignee}</td>
                    <td>{bugData.status}</td>
                    <td>{bugData.priority}</td>
                    <td>{bugData.createddate}</td>
                    <td>{bugData.startdate}</td>
                    <td>{bugData.duedate}</td>
                  </tr>
                ))
              : 'loading...'}
          </tbody>
        </table>
      </div>
      <div className=' rounded-b-2xl bg-blue-300  px-4 py-3 flex items-center justify-between border-t border-blue-300 sm:px-6'>
        <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-blue-700'>
              Showing <span className='font-medium'>{bug.length}</span> results
            </p>
          </div>
          {/* <div>
            <nav
              className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
              aria-label='Pagination'
            >
              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-blue-300 bg-white text-sm font-medium text-blue-500 hover:bg-blue-50'
              >
                <span className='sr-only'>Previous</span>

                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
              <a
                href='#'
                aria-current='page'
                className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                1
              </a>
              <a
                href='#'
                className='bg-white border-blue-300 text-blue-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                2
              </a>
              <a
                href='#'
                className='bg-white border-blue-300 text-blue-500 hover:bg-blue-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
              >
                3
              </a>
              <span className='relative inline-flex items-center px-4 py-2 border border-blue-300 bg-white text-sm font-medium text-blue-700'>
                ...
              </span>
              <a
                href='#'
                className='bg-white border-blue-300 text-blue-500 hover:bg-blue-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
              >
                8
              </a>
              <a
                href='#'
                className='bg-white border-blue-300 text-blue-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                9
              </a>
              <a
                href='#'
                className='bg-white border-blue-300 text-blue-500 hover:bg-blue-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
              >
                10
              </a>
              <a
                href='#'
                className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-blue-300 bg-white text-sm font-medium text-blue-500 hover:bg-blue-50'
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='h-5 w-5'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fill-rule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clip-rule='evenodd'
                  />
                </svg>
              </a>
            </nav>
          </div> */}
        </div>
      </div>
    </div>
  );
}
