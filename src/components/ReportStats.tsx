import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function ReportStats() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const [openFE, setOpenFE] = useState(0);
  const open = bug.filter(
    (b: { catgetory: string; status: string }) =>
      b.catgetory === 'Frontend' && b.status === 'Open'
  );
  let dcout = open.length;
  // console.log(open);
  // setOpenFE(open.length);
  console.log(bug.length);
  return (
    <div className='w-4/6 text-blue-500 rounded-2xl bg-blue-500 p-2'>
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
            <th className='rounded-tr-xl'>Resovle</th>
          </thead>
          <tbody>
            <tr>
              <td className='pl-5'>Frontend</td>
              <td>9</td>
              <td>20</td>
              {bug ? 'hello' : 'loading...'}
              {openFE}
              <td>40</td>
              <td>3943</td>
            </tr>
            <tr>
              <td className='pl-5'>Backend</td>
              <td>6</td>
              <td>45</td>
              <td>34</td>
              <td>393</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
