import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";

import loginReducer from "./login";
import sellers from "./sellers";

const reducers = combineReducers({
    loginReducer,
    sellers,
});
const store = createStore(reducers);

export default store;
