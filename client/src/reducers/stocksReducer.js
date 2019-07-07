// import actions
import { GET_STOCKS, ADD_STOCK, REMOVE_STOCK } from '../actions/actionTypes';

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
    case ADD_STOCK:
      let newList = action.payload.concat(state.stocksList)
      return {
        ...state,
        stocksList: newList
      }
    case REMOVE_STOCK:
      let id = action.payload._id;

      let filteredStocks = state.stocksList.filter((stock) => {
        if (stock._id === id) {
          return false
        }
        return true
      })

      return{
        ...state,
        stocksList: filteredStocks
      }
    default:
      return state;
  }
};
