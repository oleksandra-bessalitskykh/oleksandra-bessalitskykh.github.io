import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
    },
    reducers: {
        replaceUsers(state, action) {
            state.items = action.payload.items;
        },
    },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
