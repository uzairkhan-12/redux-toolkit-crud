import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const updatedUser = action.payload;
            const userIdx = state.findIndex(user => user.id === updatedUser.id);

            if (userIdx !== -1) {
                // If the user with the matching id is found, replace it with the updated user
                state[userIdx] = updatedUser;
            }
        },
        deleteUser: (state, action) => {
            const userIdToDelete = action.payload;
            const updatedState = state.filter(user => user.id !== userIdToDelete);
            return updatedState;
        }
    }
})

export default userSlice.reducer
export const { addUser, editUser, deleteUser } = userSlice.actions