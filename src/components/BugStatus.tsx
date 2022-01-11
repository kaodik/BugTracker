import React from 'react';

export default function BugStatus() {
  return (
    <div className='w-[450px] text-blue-500 rounded-2xl bg-blue-500 p-2'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-lx pb-2 text-blue-200'>BugStatus</h2>
      </div>
      <div className='border-2 rounded border-blue-400 bg-blue-50 h-20 text-center'>
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
            <tr>
              <td>Navbar bug</td>
              <td>open</td>
              <td>05/12/21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
