import React from 'react';
import Dashboard from '../../pages/Dashboard';
import Account from '../../pages/Account';
import Timesheet from '../../components/Time';
import Login from '../../pages/Login';
import Bug from '../../pages/Bugs';
import Report from '../../pages/Reports';
//creating init state
//create action name
const DASHBOARD = 'dashboard';
const ACCOUNT = 'account';
const BUG = 'bug';
const LOGIN = 'login';
const TIMESHEET = 'timesheet';
const REPORT = 'report';
export const dashboard = () => ({
  type: DASHBOARD,
});
export const account = () => ({
  type: ACCOUNT,
});
export const bug = () => ({
  type: BUG,
});
export const timesheet = () => ({
  type: TIMESHEET,
});
export const login = () => ({
  type: LOGIN,
});
export const report = () => ({
  type: REPORT,
});
//init state
const initialState = {
  page: <Bug />,
};

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case DASHBOARD:
      return { ...state, page: <Dashboard /> };
    case ACCOUNT:
      return { ...state, page: <Account /> };
    case REPORT:
      return { ...state, page: <Report /> };
    case BUG:
      return { ...state, page: <Bug /> };
    case TIMESHEET:
      return { ...state, page: <Timesheet /> };
    case LOGIN:
      return { ...state, page: <Login /> };
    default:
      return state;
  }
};
