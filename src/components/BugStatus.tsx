import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/configureStore';
import { getAccount } from '../redux/ducks/account';

export default function BugStatus() {
  const user = useSelector((state: RootState) => state.login);
  const account = useSelector((state: RootState) => state.account.account);
  const bug = useSelector((state: RootState) => state.bug.bug);
  useEffect(() => {
    dispatch(getAccount(user.data));
  }, []);

  const dispatch = useDispatch();

  const currentUser = account.map(
    (bname: any) => bname.fname + ' ' + bname.lname
  );
  const bugNameList = bug.filter(
    (b: { assignee: string }) => b.assignee === currentUser[0]
  );
  console.log();
  return (
    <div className='w-[450px] text-blue-500 rounded-2xl bg-blue-500 p-2'>
      {/* {account ? console.log(currentUser) : 'loading...'} */}
      <div className='flex flex-row justify-between'>
        <h2 className='text-lx pb-2 text-blue-200'>Bug Status</h2>
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
