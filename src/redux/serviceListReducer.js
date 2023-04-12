import { ADD_SERVICE, REMOVE_SERVICE, FILTER_SERVICE } from "./actionTypes";
import { nanoid } from "nanoid";

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
  {id: nanoid(), name: 'Замена аккумулятора', price: 4000}
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type){
    case ADD_SERVICE:
      const {name, price, sId} = action.payload;
      let sState = state.filter(service => service.id !== sId);
      return [...sState, {id: nanoid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const {id} = action.payload;
      return state.filter(service => service.id !== id);
    case FILTER_SERVICE:
      const line = action.payload;
      if(line.length > 0) {
        return state.filter(e => e.name.toLowerCase().includes(line))
      } else {
        return initialState;
      }
    default:
      return state;
  }
}