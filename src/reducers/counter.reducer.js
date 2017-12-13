import * as types from '../constants/counter.const';

export default (state = 0, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return ++state;
    case types.DECREMENT:
      return --state;
    default:
      return state;
  }
}
