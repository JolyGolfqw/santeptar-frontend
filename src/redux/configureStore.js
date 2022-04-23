import categories from "./features/categories";
import application from './features/application'
import users from './features/users'
import books from "./features/books";
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";



export const store = createStore(combineReducers({
    categories,
    application,
    books,
    users

}), applyMiddleware(thunk))
