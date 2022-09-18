import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    passwordValue: ''
}

const passwordTextSlice = createSlice({
    name:'passwordText',
    initialState,
    reducers: {
        setPasswordText: (state, action)=>{
            state.passwordValue = action.payload;
        },
        clearPasswordText: (state)=>{
            state.passwordValue = ''
        }

    }
})

export const {setPasswordText, clearPasswordText} = passwordTextSlice.actions;
export default  passwordTextSlice.reducer;