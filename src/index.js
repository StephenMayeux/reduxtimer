import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './reducers/counter.reducer';
import Counter from './containers/counter';
const store = createStore(CounterApp);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
}
