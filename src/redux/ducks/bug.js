export const GET_BUG = 'GET_BUG';
const SET_BUG = 'SET_BUG';

export const getBug = () => ({
  type: GET_BUG,
});
export const setBug = (bug) => ({
  type: SET_BUG,
  bug: bug,
});
// init state
const initialState = {
  bug: [],
};

//reducer;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BUG:
      const { bug } = action;
      return { ...state, bug: bug };
    default:
      return state;
  }
};
