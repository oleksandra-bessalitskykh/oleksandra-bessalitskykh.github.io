import { createSlice } from '@reduxjs/toolkit';

const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        items: [],
    },
    reducers: {
        replaceAlbums(state, action) {
            state.items = action.payload.items;
        },
    },
});

export const albumsActions = albumsSlice.actions;

export default albumsSlice;
