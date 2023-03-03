import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../../UI/Card/Card';
import Posts from '../../../Posts/Posts';
import Albums from '../../../Albums/Albums';
import { postActions } from '../../../../store/posts-slice';
import { albumsActions } from '../../../../store/albums-slice';

import classes from './ListItem.module.css';

const ListItem = ({name, id}) => {
    const dispatch = useDispatch();
    const [isPostsVisible, setIsPostsVisible] = useState(false);
    const [isAlbumsVisible, setIsAlbumsVisible] = useState(false);

    const showUserPosts = () => {
        dispatch(postActions.findUserPost(id));
        setIsPostsVisible(isPostsVisible => !isPostsVisible);
        setIsAlbumsVisible(false);
    };
    const showUserAlbums = () => {
        dispatch(albumsActions.findUserAlbums(id));
        setIsAlbumsVisible(isAlbumsVisible => !isAlbumsVisible);
        setIsPostsVisible(false);
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{name}</h3>
                </header>
                <div className={classes.actions}>
                    <button onClick={showUserPosts}>Posts</button>
                    <button onClick={showUserAlbums}>Albums</button>
                </div>
                { isPostsVisible && <Posts />}
                { isAlbumsVisible && <Albums />}
            </Card>
        </li>
    );
};

export default ListItem;
