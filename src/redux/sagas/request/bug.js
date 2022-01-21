import axios from 'axios';

export function requestGetBug() {
  return axios.request({
    method: 'GET',
    url: '/bug',
  });
}
