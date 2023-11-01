import { LOGIN , CHANGE_NAME ,LOGOUT } from "./types"

const initialState = {
    isSignedIn: false,
    userName: "Super Man"
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case LOGIN:
            return {...state, isSignedIn: payload}
        
        case LOGOUT:
            return {...state,  isSignedIn: payload}    

        case CHANGE_NAME:
            return {...state , userName: payload}
    }
    
    return state
}