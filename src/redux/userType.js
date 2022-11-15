import { createSlice } from "@reduxjs/toolkit";

const userTypeSlice = createSlice({
    initialState: {
        userType: "user"
    },

    name: "userType",

    reducers: {
        changeUserType: (state, action)=>{
            state.userType = action.payload
        },
        getUserType: (state)=>{
            return state.userType
        }
        
    }
})

export const {changeUserType} = userTypeSlice.actions
export default userTypeSlice.reducer;