import React, { Component } from 'react';
import './App.css';

import Todo from './components/Todo';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
      </Provider>
    );
  }
}

export default App;
