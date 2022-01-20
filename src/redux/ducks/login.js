export const GET_LOGIN = 'GET_LOGIN';
const SET_LOGIN = 'SET_LOGIN';

export const getLogin = (data) => ({
  type: GET_LOGIN,
  data: data,
});
export const setLogin = (login) => ({
  type: SET_LOGIN,
  login: login,
});
// init state
const initialState = {
  login: false,
  data: null,
};

//reducer;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      const { login } = action;
      return {
        ...state,
        login: (state.login = login),
      };
    case GET_LOGIN:
      const { data } = action;
      return {
        ...state,
        data: (state.data = data),
      };
    default:
      return state;
  }
};
