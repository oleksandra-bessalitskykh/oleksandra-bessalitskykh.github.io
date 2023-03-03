import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Layout from './components/Layout/Layout';
import UsersList from './components/UsersList/UsersList';
import Posts from './components/Posts/Posts';

import { fetchUsersData } from './store/users-actions';
import { fetchPostsData } from './store/posts-actions';
import { fetchAlbumsData } from './store/albums-actions';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsersData());
        dispatch(fetchPostsData());
        dispatch(fetchAlbumsData());
    }, [dispatch]);

    return (
        <Fragment>
            <Layout>
                <UsersList/>
            </Layout>
        </Fragment>
    );
}

export default App;
