import { createStore, applyMiddleware } from 'redux';
import rootReducer from  '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default () => {
  console.log('configure store');

  let store = createStore(rootReducer, {}, applyMiddleware(thunk));
  console.log('this is store', store);
  return store;
}
