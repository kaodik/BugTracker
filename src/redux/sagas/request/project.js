import axios from 'axios';

export function requestGetProject() {
  return axios.request({
    method: 'GET',
    url: '/project',
  });
}
