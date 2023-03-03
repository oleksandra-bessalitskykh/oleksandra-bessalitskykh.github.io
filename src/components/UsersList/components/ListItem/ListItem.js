import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../../UI/Card/Card';
import Albums from '../../../Albums/Albums';
import { postActions } from '../../../../store/posts-slice';
import { albumsActions } from '../../../../store/albums-slice';
import { uiActions } from '../../../../store/ui-slice';

import classes from './ListItem.module.css';

const ListItem = ({name, id}) => {
    const dispatch = useDispatch();
    const [isAlbumsVisible, setIsAlbumsVisible] = useState(false);

    const showUserPosts = () => {
        dispatch(postActions.findUserPost(id));
        dispatch(uiActions.toggle());
        setIsAlbumsVisible(false);
    };

    const showUserAlbums = () => {
        dispatch(albumsActions.findUserAlbums(id));
        setIsAlbumsVisible(isAlbumsVisible => !isAlbumsVisible);
    };

    const closeAlbums = () => {
        setIsAlbumsVisible(false);
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
                <div className={classes.albums}>
                    {isAlbumsVisible && <Albums onClose={closeAlbums}/>}
                </div>
            </Card>
        </li>
    );
};

export default ListItem;
