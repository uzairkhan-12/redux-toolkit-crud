import { createSlice } from "@reduxjs/toolkit";
const fineSlice = createSlice({
    name: "find",
    initialState: [],
    reducers: {
        addFine: (state, action) => {
            state.push(action.payload)
        },
    }
})

export default fineSlice.reducer
export const { addFine } = fineSlice.actions