import { LOGIN , CHANGE_NAME ,LOGOUT, GET_USER_BOOKS } from "./types"

const initialState = {
    isSignedIn: false,
    userName: "Super Man",
    userBooks: []
}

type ActionType = {
    type: string,
    payload: any,
}

export default (state = initialState, {type, payload} : ActionType ) => {

    switch (type) {
        case LOGIN:
            return {...state, isSignedIn: payload}
        
        case LOGOUT:
            return {...state,  isSignedIn: payload}    

        case CHANGE_NAME:
            return {...state , userName: payload}

        case GET_USER_BOOKS:
            return {...state, userBooks: payload}    
    }
    
    return state
}