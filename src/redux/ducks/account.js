export const GET_ACCONT = 'GET_ACCOUNT';
const SET_ACCOUNT = 'SET_ACCOUNT';

export const getAccount = () => ({
  type: GET_ACCOUNT,
});
export const setAccount = (account) => ({
  type: SET_ACCOUNT,
  account: account,
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
      return { ...state, account: account };
    default:
      return state;
  }
};
