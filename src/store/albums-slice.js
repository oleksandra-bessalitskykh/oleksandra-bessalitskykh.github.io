import { createSlice } from '@reduxjs/toolkit';

const albumsSlice = createSlice({
    name: 'albums',
    initialState: {
        items: [],
        albums: [],
    },
    reducers: {
        replaceAlbums(state, action) {
            state.items = action.payload.items;
        },
        findUserAlbums(state, action) {
            const id = action.payload;
            state.albums = state.items.filter(item => item.userId === id);
        },
    },
});

export const albumsActions = albumsSlice.actions;

export default albumsSlice;
