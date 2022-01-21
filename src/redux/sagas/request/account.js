import axios from 'axios';

export function requestGetAccount(account) {
  const body = account.data;
  return axios.post('/currentUser', body);
}
export function requestUpdateAccount(account) {
  const body = account.data;
  return axios.put('/currentUser', body);
}
