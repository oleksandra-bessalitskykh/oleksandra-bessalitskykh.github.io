import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
    },
    reducers: {
        replacePosts(state, action) {
            state.items = action.payload.items;
        },
    },
});

export const postActions = postsSlice.actions;

export default postsSlice;
