import * as types from '../constants/counter.const';

export default function CounterReducer(state = 0, action) {
  let newState = state;

  switch (action.type) {
    case types.INCREMENT:
      return newState++;
    case types.DECREMENT:
      return newState--
    default:
      return state;
  }
}
