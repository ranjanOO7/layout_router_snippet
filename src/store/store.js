import {
    configureStore,
    applyMiddleware,
    combineReducers,
    createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { getAdminDataReducer } from "../reducers/adminReducer";

const reducer = combineReducers({
    getAdminData: getAdminDataReducer,
});

const middleware = [thunk];

const store = configureStore(
    { reducer },
    null,
    composeWithDevTools(applyMiddleware(...middleware))
);
// const store = createStore(
//     reducer,
//     [],
//     composeWithDevTools(applyMiddleware(...middleware))
// );

export default store;
