import axios from 'axios';

// export function requestGetAccount() {
//   return axios.request({
//     method: 'GET',
//     url: 'http://localhost:5000/account',
//   });
// }

export function requestPostLogin(account) {
  const body = account.data;
  return axios.post('http://localhost:5000/login', body);
  //   .then((t) => {
  //     console.log(t.data);
  //     if (t.data === true) {
  //       console.log('IT works');
  //       //   handlePage(dashboard());
  //       //put something here to toggle the nav and side bar it should start off.
  //     } else {
  //       //   console.log('user not found');
  //     }
  //   });
}
