import React, { useEffect } from 'react';
import { Sidemenu } from './components/Sidemenu';
import Navbar, {
  NavItem,
  DropdownAlertMenu,
  DropdownPinnedMenu,
} from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/configureStore';
import { getProject } from './redux/ducks/project';
import bug, { getBug } from './redux/ducks/bug';
import { getTime } from './redux/ducks/time';
import { getAccount } from './redux/ducks/account';
import { getLogin, setLogin } from './redux/ducks/login';
import { account, dashboard } from './redux/ducks/page';
import Login from './pages/Login';

export default function App() {
  const user = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch();
  // console.log(user.data);
  useEffect(() => {
    dispatch(getProject());
    dispatch(getBug());
    dispatch(getTime());
    // dispatch(getAccount());
    // console.log(user.data + ' userdata');
    dispatch(getLogin());
  }, []);
  // const time = useSelector((state: RootState) => state.time.time);
  //const project = useSelector((state: RootState) => state.project.project);
  // console.log(project);
  // const { pageTracker } = useSelector((state: RootState) => state);
  // console.log(useSelector((state) => state));
  // // const page = useSelector((state) => state);
  // const user = useSelector((state: RootState) => state.login);
  const loginBool = useSelector((state: RootState) => state.login);
  const page = useSelector((state: RootState) => state.pageTracker.page);
  //const page = useSelector((state) => state.pages);
  //const count = useSelector(state => state.exampleCounter.count)
  //The commented code below should go to the component that will update the state.IE this will go to sideMenu
  //const dispatch = useDispatch();
  //const hanndleIncrement = () =>{dispatch(increment())};
  //const handleDecrement = () => {dispatch(decrement())};
  //the comment below is using redux-saga to useEffect and fetch data from an api
  //const dispatch = useDispatch();
  //useEffect(()=>{
  //  dispatch(getUser());
  //}), []);  if react complains that dispatch needs dependance add it in the arr on this line.
  // to get the data
  //const user = userSelector((state)=> state.user.user);
  //console.log(user);
  // console.log(loginBool.data); // this gets the data that was entered from.
  const handlePage = (prop: any) => {
    dispatch(prop);
  };
  return loginBool.login ? (
    <div className='bg-blue-200 min-h-full'>
      <Navbar>
        <NavItem
          icon={
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
          }
          label={'Dashboard'}
          onClick={() => {
            handlePage(dashboard());
          }}
        />
        <NavItem
          icon={
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
          }
          label={'Alert'}
        >
          <DropdownAlertMenu />
        </NavItem>

        <NavItem
          icon={
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
                d='M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
              />
            </svg>
          }
          label={'Pinned'}
        >
          <DropdownPinnedMenu />
        </NavItem>
        <NavItem
          icon={
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
          }
          label={'Account'}
          onClick={() => {
            handlePage(account());
          }}
        />
        <NavItem
          icon={
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
              ></path>
            </svg>
          }
          label={'Logout'}
          onClick={() => {
            dispatch(setLogin(false));
          }}
        />
      </Navbar>

      <div className='flex flex-row'>
        <Sidemenu />
        <div className='flex-1 p-10 text-2xl font-bold '>{page}</div>
      </div>
    </div>
  ) : (
    <Login />
  );
}
