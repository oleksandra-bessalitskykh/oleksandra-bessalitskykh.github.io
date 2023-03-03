import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Card from '../../../UI/Card/Card';
import Albums from '../../../Albums/Albums';
import { fetchUserPosts } from '../../../../store/posts-actions';
import { fetchUserAlbums } from '../../../../store/albums-actions';
import { uiActions } from '../../../../store/ui-slice';

import classes from './ListItem.module.css';

const ListItem = ({name, id}) => {
    const dispatch = useDispatch();
    const [isAlbumsVisible, setIsAlbumsVisible] = useState(false);

    const showUserPosts = () => {
        dispatch(fetchUserPosts(id));
        dispatch(uiActions.toggle());
        setIsAlbumsVisible(false);
    };

    const showUserAlbums = () => {
        dispatch(fetchUserAlbums(id));
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
