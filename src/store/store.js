import { legacy_createStore, combineReducers } from "redux";

import serviceAddReducer from "../redux/serviceAddReducer";
import serviceListReducer from "../redux/serviceListReducer";
import serviceSearchReducer from "../redux/serviceSearchReducer";

//const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducer = combineReducers({
  serviceAdd: serviceAddReducer,
  serviceList: serviceListReducer,
  serviceSearch: serviceSearchReducer
})

const store = legacy_createStore(reducer);
export default store;

/*
function configureStore() {
  return legacy_createStore(
    combineReducers({
      serviceAdd: serviceAddReducer,
      serviceList: serviceListReducer,
      serviceSearch: serviceSearchReducer
    })
  )
}

export default configureStore;

*/