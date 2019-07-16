import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  counter: 0
};
const counter = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionType.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionType.ADD:
      return updateObject(state, { counter: state.counter + action.value });
    case actionType.SUBSTRACT:
      return updateObject(state, { counter: state.counter - action.value });
  }

  return state;
};

export default counter;
