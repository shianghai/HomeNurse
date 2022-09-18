import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    editMode: false
}

export const emailEditEndedSlice = createSlice({
    name: 'emailEditEnded',
    initialState,
    reducers: {
        turnOnEmailEditEnded: (state)=>{
            state.editMode = true
        },
        turnOfnEmailEditEnded: (state)=>{
            state.editMode = false
        }
    }
})

export const {turnOnEmailEditEnded, turnOfnEmailEditEnded} = emailEditEndedSlice.actions

export default emailEditEndedSlice.reducer