import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        items: [],
        posts: [],
    },
    reducers: {
        replacePosts(state, action) {
            state.items = action.payload.items;
        },
        findUserPost(state, action) {
            const id = action.payload;
            state.posts = state.items.filter(item => item.userId === id);
        },
    },
});

export const postActions = postsSlice.actions;

export default postsSlice;
