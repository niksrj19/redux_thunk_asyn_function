//import { increment, decrement } from "./actionCreators";

let initialState = {
  value: 0
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      let NewState = { ...state };
      NewState.value += action.value;

      return NewState;
    }
    case "DECREMENT": {
      let NewState = { ...state };
      NewState.value -= action.value;

      return NewState;
    }

    default:
      return state;
  }
}
