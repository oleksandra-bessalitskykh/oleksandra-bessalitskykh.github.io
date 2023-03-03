import { useSelector } from 'react-redux';

import Album from './components/Album/Album';
import classes from './Albums.module.css';

const Albums = ({onClose}) => {
    const albums = useSelector((state) => state.albums.items);

    return (
        <div className={classes.albums}>
            <header>
                <h2>User Albums</h2>
                <button onClick={onClose}>X</button>
            </header>
            <ul>
                {albums.map(item => (
                    <Album
                        key={item.id}
                        title={item.title}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Albums;
