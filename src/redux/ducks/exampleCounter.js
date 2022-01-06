//creating init state
//create action name
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
//init state
const initialState = {
  count: 0,
};

//reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
