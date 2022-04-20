import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import categories from "./features/categories";

export const store = createStore(combineReducers({
    categories

}), applyMiddleware(thunk))