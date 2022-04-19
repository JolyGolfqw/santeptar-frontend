import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    

}), applyMiddleware(thunk))