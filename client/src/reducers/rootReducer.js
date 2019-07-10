import { combineReducers } from 'redux';
import stocksReducer from './stocksReducer';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({
  stocks: stocksReducer,
  socket: socketReducer
});

export default rootReducer;
