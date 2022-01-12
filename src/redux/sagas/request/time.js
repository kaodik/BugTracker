import axios from 'axios';

export function requestGetTime() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:5000/time',
  });
}
