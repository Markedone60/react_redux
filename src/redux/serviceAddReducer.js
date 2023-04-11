import { CHANGE_SERVICE_FIELD, CHANGE_SERVICE_EDIT, CANCEL_EDIT } from "./actionTypes";

const initialState = {
  id: null,
  name: '',
  price: '',
  edit: false
}

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case CHANGE_SERVICE_EDIT:
      const {nameS, price, id} = action.payload;
      return {...state, name: nameS, price: price, edit: true, id: id};
    case CANCEL_EDIT:
      return {...initialState}
    default: 
      return state;
  } 
}