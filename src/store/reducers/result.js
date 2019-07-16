import * as actionType from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialStore = {
  result: []
};
const deleteResult = (state, action) => {
  const updatedArray = state.result.filter(r => r.id !== action.ID);
  return updateObject(state, { result: updatedArray });
};
const result = (state = initialStore, action) => {
  switch (action.type) {
    case actionType.RESULT:
      return updateObject(state, {
        result: state.result.concat({ id: Date(), value: action.result })
      });

    case actionType.DELETE:
      return deleteResult(state, action);
  }

  return state;
};

export default result;
