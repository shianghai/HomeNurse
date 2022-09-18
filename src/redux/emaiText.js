import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    emailValue: ''
}

const emailTextSlice = createSlice({
    name:'emailText',
    initialState,
    reducers: {
        setEmailText: (state, action)=>{
            state.emailValue = action.payload;
        },
        clearEmailText: (state)=>{
            state.emailValue = ''
        }

    }
})

export const {setEmailText, clearEmailText} = emailTextSlice.actions;
export default  emailTextSlice.reducer;