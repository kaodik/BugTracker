import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';

export default function AlertDisplay() {
  const bug = useSelector((state: RootState) => state.bug.bug);
  const bugNameList = bug.filter(
    (b: { assignee: string }) => b.assignee === 'Steven Trumblay'
  );
  // bug ? console.log(bugNameList.length) : 'loading';
  return (
    <div className='w-80 text-blue-200 rounded-2xl bg-blue-500 p-2'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-xl pb-2'>Recent Notifications</h2>
      </div>
      <>
        <div className='border-2 rounded text-blue-600 border-blue-400 bg-blue-50 text-base p-2'>
          {bug
            ? bugNameList
                .slice(1)
                .slice(-5)
                .reverse()
                .map((bname: any) => (
                  <div> New Task Priority: {bname.priority}</div>
                ))
            : 'loading...'}
        </div>
      </>
    </div>
  );
}
