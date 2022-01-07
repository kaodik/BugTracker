import axios from 'axios';

export function requestGetProject() {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:5000/project',
  });
}
