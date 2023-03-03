import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import UsersList from './components/UsersList/UsersList';
import Posts from './components/Posts/Posts';
import { fetchUsersData } from './store/users-actions';

function App() {
    const dispatch = useDispatch();
    const isPostsVisible = useSelector((state) => state.ui.postsIsVisible);

    useEffect(() => {
        dispatch(fetchUsersData());
    }, [dispatch]);

    return (
        <Fragment>
            <Layout>
                {!isPostsVisible && <UsersList/>}
                {isPostsVisible && <Posts/>}
            </Layout>
        </Fragment>
    );
}

export default App;
