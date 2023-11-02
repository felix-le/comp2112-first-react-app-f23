import { ADD_COUNT, RESET_COUNT } from "./actions";

export default function AppReducer(state, action) {
  switch (action.type) {
    case ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
}
