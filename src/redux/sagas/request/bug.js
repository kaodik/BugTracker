import axios from 'axios';

export function requestGetBug() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:5000/bug',
  });
}
