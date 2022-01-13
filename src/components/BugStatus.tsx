import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function BugStatus() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const bugNameList = bug.filter(
    (b: { assignee: string }) => b.assignee === 'Steven Trumblay'
  );
  return (
    <div className='w-[450px] text-blue-500 rounded-2xl bg-blue-500 p-2'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-lx pb-2 text-blue-200'>BugStatus</h2>
      </div>
      <div className='border-2 rounded border-blue-400 bg-blue-50 text-center'>
        <table className='w-full'>
          <thead className='text-lg bg-blue-200 p-40'>
            <th>
              <button>Subject</button>
            </th>
            <th>
              <button>Status</button>
            </th>
            <th>
              <button>Due</button>
            </th>
          </thead>
          <tbody className='text-sm'>
            {bug
              ? bugNameList.map((bname: any) => (
                  <tr>
                    <td>{bname.subject}</td>
                    <td>{bname.status}</td>
                    <td>{bname.duedate}</td>
                  </tr>
                ))
              : 'loading...'}
          </tbody>
        </table>
      </div>
    </div>
  );
}
