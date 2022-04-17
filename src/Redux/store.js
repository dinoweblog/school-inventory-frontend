import { createStore, combineReducers, applyMiddleware } from "redux";

import { loginReducer } from "./Login/reducer";
import thunk from "redux-thunk";
import { teachersReducer } from "./Teachers/reducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  teachers: teachersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
