import React, { Component }from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';

import Main from './components/Main';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const store = configureStore();

    return(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Main }/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
