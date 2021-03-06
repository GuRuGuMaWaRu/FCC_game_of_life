import { SET_INTERVAL_ID } from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case SET_INTERVAL_ID:
      return action.payload;
    default:
      return state;
  }
}
