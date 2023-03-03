import { configureStore } from '@reduxjs/toolkit';

import usersSlice from './users-slice';
import postsSlice from './posts-slice';
import albumsSlice from './albums-slice';

const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
        posts: postsSlice.reducer,
        albums: albumsSlice.reducer,
    },
});

export default store;
