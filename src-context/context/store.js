import { createContext } from 'react'

export const initialState = {
    counter: 0,
    username: "myUserName"
}

export default Context = createContext(initialState)