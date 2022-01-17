import axios from 'axios';

export function requestGetAccount() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:5000/account',
  });
}
