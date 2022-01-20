import axios from 'axios';

export function requestGetAccount(account) {
  const body = account.data;
  return axios.post('http://localhost:5000/currentUser', body);
}
