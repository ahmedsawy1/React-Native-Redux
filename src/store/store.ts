import { combineReducers, createStore } from "redux";
import userReducer from "./userReducer";


const rootReducer = combineReducers({
    userData : userReducer
})

export const store = createStore(rootReducer)