import categories from "./features/categories";
import application from './features/application'
import books from "./features/books";


export const store = createStore(combineReducers({
    categories,
    application,
    books

}), applyMiddleware(thunk))