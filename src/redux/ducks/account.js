export const GET_ACCOUNT = 'GET_ACCOUNT';
const SET_ACCOUNT = 'SET_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

export const getAccount = (data) => ({
  type: GET_ACCOUNT,
  data: data,
});
export const setAccount = (account) => ({
  type: SET_ACCOUNT,
  account: account,
});
export const updateAccount = (data) => ({
  type: UPDATE_ACCOUNT,
  data: data,
});
// init state
const initialState = {
  account: [],
};

//reducer;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT:
      const { account } = action;
      return { state, account: account };
    default:
      return state;
  }
};
