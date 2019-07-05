// import packages
import React, { Component }from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import  store and components
import configureStore from './store/configureStore';
import Main from './components/Main';

// import styles
import './styles/index.scss';


class App extends Component {
  render() {
    const store = configureStore();

    return(
      <Provider store={ store }>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Main }/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
};


export default App;
