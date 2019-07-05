// import actions
import { GET_STOCKS } from '../actions/actionTypes';

// define initial state
const INITIAL_STATE =  {
  stocksList: []
};

// export reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        stocksList: action.payload
      };
    default:
      return state;
  }
};
