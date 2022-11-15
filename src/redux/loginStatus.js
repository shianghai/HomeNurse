import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    status: false 
}

const loginStatusSlice = createSlice({
    name:'loginStatus',
    initialState,
    reducers: {
        changeLoginStatus: (state, action)=>{
            state.status = action.payload;
        },
        

    }
})

export const {changeLoginStatus} = loginStatusSlice.actions;
export default  loginStatusSlice.reducer;