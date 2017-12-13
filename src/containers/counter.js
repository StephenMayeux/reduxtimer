import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/Counter.actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {increment, decrement, counter} = this.props;
    return (
      <div>
        Current counter value: {counter}
        <div>
          <button onClick={(e) => increment()}>Increment</button>
        </div>
        <div>
          <button onClick={(e) => decrement()}>Decrement</button>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ counter }) {
  return { counter }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
