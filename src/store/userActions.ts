import { LOGIN , CHANGE_NAME ,LOGOUT } from "./types"


export const loginAction = () => {
    return {
        type: LOGIN,
        payload: true
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT,
        payload: false
    }
}

export const changeNameAction = (userName: string) => {
    return {
        type: CHANGE_NAME,
        payload: userName
    }
}