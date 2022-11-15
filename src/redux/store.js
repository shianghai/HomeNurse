import { configureStore } from '@reduxjs/toolkit'
import emailTextReducer from './emaiText'
import emailEditEndedReducer from './emailEditEnded'
import passwordTextReducer from './passwordText'
import userObjectReducer from './userObject'
import userTypeReducer from './userType'
import userType from './userType'


export const store = configureStore({
  reducer: {
    emailText: emailTextReducer,
    emailEditEnded: emailEditEndedReducer,
    passwordText: passwordTextReducer,
    userObject: userObjectReducer,
    userType: userTypeReducer,
  },
})