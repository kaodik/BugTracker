//creating init state
//create action name
export const GET_PROJECT = 'GET_PROJECT';
const SET_PROJECT = 'SET_PROJECT';

export const getProject = () => ({
  type: GET_PROJECT,
});
export const setProject = (project) => ({
  type: SET_PROJECT,
  project: project, //or project: project, that will set users with it self
});
// init state
const initialState = {
  project: [],
};

//reducer;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECT:
      const { project } = action;
      return { ...state, project: project };
    default:
      return state;
  }
};
