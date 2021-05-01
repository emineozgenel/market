import * as types from "../actions/actionTypes";

export default function filterReducer(state = [], action) {
  switch (action.type) {
    case types.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}
