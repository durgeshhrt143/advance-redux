const redux = require("redux");
const creatStore = redux.createStore;
//reducer
const initialState = {
  counter: 0
};
const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT_COUNT") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD_COUNT") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};
//store
const store = creatStore(rootReducer);
console.log(store.getState());
//subscription
store.subscribe(() => {
  console.log("[subscribe]", store.getState());
});
//dispatch action
store.dispatch({ type: "INCREMENT_COUNT" });
store.dispatch({ type: "ADD_COUNT", value: 10 });
console.log(store.getState());
