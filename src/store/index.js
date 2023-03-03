import { configureStore } from '@reduxjs/toolkit';

import usersSlice from './users-slice';
import postsSlice from './posts-slice';
import albumsSlice from './albums-slice';
import uiSlice from './ui-slice';

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        albums: albumsSlice.reducer,
        ui: uiSlice.reducer,
    },
});

export default store;
