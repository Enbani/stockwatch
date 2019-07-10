import { ADD_SOCKET_TO_STORE } from '../actions/actionTypes';

const INITIAL_STATE = {
  socket: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_SOCKET_TO_STORE:
      return { ...state, socket: action.payload }
    default:
      return state
  }
}
