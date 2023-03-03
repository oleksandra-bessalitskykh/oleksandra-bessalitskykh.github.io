import { useSelector } from 'react-redux';

import Card from '../UI/Card/Card';
import Album from './components/Album/Album';
import classes from './Albums.module.css';


const Albums = () => {
    const albums = useSelector((state) => state.albums.albums);

    return (
        <Card className={classes.albums}>
            <h2>User Albums</h2>
            <ul>
                {albums.map(item => (
                    <Album
                        key={item.id}
                        title={item.title}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Albums;
