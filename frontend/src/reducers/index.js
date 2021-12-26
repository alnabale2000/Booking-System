import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";

import loginReducer from "./login";

const reducers = combineReducers({
    loginReducer,
});
const store = createStore(reducers);

export default store;
