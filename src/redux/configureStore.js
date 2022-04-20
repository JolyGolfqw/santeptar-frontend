import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import categories from "./features/categories";
import application from './features/application'

export const store = createStore(combineReducers({
    categories,
    application

}), applyMiddleware(thunk))