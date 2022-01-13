import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function ReportStats() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const openf = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Frontend' && b.status === 'Open'
  );
  const closef = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Frontend' && b.status === 'Close'
  );
  const inprogf = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Frontend' && b.status === 'Inprogress'
  );
  const inprogb = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Backend' && b.status === 'Inprogress'
  );
  const closeb = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Backend' && b.status === 'Open'
  );
  const openb = bug.filter(
    (b: { category: string; status: string }) =>
      b.category === 'Backend' && b.status === 'Close'
  );
  let openfCount = openf.length;
  let closefCount = closef.length;
  let inprogfCount = inprogf.length;
  let openbCount = inprogb.length;
  let closebCount = closeb.length;
  let inprogbCount = inprogb.length;

  // console.log(open.length);
  // console.log(open);
  // setOpenFE(open.length);
  // console.log(bug.length);
  return (
    <div className='w-4/6 text-blue-500 rounded-2xl bg-blue-500 p-2 h-[28rem]'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-lx pb-2 text-blue-200'>ReportsStats</h2>
      </div>
      <div className=''>
        <table className='text-left bg-blue-200 h-96 w-full rounded-xl '>
          <thead className='bg-blue-300'>
            <th className='rounded-tl-xl pl-5'>Category</th>
            <th>Closed</th>
            <th>Open</th>
            <th>In Progress</th>
          </thead>
          <tbody>
            <tr>
              <td className='pl-5'>Frontend</td>
              <td>{bug ? closefCount : 'loading...'}</td>
              <td>{bug ? openfCount : 'loading...'}</td>
              <td>{bug ? inprogfCount : 'loading...'}</td>
            </tr>
            <tr>
              <td className='pl-5'>Backend</td>
              <td>{bug ? closebCount : 'loading...'}</td>
              <td>{bug ? openbCount : 'loading...'}</td>
              <td>{bug ? inprogbCount : 'loading...'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
