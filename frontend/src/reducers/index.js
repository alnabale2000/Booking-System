import { createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";

import loginReducer from "./login";
import sellers from "./sellers";
import appointments from "./appointments";

const reducers = combineReducers({
    loginReducer,
    sellers,
    appointments,
});
const store = createStore(reducers);

export default store;
