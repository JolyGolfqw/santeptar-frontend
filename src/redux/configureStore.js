import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import books from "./features/books";

export const store = createStore(combineReducers({
    books

}), applyMiddleware(thunk))