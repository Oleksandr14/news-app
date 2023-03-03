import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
    isAutheticated: boolean,
    userName: string,
    password: string
}

const initialState: AuthenticationState = {
    isAutheticated: !!localStorage.getItem('isAutheticated'),
    userName: '',
    password: ''
}

const loginSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state) => {
            state.isAutheticated = true
            localStorage.setItem('isAutheticated', 'true')
        }, 
        logout: (state) => {
            state.isAutheticated = false
            localStorage.removeItem('isAutheticated')
        },
        logUser: (state, action) => {
            state.userName = action.payload
        },
        logPass: (state, action) => {
            state.password = action.payload
        }
    }
})

const loginReducer = loginSlice.reducer
export default loginReducer
export const {login, logout, logUser, logPass} = loginSlice.actions