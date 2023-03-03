import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { postsIsVisible: false },
    reducers: {
        toggle(state) {
            state.postsIsVisible = !state.postsIsVisible;
        },
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
