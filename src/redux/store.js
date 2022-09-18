import { configureStore } from '@reduxjs/toolkit'
import emailTextReducer from './emaiText'
import emailEditEndedReducer from './emailEditEnded'
import passwordTextReducer from './passwordText'


export const store = configureStore({
  reducer: {
    emailText: emailTextReducer,
    emailEditEnded: emailEditEndedReducer,
    passwordText: passwordTextReducer
  },
})