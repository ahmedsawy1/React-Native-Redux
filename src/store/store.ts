import { combineReducers, createStore } from "redux";

const initialState = {
    isSignedIn: true,
    userName: "Super Man"
}

const rootReducer = combineReducers({
    userData : () => initialState
})

export const store = createStore(rootReducer)