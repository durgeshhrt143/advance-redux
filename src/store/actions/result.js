import * as actionTypes from "./actionTypes";
export const saveResult = res => {
  return {
    type: actionTypes.RESULT,
    result: res
  };
};
export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
export const storeDelete = id => {
  return {
    type: actionTypes.DELETE,
    ID: id
  };
};
