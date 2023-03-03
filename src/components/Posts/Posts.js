import { useDispatch, useSelector } from 'react-redux';

import Card from '../UI/Card/Card';
import Post from './components/Post/Post';
import { uiActions } from '../../store/ui-slice';

import classes from './Posts.module.css';

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.items);

    const onClose = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <Card className={classes.posts}>
            <header>
                <h2>Posts</h2>
                <button onClick={onClose}>X</button>
            </header>
            <ul>
                {posts.map((item, index) => (
                    <Post
                        key={item.id}
                        item={{
                            id: index + 1,
                            title: item.title,
                            body: item.body,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Posts;
