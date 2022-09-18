import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    status: false 
}

const userSlice = createSlice({
    name:'loginStatus',
    initialState,
    reducers: {
        changeLoginStatus: (state, action)=>{
            state.status = action.payload;
        },
        

    }
})

export const {changeLoginStatus} = userSlice.actions;
export default  userSlice.reducer;