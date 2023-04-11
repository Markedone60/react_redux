import { FILTER_SERVICE_LIST } from "./actionTypes";

const initialState = {
  filterInput: ''
}

export default function serviceSearchReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_SERVICE_LIST: {
      return { ...state, filterInput: action.payload }
    }
    default:
    return state
  }
}
