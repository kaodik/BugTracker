import axios from 'axios';

export function requestGetTime() {
  return axios.request({
    method: 'GET',
    url: '/time',
  });
}
