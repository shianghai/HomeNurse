import { createSlice } from "@reduxjs/toolkit";

const userObjectSlice = createSlice({
    name: "user",
    initialState: [],

    reducers: {
        setUserObject: (state, action)=>{
            state.user = action.payload
        },
        getUserObject : (state)=>{
            return state.user
        }
    }

    
})

export const {setUserObject, getUserObject} = userObjectSlice.actions
export default userObjectSlice.reducer