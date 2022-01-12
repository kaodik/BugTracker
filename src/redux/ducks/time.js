export const GET_TIME = 'GET_TIME';
const SET_TIME = 'SET_TIME';

export const getTime = () => ({
  type: GET_TIME,
});
export const setTime = (time) => ({
  type: SET_TIME,
  time: time,
});
// init state
const initialState = {
  time: [],
};

//reducer;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME:
      const { time } = action;
      return { ...state, time: time };
    default:
      return state;
  }
};
